import { NavLink } from 'react-router-dom'
import logo from '../assets/logo.svg'

export default function Navbar() {
  const linkStyle = ({ isActive }) => ({
    textDecoration: 'none',
    padding: '8px 12px',
    borderRadius: '8px',
    fontWeight: 500,
    backgroundColor: isActive ? '#f0f0f0' : 'transparent'
  })

  return (
    <header style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '12px 16px',
      borderBottom: '1px solid #eee',
      position: 'sticky',
      top: 0,
      background: '#fff',
      zIndex: 10
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
        <img src={logo} alt="BN logo" width="36" height="36" />
        <span style={{ fontSize: 18 }}>Benjamin Nguyen</span>
      </div>

      <nav style={{ display: 'flex', gap: 8 }}>
        <NavLink to="/" style={linkStyle} end>Home</NavLink>
        <NavLink to="/about" style={linkStyle}>About</NavLink>
        <NavLink to="/projects" style={linkStyle}>Projects</NavLink>
        <NavLink to="/services" style={linkStyle}>Services</NavLink>
        <NavLink to="/contact" style={linkStyle}>Contact</NavLink>
      </nav>
    </header>
  )
}
