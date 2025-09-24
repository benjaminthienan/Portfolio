import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <section>
      <h1 style={{ marginBottom: 8 }}>Benjamin's Portfolio</h1>
      <p style={{ marginBottom: 16 }}>
        Welcome to my portfolio website! I'm a student passionate about web development and programming.
      </p>
      <div style={{ display: 'flex', gap: 10 }}>
        <Link to="/about"
          style={{ padding: '10px 14px', border: '1px solid #ddd', borderRadius: 8 }}>
          about me
        </Link>
        <Link to="/projects"
          style={{ padding: '10px 14px', border: '1px solid #ddd', borderRadius: 8 }}>
          view projects
        </Link>
      </div>
    </section>
  )
}
