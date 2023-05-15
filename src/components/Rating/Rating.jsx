import FullStar from '../../assets/icons/starFull.svg'
import EmptyStar from '../../assets/icons/starEmpty.svg'

function Rating({ data }) {
  const range = [1, 2, 3, 4, 5]
  const rating = data

  return (
    <div className="rating__container">
      {range.map((rangeElem, index) =>
        rating >= rangeElem ? (
          <div
            className="rating__icon--fullStar"
            key={`fullStar-${rangeElem}-${index}`}
          >
            <img src={FullStar} alt="Etoile pleine" />
          </div>
        ) : (
          <div
            className="rating__icon--emptyStar"
            key={`emptyStar-${rangeElem}-${index}`}
          >
            <img src={EmptyStar} alt="Etoile vide" />
          </div>
        )
      )}
    </div>
  )
}

export default Rating
