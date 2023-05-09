import React, { useState } from 'react'
import arrowPrevious from '../../assets/icons/arrowPrevious.svg'
import arrowNext from '../../assets/icons/arrowNext.svg'

function Carousel({ data }) {
  const { pictures, title } = data
  const [currentPix, setCurrentPix] = useState(0)

  const handlePrevious = () =>
    currentPix === 0
      ? setCurrentPix(pictures.length - 1)
      : setCurrentPix(currentPix - 1)
  const handleNext = () =>
    currentPix < pictures.length - 1
      ? setCurrentPix(currentPix + 1)
      : setCurrentPix(0)

  //   const handelMoveSlide = (direction) => {
  //     if (currentPix === 0) {
  //       setCurrentPix(pictures.length + direction)
  //     } else if (currentPix < pictures.length - 1) {
  //       setCurrentPix(currentPix + direction)
  //     } else {
  //       setCurrentPix(0)
  //     }
  //   }

  return (
    <section className="carousel">
      {pictures.map((pix, index) => {
        return (
          <div className="carousel__container" key={`pix-${index}`}>
            {index === currentPix && (
              <div>
                <div className="carousel__pix">
                  <img src={pix} alt={`${title}`} />
                </div>
                <span className="carousel__counter">
                  {index + 1}/{pictures.length}
                </span>
              </div>
            )}
          </div>
        )
      })}
      {pictures.length > 1 && (
        <div className="carousel__button">
          <button
            type="button"
            className="carousel__button--arrowPrevious"
            onClick={handlePrevious}
          >
            <img src={arrowPrevious} alt="Bouton précédent" />
          </button>
          <button
            type="button"
            className="carousel__button--arrowNext"
            onClick={handleNext}
          >
            <img src={arrowNext} alt="Bouton suivant" />
          </button>
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
