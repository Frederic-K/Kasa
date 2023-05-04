import accomodations from '../../data/logements.json'
import Card from '../Card/Card'

function Gallery() {
  return (
    <section className="main__gallery--cards">
      {accomodations.map((card) => (
        <Card
          key={`card-${card.id}`}
          id={`${card.id}`}
          cover={card.cover}
          title={card.title}
        />
      ))}
    </section>
  )
}

export default Gallery
