import React from 'react'
import classes from './BuildControls.module.css'
import BuildControl from './BuildControl/BuildControl'
import salad from '../../../assets/images/salad.svg'
import bacon from '../../../assets/images/bacon.svg'
import cheese from '../../../assets/images/cheese.svg'
import meat from '../../../assets/images/meat.svg'
import translateBurgerName from '../../../helpers/translateBurgerName'

const controls = [
  {
    label: 'Ensalada',
    type: 'salad',
    icon: salad
  },
  {
    label: 'Panceta',
    type: 'bacon',
    icon: bacon
  },
  {
    label: 'Queso',
    type: 'cheese',
    icon: cheese
  },
  {
    label: 'Carne',
    type: 'meat',
    icon: meat
  }
]

const BuildControls = ({ 
  addIngredient, 
  removeIngredient, 
  disabled, 
  totalPrice, 
  purchasable, 
  orderClick,
  ingredients
}) => (
  <div className={classes.BuildControls}>
    <p style={{fontWeight: '600'}}>
      {translateBurgerName(ingredients)}
    </p>
    <p>
      Precio total <strong>${totalPrice.toFixed(2)}</strong>
    </p>
    {controls.map(e => (
      <BuildControl 
        key={e.label} 
        label={e.label}
        addIngredient={() => addIngredient(e.type)}
        removeIngredient={() => removeIngredient(e.type)}
        disabled={disabled[e.type]}
        counter={ingredients[e.type]}
        icon={e.icon}
      />
    ))}
    <button 
      className={classes.OrderButton} 
      disabled={!purchasable}
      onClick={orderClick} 
    >
      Pedir
    </button>
  </div>
)
 
export default BuildControls