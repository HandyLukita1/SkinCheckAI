import { Outlet } from 'react-router-dom';
import { Link } from 'react-router-dom';

export default function Layout() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', fontFamily: 'system-ui, sans-serif' }}>
      
      {/* Professional Navbar */}
      <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1rem 3rem', backgroundColor: '#ffffff', borderBottom: '1px solid #e2e8f0', position: 'sticky', top: 0, zIndex: 1000 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <span style={{ fontSize: '1.25rem', fontWeight: 800, color: '#1A3052', letterSpacing: '-0.02em' }}>SkinCheckAI</span>
        </div>
        <nav style={{ display: 'flex', gap: '2rem' }}>
          <Link to="/" style={{ textDecoration: 'none', color: '#475569', fontWeight: 600, fontSize: '1rem' }}>Home</Link>
          <Link to="/scan" style={{ textDecoration: 'none', color: '#475569', fontWeight: 600, fontSize: '1rem' }}>Scanner</Link>
        </nav>
      </header>

      {/* Main Page Content */}
      <main style={{ flex: 1 }}>
        <Outlet />
      </main>

      {/* Professional Footer */}
      <footer style={{ backgroundColor: '#1e293b', color: '#94a3b8', padding: '2.5rem 3rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem', borderTop: '1px solid #334155' }}>
        <div>
          <p style={{ color: '#ffffff', fontWeight: 700, fontSize: '1.1rem', margin: '0 0 0.25rem 0' }}>SkinCheckAI</p>
          <p style={{ fontSize: '0.9rem', margin: 0 }}>© SkinCheckAI Project 2026. All rights reserved.</p>
        </div>
        <div style={{ maxWidth: '400px', textAlign: 'right' }}>
          <p style={{ fontSize: '0.8rem', margin: 0, opacity: 0.8, lineHeight: 1.4 }}>
            This system is an assistive tool, not a replacement for professional medical diagnosis.
          </p>
        </div>
      </footer>

    </div>
  );
}