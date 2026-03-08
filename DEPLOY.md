# Deployment Guide

## Prerequisites
- Railway account
- Supabase account

## Step 1: Supabase Setup

1. Create new Supabase project
2. Run migration: `supabase/migrations/001_create_memories_table.sql`
3. Get credentials from Settings > API:
   - `SUPABASE_URL`: Your project URL
   - `SUPABASE_SERVICE_KEY`: Service role key (secret)

## Step 2: Railway Deployment

1. Install Railway CLI: `npm install -g @railway/cli`
2. Login: `railway login`
3. Initialize: `railway init`
4. Set environment variables:
   ```bash
   railway variables set SUPABASE_URL=your_url_here
   railway variables set SUPABASE_SERVICE_KEY=your_key_here
   ```
5. Deploy: `railway up`

## Step 3: Verify Deployment

Test the endpoints:

```bash
# Health check
curl https://your-app.railway.app/api/health

# Store a memory
curl -X POST https://your-app.railway.app/api/memories \
  -H "Content-Type: application/json" \
  -H "X-API-Key: test-key-123" \
  -d '{
    "namespace": "test",
    "key": "hello",
    "value": {"message": "Hello from production!"}
  }'

# Retrieve the memory
curl "https://your-app.railway.app/api/memories?namespace=test&key=hello" \
  -H "X-API-Key: test-key-123"
```

## Environment Variables

Required for production:
- `SUPABASE_URL`: Your Supabase project URL
- `SUPABASE_SERVICE_KEY`: Supabase service role key
