import { NavLink } from 'react-router-dom'

function Card({ data }) {
  return (
    <article className="card__accomodation">
      <NavLink
        className="card__acccomodation--link"
        to={`/accomodation/${data.id}`}
        state={{ accomodationDatas: data }}
        // state={{ test404: data }}
      >
        <div className="card__accomodation--img">
          <img src={data.cover} alt={`Lien vers l'hébergement ${data.title}`} />
        </div>
        <div className="card__accomodation--caption">
          <h3>{data.title}</h3>
        </div>
      </NavLink>
    </article>
  )
}

export default Card
