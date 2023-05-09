import Card from '../Card/Card'

function Gallery({ data }) {
  return (
    <div className="main__gallery--cards">
      {data.map((card) => (
        <Card
          key={`card-${card.id}`}
          // id={`${card.id}`}
          // cover={card.cover}
          // title={card.title}
          data={card}
        />
      ))}
    </div>
  )
}

export default Gallery
