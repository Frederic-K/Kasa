import FullStar from '../../assets/icons/starFull.svg'
import EmptyStar from '../../assets/icons/starEmpty.svg'

function Rating({ data }) {
  const rank = [1, 2, 3, 4, 5]
  const rating = data

  return (
    <div className="rating__container">
      {rank.map((rangeLevel, index) =>
        rating >= rangeLevel ? (
          <div className="rating__icon--fullStar">
            <img src={FullStar} alt="Etoile pleine" key={`star-${index}`} />
          </div>
        ) : (
          <div className="rating__icon--emptyStar">
            <img src={EmptyStar} alt="Etoile vide" key={`star-${index}`} />
          </div>
        )
      )}
    </div>
  )
}

export default Rating
