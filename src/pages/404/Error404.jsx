import { NavLink } from 'react-router-dom'

function Error404() {
  return (
    <main className="main__errorPage">
      <div className="main__errorPage--type">404</div>
      <div className="main__errorPage--title">
        Oups! La page que vous demandez n'existe pas.
      </div>

      <NavLink to="/" className="main__errorPage--link">
        Retourner sur la page d’accueil
      </NavLink>
    </main>
  )
}

export default Error404
