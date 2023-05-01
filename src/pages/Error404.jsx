import { NavLink } from 'react-router-dom'

function Error404() {
  return (
    <div className="main__errorPage">
      <span className="main__errorPage--type">404</span>
      <span className="main__errorPage--title">
        Oups! La page que vous demandez n'existe pas.
      </span>

      <NavLink to="/" className="main__errorPage--link">
        Retourner sur la page d’accueil
      </NavLink>
    </div>
  )
}

export default Error404
