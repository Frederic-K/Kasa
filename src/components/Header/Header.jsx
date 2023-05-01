// import React from 'react'
import { NavLink } from 'react-router-dom'
import Logo from '../../assets/logo/KASA_LOGO_red.svg'

function Header() {
  return (
    <header className="header__container">
      <NavLink to="/" className="header__logo">
        <img src={Logo} alt="Logo Kasa" />
      </NavLink>
      <nav className="header__nav">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? 'nav__link--active' : 'nav__link'
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive ? 'nav__link--active' : 'nav__link'
          }
        >
          A propos
        </NavLink>
      </nav>
    </header>
  )
}

export default Header
