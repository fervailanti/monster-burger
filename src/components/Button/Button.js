import React from 'react'
import classes from './Button.module.css'

const Button = ({children, buttonType, buttonClick, disabled}) => (
  <button 
    onClick={buttonClick}
    className={[classes.Button, classes[buttonType]].join(' ')}
    disabled={disabled}
  >
    {children}
  </button>
)

export default Button