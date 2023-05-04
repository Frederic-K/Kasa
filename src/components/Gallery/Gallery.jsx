import accomodations from '../../data/logements.json'
import Cardv2 from '../Card/Cardv2'

function Gallery() {
  return (
    <section className="main__gallery--cards">
      {accomodations.map((card) => (
        <Cardv2
          key={`${card.id}`}
          id={`${card.id}`}
          cover={card.cover}
          title={card.title}
        />
      ))}
    </section>
  )
}

export default Gallery
