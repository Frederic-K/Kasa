function Cardv2({ cover, title }) {
  return (
    <article className="card__accomodation">
      <img
        className="card__accomodation--img"
        src={cover}
        alt={`Lien vers l'hébergement ${title}`}
      />
      <div className="card__accomodation--caption">
        <h3>{title}</h3>
      </div>
    </article>
  )
}

export default Cardv2
