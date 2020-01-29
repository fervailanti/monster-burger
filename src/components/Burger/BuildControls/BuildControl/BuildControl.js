import React from 'react'
import classes from './BuildControl.module.css'
import minus from '../../../../assets/images/minus.svg'
import plus from '../../../../assets/images/plus.svg'

const BuildControl = ({ label, counter, addIngredient, removeIngredient, disabled, icon}) => (
  <div className={classes.BuildControl}>
    <div className={classes.Label}>
      <img src={icon} alt='salad' style={{height: '24px', marginRight: '8px'}}/>
      {label} <strong>{counter}</strong>
    </div>
    <button onClick={removeIngredient} disabled={disabled}>
      <img src={minus} alt='less'/>
    </button>
    <button onClick={addIngredient}>
      <img src={plus} alt='more'/>
    </button>
  </div>
)

export default BuildControl