import React, { useState } from 'react'
import arrowUp from '../../assets/icons/arrowUp.svg'
import arrowDown from '../../assets/icons/arrowDown.svg'

function Dropdown({ title, content }) {
  const [isOpen, setIsOpen] = useState(false)
  const onToggle = () => setIsOpen(!isOpen)

  return (
    <div className="dropdown">
      <button
        type="button"
        className={isOpen ? 'dropdown__btn--open' : 'dropdown__btn--close'}
        data-status={isOpen ? 'close' : 'open'}
        onClick={onToggle}
      >
        <span className="dropdown__title">{title}</span>
        <img
          className="dropdown__btn--iconDown"
          src={arrowDown}
          alt="icone flèche bas"
        />
        <img
          className="dropdown__btn--iconUp"
          src={arrowUp}
          alt="icone flèche haut"
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
