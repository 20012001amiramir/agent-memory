export default function Home() {
  return (
    <main style={{
      minHeight: '100vh',
      padding: '2rem',
      maxWidth: '64rem',
      margin: '0 auto',
      fontFamily: 'system-ui, sans-serif'
    }}>
      <h1 style={{ fontSize: '2.25rem', fontWeight: 'bold', marginBottom: '1rem' }}>
        Agent Memory Service
      </h1>
      <p style={{ fontSize: '1.25rem', marginBottom: '2rem' }}>
        Persistent memory for AI agents. Never lose context again.
      </p>
      
      <div style={{
        backgroundColor: '#f3f4f6',
        padding: '1.5rem',
        borderRadius: '0.5rem',
        marginBottom: '2rem'
      }}>
        <h2 style={{ fontSize: '1.5rem', fontWeight: '600', marginBottom: '1rem' }}>
          Quick Start
        </h2>
        <pre style={{
          backgroundColor: '#1f2937',
          color: 'white',
          padding: '1rem',
          borderRadius: '0.25rem',
          overflow: 'auto',
          fontSize: '0.875rem'
        }}>
{`# Store a memory
curl -X POST https://your-app.railway.app/api/memories \\
  -H "X-API-Key: your-key" \\
  -H "Content-Type: application/json" \\
  -d '{"key": "user_prefs", "value": {"theme": "dark"}}'

# Retrieve a memory  
curl https://your-app.railway.app/api/memories?key=user_prefs \\
  -H "X-API-Key: your-key"`}
        </pre>
      </div>
      
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
        <div style={{ border: '1px solid #e5e7eb', padding: '1.5rem', borderRadius: '0.5rem' }}>
          <h3 style={{ fontSize: '1.25rem', fontWeight: '600', marginBottom: '0.5rem' }}>
            Free Tier
          </h3>
          <p style={{ fontSize: '1.875rem', fontWeight: 'bold', marginBottom: '1rem' }}>
            $0/mo
          </p>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            <li>✓ 1,000 memories</li>
            <li>✓ 10,000 reads/month</li>
            <li>✓ Community support</li>
          </ul>
        </div>
        
        <div style={{
          border: '2px solid #3b82f6',
          padding: '1.5rem',
          borderRadius: '0.5rem'
        }}>
          <h3 style={{ fontSize: '1.25rem', fontWeight: '600', marginBottom: '0.5rem' }}>
            Pro
          </h3>
          <p style={{ fontSize: '1.875rem', fontWeight: 'bold', marginBottom: '1rem' }}>
            $9/mo
          </p>
          <ul style={{ listStyle: 'none', padding: 0 }}>
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
