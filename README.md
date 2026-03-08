# Agent Memory

**Persistent memory for AI agents. Never lose context again.**

Simple REST API for storing and retrieving memories across AI agent sessions.

## Features

- 🧠 **Persistent Storage** - Memories survive restarts
- 🔍 **Fast Search** - Find anything instantly
- ⚡ **Simple API** - REST endpoints, 5 min integration
- 🔐 **Secure** - API key authentication
- 📦 **Namespaces** - Organize memories by context
- ⏱️ **TTL Support** - Auto-expire temporary memories

## Quick Start

### Store a Memory

```bash
curl -X POST https://agent-memory.app/api/memories \
  -H "X-API-Key: your_api_key" \
  -H "Content-Type: application/json" \
  -d '{
    "key": "user_preferences",
    "value": {"theme": "dark", "language": "en"},
    "namespace": "app"
  }'
```

### Retrieve a Memory

```bash
curl https://agent-memory.app/api/memories?key=user_preferences \
  -H "X-API-Key: your_api_key"
```

### Search Memories

```bash
curl https://agent-memory.app/api/memories?q=preferences \
  -H "X-API-Key: your_api_key"
```

### Delete a Memory

```bash
curl -X DELETE https://agent-memory.app/api/memories?key=user_preferences \
  -H "X-API-Key: your_api_key"
```

## API Reference

### POST /api/memories

Store or update a memory.

**Headers:**
- `X-API-Key`: Your API key (required)
- `Content-Type`: application/json

**Body:**
```json
{
  "key": "string (required)",
  "value": "any (required)",
  "namespace": "string (optional, default: 'default')",
  "ttl": "number (optional, seconds until expiry)"
}
```

### GET /api/memories

Retrieve or search memories.

**Query Parameters:**
- `key`: Specific memory key
- `q`: Search query (full-text search)
- `namespace`: Namespace filter (default: 'default')

### DELETE /api/memories

Delete a memory.

**Query Parameters:**
- `key`: Memory key to delete (required)
- `namespace`: Namespace (default: 'default')

## Use Cases

### Auto-co Instances
```typescript
// Store decision from cycle
await fetch('https://agent-memory.app/api/memories', {
  method: 'POST',
  headers: {
    'X-API-Key': process.env.AGENT_MEMORY_KEY,
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    key: `decision_cycle_${cycleNumber}`,
    value: { decision, rationale, outcome },
    namespace: 'auto-co'
  })
})
```

### Chat Agents
```python
# Store user preferences
requests.post(
    'https://agent-memory.app/api/memories',
    headers={'X-API-Key': api_key},
    json={
        'key': f'user_{user_id}_prefs',
        'value': {'theme': 'dark', 'language': 'en'},
        'namespace': 'chat'
    }
)
```

### LangChain Apps
```javascript
// Store chain state
await memory.store({
  key: 'chain_state',
  value: { step: 5, context: '...', results: [...] },
  namespace: 'langchain'
})
```

## Pricing

### Free Tier
- 1,000 memories
- 10,000 reads/month
- 7-day retention
- Community support

### Pro - $9/month
- Unlimited memories
- Unlimited reads
- 90-day retention
- Priority support
- Custom namespaces
- Advanced search

## Development

```bash
# Install dependencies
npm install

# Run dev server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

### Environment Variables

Create `.env.local`:

```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
SUPABASE_SERVICE_KEY=your_service_key
```

## Deployment

### Railway

[![Deploy on Railway](https://railway.app/button.svg)](https://railway.app/template/...)

### Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=...)

## Database Schema

```sql
CREATE TABLE memories (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  api_key TEXT NOT NULL,
  namespace TEXT NOT NULL DEFAULT 'default',
  key TEXT NOT NULL,
  value JSONB NOT NULL,
  ttl TIMESTAMP,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW(),
  UNIQUE(api_key, namespace, key)
);

CREATE INDEX idx_memories_search ON memories USING GIN(to_tsvector('english', value::text));
CREATE INDEX idx_memories_ttl ON memories(ttl) WHERE ttl IS NOT NULL;
```

## License

MIT

## Support

- Email: hello@agent-memory.app
- GitHub Issues: [github.com/yourusername/agent-memory](https://github.com/yourusername/agent-memory)
- Discord: [Join our community](https://discord.gg/...)

---

Built with ❤️ by AI agents, for AI agents.
