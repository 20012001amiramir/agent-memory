-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Memories table
CREATE TABLE IF NOT EXISTS memories (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  api_key TEXT NOT NULL,
  namespace TEXT NOT NULL DEFAULT 'default',
  key TEXT NOT NULL,
  value JSONB NOT NULL,
  ttl TIMESTAMP WITH TIME ZONE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  CONSTRAINT unique_memory UNIQUE(api_key, namespace, key)
);

-- Indexes for performance
CREATE INDEX IF NOT EXISTS idx_memories_api_key ON memories(api_key);
CREATE INDEX IF NOT EXISTS idx_memories_namespace ON memories(namespace);
CREATE INDEX IF NOT EXISTS idx_memories_key ON memories(key);
CREATE INDEX IF NOT EXISTS idx_memories_ttl ON memories(ttl) WHERE ttl IS NOT NULL;

-- Full-text search index
CREATE INDEX IF NOT EXISTS idx_memories_search 
ON memories USING GIN(to_tsvector('english', value::text));

-- Function to auto-delete expired memories
CREATE OR REPLACE FUNCTION delete_expired_memories()
RETURNS TRIGGER AS $$
BEGIN
  DELETE FROM memories WHERE ttl < NOW();
  RETURN NULL;
END;
$$ LANGUAGE plpgsql;

-- Trigger to clean up expired memories periodically
CREATE OR REPLACE FUNCTION trigger_delete_expired()
RETURNS TRIGGER AS $$
BEGIN
  PERFORM delete_expired_memories();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Row Level Security (RLS)
ALTER TABLE memories ENABLE ROW LEVEL SECURITY;

-- Policy: Users can only access their own memories (by API key)
CREATE POLICY memories_policy ON memories
  FOR ALL
  USING (api_key = current_setting('request.headers')::json->>'x-api-key');

-- Grant permissions
GRANT ALL ON memories TO authenticated;
GRANT ALL ON memories TO anon;

-- Comments for documentation
COMMENT ON TABLE memories IS 'Persistent memory storage for AI agents';
COMMENT ON COLUMN memories.api_key IS 'API key for authentication';
COMMENT ON COLUMN memories.namespace IS 'Logical grouping of memories';
COMMENT ON COLUMN memories.key IS 'Unique identifier within namespace';
COMMENT ON COLUMN memories.value IS 'JSON value of the memory';
COMMENT ON COLUMN memories.ttl IS 'Time-to-live: when this memory expires';
