import React from 'react'
import classes from './Input.module.css'

const Input = ({
  elementConfig,
  value,
  label,
  elementType,
  elementChange,
  valid,
  touched,
  configStyle
}) => {

  const inputClasses = [classes.InputElement]
  !valid && touched && inputClasses.push(classes.Invalid)

  const left = configStyle.position === 'left'
  const right = configStyle.position === 'right' 

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
    return types.hasOwnProperty(type) ? types[type]() : types['default']()
  }

  return (
    <div className={[classes.Input, configStyle.row && classes.Row].join(' ')} style={{
      padding: left ? '0 12px 0 0' : right ? '0 0 0 12px' : '0'
    }}>
      <label className={classes.Label}>
        {label} <span className={classes.InvalidMessage}>{invalidMessage}</span>
      </label>
      {inputElement(elementType)}
    </div>
  )
}

export default Input