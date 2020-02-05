import React from 'react'
import classes from './WithError.module.css'

const options = {
  error: () => (
    <div className={classes.WithError}>
      <p>
        ¡Ups! Ocurrió un error.
      </p>
    </div>
  ),
  default: (children) => children
}

const WithError = props => props.error ? options.error() : options.default(props.children)

export default WithError