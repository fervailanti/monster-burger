import React from 'react'
import classes from './EmptyState.module.css'
import { images } from '../../assets/images'

const EmptyState = props => (
  <div className={classes.EmptyState}>
    <img src={images.crying} alt='Llorando'/>
    <p>{props.text}</p>
  </div>
)

export default EmptyState