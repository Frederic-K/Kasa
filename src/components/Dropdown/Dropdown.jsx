import React, { useState } from 'react'
import arrowDown from '../../assets/icons/arrowDown.svg'

function Dropdown({ title, content }) {
  const [isOpen, setIsOpen] = useState(false)
  const onToggle = () => setIsOpen(!isOpen)

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
          onClick={() => onToggle()}
        />
      </button>
      <div
        className={
          isOpen ? 'dropdown__content--open' : 'dropdown__content--close'
        }
      >
        {/* If content is a string show content, otherwise generate a list  */}
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
