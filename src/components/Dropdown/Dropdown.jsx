import React, { useState } from 'react'
// import arrowUp from '../../assets/icons/arrowUp.svg'
import arrowDown from '../../assets/icons/arrowDown.svg'

function Dropdown({ title, content }) {
  const [isOpen, setIsOpen] = useState(false)
  const onToggle = () => setIsOpen(!isOpen)

  return (
    <div className="dropdown">
      {/* <h3 className="dropdown__title">{title}</h3> */}
      <button
        type="button"
        className="dropdown__btn"
        data-status={isOpen ? 'close' : 'open'}
        onClick={onToggle}
      >
        <span className="dropdown__title">{title}</span>
        <img
          className={
            isOpen ? 'dropdown__btn--arrowUp' : 'dropdown__btn--arrowDown'
          }
          src={arrowDown}
          alt="icone flèche"
        />
      </button>
      <div
        className={
          isOpen ? 'dropdown__content--open' : 'dropdown__content--close'
        }
      >
        {typeof content !== 'object' ? (
          <div>{content}</div>
        ) : (
          <ul>
            {content.map((el, index) => (
              <li key={`${el}-${index}`}>{el}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  )
}

export default Dropdown
