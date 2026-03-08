# 🚀 Agent Memory Service - Deployment Checklist

## Pre-Deployment Requirements

### 1. Create Accounts (Human Action Required)
- [ ] Create [Supabase](https://supabase.com) account
- [ ] Create [Railway](https://railway.app) account
- [ ] Create [Stripe](https://stripe.com) account (for payments - can wait)

### 2. Supabase Setup
- [ ] Create new project in Supabase dashboard
- [ ] Wait for project to initialize (~2 minutes)
- [ ] Go to SQL Editor and run: `supabase/migrations/001_create_memories_table.sql`
- [ ] Go to Settings > API and copy:
  - [ ] Project URL (looks like: https://xxxxx.supabase.co)
  - [ ] Service Role Key (under "Service role - secret")

### 3. Railway Deployment
- [ ] Fork or push the repo to your GitHub account
- [ ] In Railway dashboard, click "New Project"
- [ ] Choose "Deploy from GitHub repo"
- [ ] Select the agent-memory repository
- [ ] Add environment variables:
  ```
  SUPABASE_URL=your_project_url
  SUPABASE_SERVICE_KEY=your_service_role_key
  ```
- [ ] Click "Deploy"
- [ ] Wait for build to complete (~3 minutes)
- [ ] Get your app URL from Railway (e.g., agent-memory.up.railway.app)

### 4. Verify Deployment
- [ ] Test health endpoint: `curl https://your-app.railway.app/api/health`
- [ ] Test memory storage (see DEPLOY.md for examples)
- [ ] Check Railway logs for any errors

### 5. DNS Setup (Optional but Recommended)
- [ ] Add custom domain in Railway settings
- [ ] Update DNS records as instructed
- [ ] Wait for SSL certificate (automatic)

### 6. Monitoring Setup
- [ ] Enable Railway metrics
- [ ] Set up Supabase alerts for database usage
- [ ] Create uptime monitor (UptimeRobot/Pingdom)

## Post-Deployment Tasks

### Immediate (Day 1)
- [ ] Update landing page with live API URL
- [ ] Test all API endpoints thoroughly
- [ ] Create first demo video
- [ ] Post launch announcement

### Week 1
- [ ] Reach out to 10 potential customers
- [ ] Set up analytics (Plausible/SimpleAnalytics)
- [ ] Create API documentation site
- [ ] Write first blog post

### Ongoing
- [ ] Monitor error logs daily
- [ ] Check database performance
- [ ] Respond to customer feedback
- [ ] Track API usage metrics

## Rollback Plan
If something goes wrong:
1. Railway: Use "Rollback" button to previous deployment
2. Supabase: Database backups are automatic
3. Keep local copy of working code

## Support Channels
- Technical issues: Create GitHub issue
- Customer support: support@autocompany.dev (set up)
- Status page: status.autocompany.dev (set up)

---

**Estimated Time**: 30-45 minutes for full deployment
**Cost**: $0 (both services have free tiers)
