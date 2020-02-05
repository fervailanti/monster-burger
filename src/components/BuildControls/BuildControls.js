import React from 'react'
import classes from './BuildControls.module.css'
import BuildControl from './BuildControl/BuildControl'
import { images } from '../../assets/images'
import { translateBurgerName } from '../../helpers/translateBurgerName'

const controls = [
  {
    label: 'Ensalada',
    type: 'salad',
    icon: images.ingredients.salad
  },
  {
    label: 'Panceta',
    type: 'bacon',
    icon: images.ingredients.bacon
  },
  {
    label: 'Queso',
    type: 'cheese',
    icon: images.ingredients.cheese
  },
  {
    label: 'Carne',
    type: 'meat',
    icon: images.ingredients.meat
  }
]

const BuildControls = ({ 
  addIngredient, 
  removeIngredient, 
  disabled, 
  price, 
  purchasable, 
  orderClick,
  ingredients
}) => (
  <div className={classes.BuildControls}>
    <p style={{fontWeight: '600'}}>
      {translateBurgerName(ingredients)}
    </p>
    <p>
      Precio total <strong>${price}</strong>
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