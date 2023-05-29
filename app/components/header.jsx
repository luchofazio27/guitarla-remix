import { Link } from "@remix-run/react"
import logo from '../../public/img/logo.svg' 

function Header() {
  return (
    <header className="header">
        <div className="container navbar">
            <Link to='/'>
                <img className="logo" src={logo} alt='logo image' />
            </Link>
            <nav className="navigation">
                <Link to="/">Inicio</Link>
                <Link to="/we">Nosotros</Link>
                <Link to="/store">Tienda</Link>
                <Link to="/blog">Blog</Link>
            </nav>
        </div>
    </header>
  )
}

export default Header
