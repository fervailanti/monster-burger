import React from 'react'
import Aux from '../../hoc/Aux'
import Button from '../Button/Button'
import classes from './OrderSummary.module.css'

const OrderSummary = ({ ingredients, cancel, accept, price }) => {

  const translateIngredients = ingredient => {
    const ingredients = {
      bacon: 'Panceta',
      cheese: 'Queso',
      meat: 'Carne',
      salad: 'Ensalada',
    }
    return ingredients[ingredient]
  }

  const ingredientSummary = Object.keys(ingredients)
  .map(igKey => (
    <li key={igKey}>
      {translateIngredients(igKey)}: <strong>{ingredients[igKey]}</strong>
    </li>
  ))
  return (
    <Aux>
      <div className={classes.OrderSummary}>
        <h3>Tu orden</h3>
        <p>Una hamburguesa con los siguientes ingredientes:</p>
        <ul>
          {ingredientSummary}
        </ul>
        <p><strong>Precio total: {'$'+price.toFixed(2)}</strong></p>
        <Button
          buttonType='Ghost'
          buttonClick={cancel}
        >
          Cancelar
        </Button>
        <Button
          buttonType='Principal'
          buttonClick={accept}
        >
          Aceptar
        </Button>
      </div>
    </Aux>
  )
}

export default OrderSummary