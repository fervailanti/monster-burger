import React from 'react'
import classes from './EmptyState.module.css'
import crying from '../../assets/images/crying.svg'

const EmptyState = props => (
  <div className={classes.EmptyState}>
    <img src={crying} alt='Llorando'/>
    <p>{props.text}</p>
  </div>
)

export default EmptyState