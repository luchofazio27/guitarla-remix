import { Link, useLocation } from "@remix-run/react"

function Navigation() {

    const location = useLocation()
    
  return (
    <nav className="navigation">
     <Link to="/" className={location.pathname === '/' ? 'active' : ''}>Inicio</Link>
     <Link to="/we" className={location.pathname === '/we' ? 'active' : ''}>Nosotros</Link>
     <Link to="/guitars" className={location.pathname === '/guitars' ? 'active' : ''}>Tienda</Link>
     <Link to="/blog" className={location.pathname === '/blog' ? 'active' : ''}>Blog</Link>
    </nav>
  )
}

export default Navigation
