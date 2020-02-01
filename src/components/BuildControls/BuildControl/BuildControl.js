import React from 'react'
import classes from './BuildControl.module.css'
import { images } from '../../../assets/images'

const BuildControl = ({ label, counter, addIngredient, removeIngredient, disabled, icon}) => (
  <div className={classes.BuildControl}>
    <div className={classes.Label}>
      <img src={icon} alt='salad' style={{height: '24px', marginRight: '8px'}}/>
      {label} <strong>{counter}</strong>
    </div>
    <button onClick={removeIngredient} disabled={disabled}>
      <img src={images.utility.minus} alt='less'/>
    </button>
    <button onClick={addIngredient}>
      <img src={images.utility.plus} alt='more'/>
    </button>
  </div>
)

export default BuildControl