import { NavLink } from 'react-router-dom'
import Logo from '../../assets/logo/KASA_LOGO_white.svg'

function Footer() {
  return (
    <footer className="footer__container">
      <NavLink to="/" className="footer__container--logo">
        <img src={Logo} alt="Logo Kasa" />
      </NavLink>
      <span className="footer__container--title">
        © 2020 Kasa. All rights reserved
      </span>
    </footer>
  )
}

export default Footer
