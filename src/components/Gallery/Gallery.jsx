import Card from '../Card/Card'

function Gallery({ accomodation }) {
  return (
    <main>
      <section className="gallery">
        <ul className="gallery__thumb">
          {accomodation.map((card) => (
            <Card key={card.id} card={card} />
          ))}
        </ul>
      </section>
    </main>
  )
}

export default Gallery
