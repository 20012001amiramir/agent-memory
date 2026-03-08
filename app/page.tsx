export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="container mx-auto px-4 py-16 max-w-6xl">
        {/* Hero */}
        <div className="text-center mb-16">
          <h1 className="text-6xl font-bold text-white mb-6">
            Agent Memory
          </h1>
          <p className="text-2xl text-purple-200 mb-8">
            Persistent memory for AI agents. Never lose context again.
          </p>
          <div className="flex gap-4 justify-center">
            <a href="#quickstart" className="bg-purple-500 hover:bg-purple-600 text-white px-8 py-3 rounded-lg font-semibold transition">
              Get Started
            </a>
            <a href="#pricing" className="bg-white/10 hover:bg-white/20 text-white px-8 py-3 rounded-lg font-semibold transition">
              View Pricing
            </a>
          </div>
        </div>

        {/* Features */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white/5 backdrop-blur p-6 rounded-xl border border-white/10">
            <div className="text-4xl mb-4">🧠</div>
            <h3 className="text-xl font-semibold text-white mb-2">Persistent Storage</h3>
            <p className="text-purple-200">Store memories across sessions. Your agent remembers everything.</p>
          </div>
          <div className="bg-white/5 backdrop-blur p-6 rounded-xl border border-white/10">
            <div className="text-4xl mb-4">🔍</div>
            <h3 className="text-xl font-semibold text-white mb-2">Fast Search</h3>
            <p className="text-purple-200">Find anything instantly with full-text search.</p>
          </div>
          <div className="bg-white/5 backdrop-blur p-6 rounded-xl border border-white/10">
            <div className="text-4xl mb-4">⚡</div>
            <h3 className="text-xl font-semibold text-white mb-2">Simple API</h3>
            <p className="text-purple-200">REST API. 5 minutes to integrate.</p>
          </div>
        </div>

        {/* Quick Start */}
        <div id="quickstart" className="bg-white/5 backdrop-blur rounded-xl p-8 mb-16 border border-white/10">
          <h2 className="text-3xl font-bold text-white mb-6">Quick Start</h2>
          <div className="bg-slate-950 p-6 rounded-lg overflow-x-auto">
            <pre className="text-green-400 text-sm">
{`# Store a memory
curl -X POST https://agent-memory.app/api/memories \\
  -H "X-API-Key: your_api_key" \\
  -H "Content-Type: application/json" \\
  -d '{
    "key": "user_preferences",
    "value": {"theme": "dark", "language": "en"},
    "namespace": "app",
    "ttl": 86400
  }'

# Retrieve a memory
curl https://agent-memory.app/api/memories?key=user_preferences \\
  -H "X-API-Key: your_api_key"

# Search memories
curl https://agent-memory.app/api/memories?q=preferences \\
  -H "X-API-Key: your_api_key"`}
            </pre>
          </div>
        </div>

        {/* Use Cases */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Perfect For</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white/5 backdrop-blur p-6 rounded-xl border border-white/10">
              <h3 className="text-xl font-semibold text-white mb-3">🤖 Auto-co Instances</h3>
              <p className="text-purple-200">Remember decisions, learnings, and context across cycles.</p>
            </div>
            <div className="bg-white/5 backdrop-blur p-6 rounded-xl border border-white/10">
              <h3 className="text-xl font-semibold text-white mb-3">💬 Chat Agents</h3>
              <p className="text-purple-200">Persist user preferences and conversation history.</p>
            </div>
            <div className="bg-white/5 backdrop-blur p-6 rounded-xl border border-white/10">
              <h3 className="text-xl font-semibold text-white mb-3">🔗 LangChain Apps</h3>
              <p className="text-purple-200">Store agent state, tool results, and chain context.</p>
            </div>
            <div className="bg-white/5 backdrop-blur p-6 rounded-xl border border-white/10">
              <h3 className="text-xl font-semibold text-white mb-3">🎯 Custom Agents</h3>
              <p className="text-purple-200">Any AI agent that needs long-term memory.</p>
            </div>
          </div>
        </div>

        {/* Pricing */}
        <div id="pricing" className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Simple Pricing</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white/5 backdrop-blur p-8 rounded-xl border border-white/10">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-semibold text-white mb-2">Free</h3>
                <div className="text-5xl font-bold text-white mb-2">$0</div>
                <div className="text-purple-200">forever</div>
              </div>
              <ul className="space-y-3 text-purple-200">
                <li className="flex items-center gap-2">
                  <span className="text-green-400">✓</span> 1,000 memories
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-400">✓</span> 10,000 reads/month
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-400">✓</span> Community support
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-400">✓</span> 7-day retention
                </li>
              </ul>
              <button className="w-full mt-6 bg-white/10 hover:bg-white/20 text-white py-3 rounded-lg font-semibold transition">
                Start Free
              </button>
            </div>

            <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 backdrop-blur p-8 rounded-xl border-2 border-purple-400/50 relative">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-purple-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                POPULAR
              </div>
              <div className="text-center mb-6">
                <h3 className="text-2xl font-semibold text-white mb-2">Pro</h3>
                <div className="text-5xl font-bold text-white mb-2">$9</div>
                <div className="text-purple-200">per month</div>
              </div>
              <ul className="space-y-3 text-purple-200">
                <li className="flex items-center gap-2">
                  <span className="text-green-400">✓</span> Unlimited memories
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-400">✓</span> Unlimited reads
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-400">✓</span> Priority support
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-400">✓</span> 90-day retention
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-400">✓</span> Custom namespaces
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-400">✓</span> Advanced search
                </li>
              </ul>
              <button className="w-full mt-6 bg-purple-500 hover:bg-purple-600 text-white py-3 rounded-lg font-semibold transition">
                Get Started
              </button>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center text-purple-300 text-sm">
          <p>Built with ❤️ by AI agents, for AI agents</p>
          <p className="mt-2">
            <a href="mailto:hello@agent-memory.app" className="hover:text-white transition">Contact</a>
            {' · '}
            <a href="/docs" className="hover:text-white transition">Docs</a>
            {' · '}
            <a href="https://github.com/yourusername/agent-memory" className="hover:text-white transition">GitHub</a>
          </p>
        </div>
      </div>
    </main>
  )
}
