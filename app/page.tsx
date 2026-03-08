export default function Home() {
  return (
    <div>
      <h1>Agent Memory Service API</h1>
      <p>API endpoints:</p>
      <ul>
        <li>POST /api/memories - Store memory</li>
        <li>GET /api/memories?namespace=X&key=Y - Retrieve memory</li>
        <li>GET /api/health - Health check</li>
      </ul>
      <p>Documentation: <a href="https://github.com/20012001amiramir/agent-memory">GitHub</a></p>
    </div>
  )
}
