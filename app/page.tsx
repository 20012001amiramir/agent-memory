export default function Home() {
  return (
    <main style={{
      minHeight: '100vh',
      padding: '2rem',
      maxWidth: '64rem',
      margin: '0 auto',
      fontFamily: 'system-ui, sans-serif',
      lineHeight: 1.6
    }}>
      {/* Hero */}
      <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
        <h1 style={{ fontSize: '3rem', fontWeight: 'bold', marginBottom: '1rem' }}>
          Agent Memory Service
        </h1>
        <p style={{ fontSize: '1.5rem', color: '#666', marginBottom: '2rem' }}>
          Persistent memory for AI agents. Never lose context again.
        </p>
        <a href="#quick-start" style={{
          backgroundColor: '#3b82f6',
          color: 'white',
          padding: '0.75rem 2rem',
          borderRadius: '0.5rem',
          textDecoration: 'none',
          fontSize: '1.125rem',
          display: 'inline-block'
        }}>
          Get Started Free
        </a>
      </div>

      {/* Features */}
      <div style={{ marginBottom: '4rem' }}>
        <h2 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '2rem', textAlign: 'center' }}>
          Why Agent Memory?
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>
          <div>
            <div style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>🧠</div>
            <h3 style={{ fontSize: '1.25rem', fontWeight: '600', marginBottom: '0.5rem' }}>
              Never Forget
            </h3>
            <p style={{ color: '#666' }}>
              Your AI agents remember everything between sessions. No more starting from scratch.
            </p>
          </div>
          <div>
            <div style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>⚡</div>
            <h3 style={{ fontSize: '1.25rem', fontWeight: '600', marginBottom: '0.5rem' }}>
              Lightning Fast
            </h3>
            <p style={{ color: '#666' }}>
              Sub-100ms response time. Your agents work at full speed.
            </p>
          </div>
          <div>
            <div style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>🔒</div>
            <h3 style={{ fontSize: '1.25rem', fontWeight: '600', marginBottom: '0.5rem' }}>
              Secure & Private
            </h3>
            <p style={{ color: '#666' }}>
              Your data is encrypted and isolated. API key authentication.
            </p>
          </div>
          <div>
            <div style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>📦</div>
            <h3 style={{ fontSize: '1.25rem', fontWeight: '600', marginBottom: '0.5rem' }}>
              Simple API
            </h3>
            <p style={{ color: '#666' }}>
              Just REST. No SDKs required. Works with any language.
            </p>
          </div>
        </div>
      </div>

      {/* Use Cases */}
      <div style={{ backgroundColor: '#f9fafb', padding: '3rem 2rem', borderRadius: '1rem', marginBottom: '4rem', marginLeft: '-2rem', marginRight: '-2rem' }}>
        <h2 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '2rem', textAlign: 'center' }}>
          Use Cases
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
          <div style={{ backgroundColor: 'white', padding: '1.5rem', borderRadius: '0.5rem' }}>
            <h3 style={{ fontSize: '1.125rem', fontWeight: '600', marginBottom: '0.75rem' }}>
              🤖 AI Chatbots
            </h3>
            <p style={{ color: '#666', fontSize: '0.95rem' }}>
              Remember user preferences, conversation history, and context across sessions.
            </p>
          </div>
          <div style={{ backgroundColor: 'white', padding: '1.5rem', borderRadius: '0.5rem' }}>
            <h3 style={{ fontSize: '1.125rem', fontWeight: '600', marginBottom: '0.75rem' }}>
              🔄 Workflow Automation
            </h3>
            <p style={{ color: '#666', fontSize: '0.95rem' }}>
              Store task state, decisions made, and intermediate results.
            </p>
          </div>
          <div style={{ backgroundColor: 'white', padding: '1.5rem', borderRadius: '0.5rem' }}>
            <h3 style={{ fontSize: '1.125rem', fontWeight: '600', marginBottom: '0.75rem' }}>
              💬 Multi-Agent Systems
            </h3>
            <p style={{ color: '#666', fontSize: '0.95rem' }}>
              Share knowledge between agents. Build collaborative AI teams.
            </p>
          </div>
        </div>
      </div>

      {/* Quick Start */}
      <div id="quick-start" style={{ marginBottom: '4rem' }}>
        <h2 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '1.5rem' }}>
          Quick Start
        </h2>
        <div style={{
          backgroundColor: '#f3f4f6',
          padding: '1.5rem',
          borderRadius: '0.5rem'
        }}>
          <pre style={{
            backgroundColor: '#1f2937',
            color: 'white',
            padding: '1.5rem',
            borderRadius: '0.5rem',
            overflow: 'auto',
            fontSize: '0.875rem'
          }}>
{`# Store a memory
curl -X POST https://agent-memory-production-a3fc.up.railway.app/api/memories \\
  -H "X-API-Key: demo-key" \\
  -H "Content-Type: application/json" \\
  -d '{"namespace":"my-agent","key":"user_123_prefs","value":{"theme":"dark","lang":"en"}}'

# Retrieve it later
curl https://agent-memory-production-a3fc.up.railway.app/api/memories?namespace=my-agent&key=user_123_prefs \\
  -H "X-API-Key: demo-key"

# Response
{"data":{"namespace":"my-agent","key":"user_123_prefs","value":{"theme":"dark","lang":"en"}}}`}
          </pre>
        </div>
      </div>

      {/* Pricing */}
      <div style={{ marginBottom: '4rem' }}>
        <h2 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '2rem', textAlign: 'center' }}>
          Simple Pricing
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', maxWidth: '800px', margin: '0 auto' }}>
          <div style={{ border: '2px solid #e5e7eb', padding: '2rem', borderRadius: '1rem', textAlign: 'center' }}>
            <h3 style={{ fontSize: '1.5rem', fontWeight: '600', marginBottom: '1rem' }}>
              Free
            </h3>
            <p style={{ fontSize: '3rem', fontWeight: 'bold', marginBottom: '1.5rem' }}>
              $0<span style={{ fontSize: '1.25rem', fontWeight: 'normal', color: '#666' }}>/mo</span>
            </p>
            <ul style={{ listStyle: 'none', padding: 0, textAlign: 'left', marginBottom: '1.5rem' }}>
              <li style={{ padding: '0.5rem 0' }}>✓ 1,000 memories</li>
              <li style={{ padding: '0.5rem 0' }}>✓ 10,000 reads/month</li>
              <li style={{ padding: '0.5rem 0' }}>✓ Community support</li>
              <li style={{ padding: '0.5rem 0' }}>✓ Perfect for testing</li>
            </ul>
          </div>
          
          <div style={{
            border: '3px solid #3b82f6',
            padding: '2rem',
            borderRadius: '1rem',
            textAlign: 'center',
            position: 'relative'
          }}>
            <div style={{
              position: 'absolute',
              top: '-12px',
              left: '50%',
              transform: 'translateX(-50%)',
              backgroundColor: '#3b82f6',
              color: 'white',
              padding: '0.25rem 1rem',
              borderRadius: '1rem',
              fontSize: '0.875rem',
              fontWeight: '600'
            }}>
              Popular
            </div>
            <h3 style={{ fontSize: '1.5rem', fontWeight: '600', marginBottom: '1rem' }}>
              Pro
            </h3>
            <p style={{ fontSize: '3rem', fontWeight: 'bold', marginBottom: '1.5rem' }}>
              $9<span style={{ fontSize: '1.25rem', fontWeight: 'normal', color: '#666' }}>/mo</span>
            </p>
            <ul style={{ listStyle: 'none', padding: 0, textAlign: 'left', marginBottom: '1.5rem' }}>
              <li style={{ padding: '0.5rem 0' }}>✓ Unlimited memories</li>
              <li style={{ padding: '0.5rem 0' }}>✓ Unlimited reads</li>
              <li style={{ padding: '0.5rem 0' }}>✓ Priority support</li>
              <li style={{ padding: '0.5rem 0' }}>✓ Custom namespaces</li>
              <li style={{ padding: '0.5rem 0' }}>✓ 99.9% uptime SLA</li>
            </ul>
          </div>
        </div>
      </div>

      {/* FAQ */}
      <div style={{ marginBottom: '4rem' }}>
        <h2 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '2rem', textAlign: 'center' }}>
          FAQ
        </h2>
        <div style={{ maxWidth: '700px', margin: '0 auto' }}>
          <details style={{ marginBottom: '1rem', padding: '1rem', border: '1px solid #e5e7eb', borderRadius: '0.5rem' }}>
            <summary style={{ fontWeight: '600', cursor: 'pointer' }}>
              How does it work?
            </summary>
            <p style={{ marginTop: '0.75rem', color: '#666' }}>
              Simple REST API. POST to store memories, GET to retrieve. Each memory has a namespace + key for organization.
            </p>
          </details>
          <details style={{ marginBottom: '1rem', padding: '1rem', border: '1px solid #e5e7eb', borderRadius: '0.5rem' }}>
            <summary style={{ fontWeight: '600', cursor: 'pointer' }}>
              What can I store?
            </summary>
            <p style={{ marginTop: '0.75rem', color: '#666' }}>
              Any JSON data: user preferences, conversation history, task states, decisions, context - anything your agent needs to remember.
            </p>
          </details>
          <details style={{ marginBottom: '1rem', padding: '1rem', border: '1px solid #e5e7eb', borderRadius: '0.5rem' }}>
            <summary style={{ fontWeight: '600', cursor: 'pointer' }}>
              Is my data secure?
            </summary>
            <p style={{ marginTop: '0.75rem', color: '#666' }}>
              Yes. All data is encrypted at rest and in transit. Each account is isolated with API key authentication.
            </p>
          </details>
          <details style={{ marginBottom: '1rem', padding: '1rem', border: '1px solid #e5e7eb', borderRadius: '0.5rem' }}>
            <summary style={{ fontWeight: '600', cursor: 'pointer' }}>
              Can I try it now?
            </summary>
            <p style={{ marginTop: '0.75rem', color: '#666' }}>
              Yes! Use demo-key in the Quick Start example above. Free tier includes 1,000 memories.
            </p>
          </details>
        </div>
      </div>

      {/* Footer CTA */}
      <div style={{ textAlign: 'center', padding: '3rem 0', borderTop: '1px solid #e5e7eb' }}>
        <h2 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '1rem' }}>
          Ready to give your AI agents a memory?
        </h2>
        <p style={{ fontSize: '1.25rem', color: '#666', marginBottom: '2rem' }}>
          Start free. No credit card required.
        </p>
        <a href="https://github.com/20012001amiramir/agent-memory" style={{
          backgroundColor: '#3b82f6',
          color: 'white',
          padding: '0.75rem 2rem',
          borderRadius: '0.5rem',
          textDecoration: 'none',
          fontSize: '1.125rem',
          display: 'inline-block'
        }}>
          View Documentation
        </a>
      </div>
    </main>
  )
}
