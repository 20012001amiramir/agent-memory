#!/bin/bash

# Agent Memory Service Health Check Script
# Run via cron every 5 minutes

API_URL="${API_URL:-https://agent-memory.railway.app}"
WEBHOOK_URL="${DISCORD_WEBHOOK_URL}"  # Optional Discord webhook

# Check health endpoint
response=$(curl -s -w "\n%{http_code}" "$API_URL/api/health")
http_code=$(echo "$response" | tail -n1)
body=$(echo "$response" | sed '$d')

if [ "$http_code" != "200" ]; then
    echo "❌ Health check failed: HTTP $http_code"
    
    # Send Discord notification if webhook is set
    if [ ! -z "$WEBHOOK_URL" ]; then
        curl -H "Content-Type: application/json" \
             -X POST \
             -d "{\"content\":\"🚨 Agent Memory Service is DOWN! HTTP $http_code\"}" \
             "$WEBHOOK_URL"
    fi
    
    exit 1
fi

# Test memory operations
test_key="health_check_$(date +%s)"
test_value='{"status":"healthy","timestamp":"'$(date -u +"%Y-%m-%dT%H:%M:%SZ")'"}'

# Store a test memory
store_response=$(curl -s -X POST "$API_URL/api/memories" \
  -H "Content-Type: application/json" \
  -H "X-API-Key: health-check-key" \
  -d '{
    "namespace": "monitoring",
    "key": "'$test_key'",
    "value": '$test_value'
  }')

if ! echo "$store_response" | grep -q '"success":true'; then
    echo "❌ Memory store failed"
    exit 1
fi

# Retrieve the test memory
get_response=$(curl -s "$API_URL/api/memories?namespace=monitoring&key=$test_key" \
  -H "X-API-Key: health-check-key")

if ! echo "$get_response" | grep -q "$test_key"; then
    echo "❌ Memory retrieve failed"
    exit 1
fi

echo "✅ Health check passed at $(date)"
