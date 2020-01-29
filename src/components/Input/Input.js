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

  let inputElement

  const inputClasses = [classes.InputElement]
  !valid && touched && inputClasses.push(classes.Invalid)

  const invalidMessage = !valid && touched && '*'

  switch (elementType) {
    case ('input'): inputElement = (
      <input 
        className={inputClasses.join(' ')}
        {...elementConfig}
        value={value}
        onChange={elementChange}
      />
    )
    break
    case ('textarea'): inputElement = (
      <input 
        className={inputClasses.join(' ')}
        {...elementConfig}
        value={value}
        onChange={elementChange}
      />
    )
    break
    case ('select'): inputElement = (
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
    )
    break
    default: inputElement = (
      <input
        className={inputClasses.join(' ')}
        {...elementConfig}
        value={value}
        onChange={elementChange}
      />
    )
  }

  // const inputElement = type => {
  //   const types = {
  //     input: (
  //       <input 
  //         className={classes.InputElement}
  //         {...elementConfig}
  //         value={value}
  //       />
  //     ),
  //     textarea: (
  //       <textarea
  //         className={classes.InputElement}
  //         {...elementConfig}
  //         value={value}
  //       />
  //     ),
  //     select: (
  //       <select 
  //         className={classes.InputElement} 
  //         value={value}
  //       >
  //         {elementConfig.options.map(option => (
  //           <option value={option.value}>
  //             {option.displayValue} 
  //           </option>
  //         ))}
  //       </select>
  //     ),
  //     default: (
  //       <input
  //         className={classes.InputElement}
  //         {...elementConfig}
  //         value={value}
  //       />
  //     )
  //   }
  //   const typesList = Object.keys(types)
  //   return typesList.includes(type) ? types[type] : types['default']
  // }

  return (
    <div className={classes.Input}>
      <label className={classes.Label}>
        {label} <span className={classes.InvalidMessage}>{invalidMessage}</span>
      </label>
      {inputElement}
      {/* {inputElement(elementType)} */}
    </div>
  )
}

export default Input