import Card from '../Card/Card'

function Gallery({ accomodation }) {
  return (
    <main>
      <section className="gallery">
        <ul className="gallery__thumb">
          {accomodation.map((item) => (
            <Card key={item.id} item={item} />
          ))}
        </ul>
      </section>
    </main>
  )
}

export default Gallery
