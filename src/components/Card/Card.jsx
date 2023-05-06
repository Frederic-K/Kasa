import { NavLink } from 'react-router-dom'

function Card({ id, cover, title }) {
  return (
    <article className="card__accomodation">
      <NavLink className="card__acccomodation--link" to={`/accomodation/${id}`}>
        <div className="card__accomodation--img">
          <img src={cover} alt={`Lien vers l'hébergement ${title}`} />
        </div>
        <div className="card__accomodation--caption">
          <h3>{title}</h3>
        </div>
      </NavLink>
    </article>
  )
}

export default Card
