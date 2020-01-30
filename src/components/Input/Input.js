import React from 'react'
import classes from './Input.module.css'

const Input = ({
  elementConfig,
  value,
  label,
  elementType,
  elementChange,
  valid,
  touched
}) => {

  const inputClasses = [classes.InputElement]
  !valid && touched && inputClasses.push(classes.Invalid)

  const invalidMessage = !valid && touched && '*'

  const inputElement = type => {
    const types = {
      input: () => (
        <input 
          className={inputClasses.join(' ')}
          {...elementConfig}
          value={value}
          onChange={elementChange}
        />
      ),
      textarea: () => (
        <textarea
          className={inputClasses.join(' ')}
          {...elementConfig}
          value={value}
          onChange={elementChange}
        />
      ),
      select: () => (
        <select 
          className={inputClasses.join(' ')} 
          value={value}
          onChange={elementChange}
        >
          {elementConfig.options.map(option => (
            <option key={option.value} value={option.value}>
              {option.displayValue} 
            </option>
          ))}
        </select>
      ),
      default: () => (
        <input
          className={inputClasses.join(' ')}
          {...elementConfig}
          value={value}
          onChange={elementChange}
        />
      )
    }
    const typesList = Object.keys(types)
    return typesList.includes(type) ? types[type]() : types['default']()
  }

  return (
    <div className={classes.Input}>
      <label className={classes.Label}>
        {label} <span className={classes.InvalidMessage}>{invalidMessage}</span>
      </label>
      {inputElement(elementType)}
    </div>
  )
}

export default Input