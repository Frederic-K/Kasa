import React, { useState } from 'react'
import arrowDown from '../../assets/icons/arrowDown.svg'

function Dropdown({ title, content }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="dropdown">
      <button type="button" className="dropdown__btn">
        <span className="dropdown__btn--title">{title}</span>
        <img
          className={
            isOpen ? 'dropdown__btn--iconOpen' : 'dropdown__btn--iconClose'
          }
          src={arrowDown}
          alt="Bouton menu"
          onClick={() => setIsOpen(!isOpen)}
        />
      </button>
      <div
        className={
          isOpen ? 'dropdown__content--open' : 'dropdown__content--close'
        }
      >
        {typeof content === 'string' ? (
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
