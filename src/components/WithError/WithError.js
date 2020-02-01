import React from 'react'

const WithError = props => props.error ? <p style={{textAlign: 'center'}}>
  ¡Ups! An error has ocurred
</p> : props.children

export default WithError