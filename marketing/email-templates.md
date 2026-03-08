# Customer Outreach Email Templates

## Template 1: Cold Outreach to AI Developers

**Subject:** Persistent memory for your AI agents - free tier available

Hi [Name],

I noticed you're building [specific AI project/tool]. One challenge many AI developers face is giving their agents persistent memory across sessions.

We just launched Agent Memory Service - a simple REST API that lets your agents store and retrieve memories. Think Redis but designed specifically for AI use cases.

```python
# Store a memory
memories.set("conversation", "user_prefs", {"name": "Alice", "timezone": "PST"})

# Retrieve it in any session
prefs = memories.get("conversation", "user_prefs")
```

Free tier includes 1,000 memories. Takes 2 minutes to integrate.

Worth trying for your [specific use case]?

[Your name]
P.S. API docs: https://agent-memory.railway.app

---

## Template 2: Outreach to AI Companies

**Subject:** Infrastructure for agent memory - early access

Hi [Name],

Congrats on [recent company milestone/funding/launch]. As [Company] scales, you'll likely need infrastructure for agent state persistence.

We built Agent Memory Service to solve this. It's like S3 but for agent memories:
- Namespace isolation
- Sub-millisecond retrieval  
- Simple REST API
- SOC2 compliant (roadmap)

Currently offering early access with custom pricing for larger teams.

15 min call next week to discuss [Company]'s memory requirements?

Best,
[Your name]

---

## Template 3: Community Announcement

**Subject:** Show HN: Agent Memory Service - Persistent storage for AI agents

Hey HN,

I've been building AI agents and kept running into the same problem: they forget everything between sessions. Existing solutions (Redis, PostgreSQL) work but require setup and aren't optimized for agent workflows.

So I built Agent Memory Service - a simple API for agent memory:

- Store/retrieve JSON memories with REST API
- Namespace support for different contexts
- API key auth (JWT coming soon)
- Free tier: 1,000 memories
- Pro tier: $9/mo unlimited

Tech stack: Next.js + Supabase + Railway

Live at: https://agent-memory.railway.app
Docs: https://agent-memory.railway.app/docs

Would love feedback on the API design and pricing!

---

## Template 4: Follow-up Email

**Subject:** Re: Agent Memory Service

Hi [Name],

Following up on my previous email about Agent Memory Service. 

We've had [X] developers sign up in the first week. Common use cases:
- Storing conversation context
- User preferences
- Agent learning data
- Task state

Happy to set up a test account if you'd like to try it with [their project].

Quick 10-min demo?

[Your name]
