export default function Home() {
  return (
    <main className="min-h-screen p-8 max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-4">Agent Memory Service</h1>
      <p className="text-xl mb-8">Persistent memory for AI agents. Never lose context again.</p>
      
      <div className="bg-gray-100 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-semibold mb-4">Quick Start</h2>
        <pre className="bg-black text-white p-4 rounded overflow-x-auto text-sm">
{`# Store a memory
curl -X POST https://agent-memory.up.railway.app/api/memories \\
  -H "X-API-Key: your-key" \\
  -H "Content-Type: application/json" \\
  -d '{"key": "user_prefs", "value": {"theme": "dark"}}'

# Retrieve a memory  
curl https://agent-memory.up.railway.app/api/memories?key=user_prefs \\
  -H "X-API-Key: your-key"`}
        </pre>
      </div>
      
      <div className="grid md:grid-cols-2 gap-6">
        <div className="border p-6 rounded-lg">
          <h3 className="text-xl font-semibold mb-2">Free Tier</h3>
          <p className="text-3xl font-bold mb-4">$0/mo</p>
          <ul className="space-y-2">
            <li>✓ 1,000 memories</li>
            <li>✓ 10,000 reads/month</li>
            <li>✓ Community support</li>
          </ul>
        </div>
        
        <div className="border-2 border-blue-500 p-6 rounded-lg">
          <h3 className="text-xl font-semibold mb-2">Pro</h3>
          <p className="text-3xl font-bold mb-4">$9/mo</p>
          <ul className="space-y-2">
            <li>✓ Unlimited memories</li>
            <li>✓ Unlimited reads</li>
            <li>✓ Priority support</li>
            <li>✓ Custom namespaces</li>
          </ul>
        </div>
      </div>
    </main>
  )
}
