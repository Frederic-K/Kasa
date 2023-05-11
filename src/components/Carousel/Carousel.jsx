import React, { useState } from 'react'
import arrowPrevious from '../../assets/icons/arrowPrevious.svg'
import arrowNext from '../../assets/icons/arrowNext.svg'

function Carousel({ data }) {
  const { pictures, title } = data
  const [currentIndex, setCurrentIndex] = useState(0)

  const handlePrevious = () =>
    currentIndex === 0
      ? setCurrentIndex(pictures.length - 1)
      : setCurrentIndex(currentIndex - 1)
  const handleNext = () =>
    currentIndex < pictures.length - 1
      ? setCurrentIndex(currentIndex + 1)
      : setCurrentIndex(0)

  //   const handelMoveSlide = (direction) => {
  //     if (currentIndex === 0) {
  //       setCurrentIndex(pictures.length + direction)
  //     } else if (currentIndex < pictures.length - 1) {
  //       setCurrentIndex(currentIndex + direction)
  //     } else {
  //       setCurrentIndex(0)
  //     }
  //   }

  return (
    <section className="carousel">
      {pictures.map((pix, index) => {
        return (
          <div className="carousel__container" key={`pix-${index}`}>
            {index === currentIndex && (
              <div className="carousel__pix">
                <img src={pix} alt={`${title}`} />
              </div>
            )}
          </div>
        )
      })}
      {pictures.length > 1 && (
        <div>
          <span className="carousel__counter">
            {currentIndex + 1}/{pictures.length}
          </span>
          <div className="carousel__button">
            <button
              type="button"
              className="carousel__button--arrowPrevious"
              onClick={() => handlePrevious()}
            >
              <img src={arrowPrevious} alt="Bouton précédent" />
            </button>
            <button
              type="button"
              className="carousel__button--arrowNext"
              onClick={() => handleNext()}
            >
              <img src={arrowNext} alt="Bouton suivant" />
            </button>
          </div>
        </div>

        // <div>
        //   <button type="button" onClick={handelMoveSlide(-1)}>
        //     <img
        //       className="carousel__arrowPrevious"
        //       src={arrowPrevious}
        //       alt="Bouton précédent"
        //     />
        //   </button>
        //   <button type="button" onClick={handelMoveSlide(1)}>
        //     <img
        //       className="carousel__arrowPrevious"
        //       src={arrowNext}
        //       alt="Bouton suivant"
        //     />
        //   </button>
        // </div>
      )}
    </section>
  )
}

export default Carousel
