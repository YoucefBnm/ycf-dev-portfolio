import { Link } from "react-router-dom"
import { Logo } from "../../assets"
import { navLinks } from "../../constants"
import { useState } from "react"

const Navbar = () => {
  const [activeLink, setActiveLink] = useState('Home')
  
  return (
    <nav className="pad--x-default pad--y-2 flex justify--between">
        <div className="nav__logo">
            <Link to='/'>
                <Logo />
            </Link>
        </div>

        <ul className="nav__links flex align--center gap--1">
          {
            navLinks.map(navLink => (
              <li
                key={navLink.id}
                className={`${activeLink===navLink.title ? 'color--primary' : 'color--light'} nav-link`}
                onClick={() => setActiveLink(navLink.title)}
              >
                <a href={`#${navLink.id}`} className="nav-link">{navLink.title}</a>
              </li>
            ))
          }
        </ul>
    </nav>
  )
}

export default Navbar