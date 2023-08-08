import { Link } from 'react-router-dom'
import { Logo } from '../../assets'
import { navLinks } from '../../constants'
import './Nav.scss'

const Nav = () => {
  return (
    <nav className="nav pad--x-default pad--y-2 flex justify--between">
      <div className="nav__logo">
        <Link to='/'>
          <Logo />
        </Link>
      </div>

      <ul className="nav__links flex gap--2">
        {navLinks.map(navLink => (
          <li key={navLink.id}>
            <a href={`#${navLink.title}`} className='nav-link'>{navLink.title}</a>
          </li>
        ))}
      </ul>

      <div className="nav__toggle">
        <span></span><span></span><span></span>
      </div>
    </nav>
  )
}

export default Nav