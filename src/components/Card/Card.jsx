import { NavLink } from 'react-router-dom'

function Card({ card }) {
  const { id, title, cover } = card

  return (
    <NavLink to={`/acccomodation/${id}`}>
      <li className="gallery__card">
        <div>
          <img
            className="gallery__card--cover"
            src={cover}
            alt={`Location ${title}`}
          />
          <span className="gallery__card--title">{title}</span>
        </div>
      </li>
    </NavLink>
  )
}

export default Card
