import React from 'react'
import Aux from '../../components/Aux/Aux'
import Button from '../Button/Button'
import classes from './ModalSummary.module.css'

const ModalSummary = ({ ingredients, cancel, accept, price }) => {

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
      <div className={classes.ModalSummary}>
        <h3>Tu orden</h3>
        <p>Una hamburguesa con los siguientes ingredientes:</p>
        <ul>
          {ingredientSummary}
        </ul>
        <p><strong>Precio total: {'$'+price}</strong></p>
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

export default ModalSummary