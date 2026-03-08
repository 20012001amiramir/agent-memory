# Agent Memory Service

Persistent memory storage for AI agents. Never lose context between sessions.

## Features

- Simple REST API for storing/retrieving memories
- Namespaced storage for organization
- TTL support for temporary memories
- Full-text search across memories
- JSON storage for complex data

## Quick Start

1. Clone the repo
2. Copy `.env.example` to `.env` and fill in Supabase credentials
3. Run `npm install`
4. Run `npm run dev`

## API Endpoints

- `POST /api/memories` - Store a memory
- `GET /api/memories?key=<key>` - Retrieve specific memory
- `GET /api/memories?q=<search>` - Search memories
- `DELETE /api/memories/<key>` - Delete a memory

## Deployment

Deploy to Railway with one click.
