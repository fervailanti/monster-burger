import React from 'react'
import classes from './Order.module.css'
import Collapsible from '../Collapsible/Collapsible'
import salad from '../../assets/images/salad.svg'
import bacon from '../../assets/images/bacon.svg'
import cheese from '../../assets/images/cheese.svg'
import meat from '../../assets/images/meat.svg'
import translateBurgerName from '../../helpers/translateBurgerName' 
import Burger from '../Burger/Burger'

const Order = props => {

  const translateIngredients = (ingredient, type) => {
    const ingredients = {
      bacon: {
        title: 'Panceta',
        icon: bacon
      },
      cheese: {
        title: 'Queso',
        icon: cheese
      },
      meat: {
        title: 'Carne',
        icon: meat
      },
      salad: {
        title: 'Ensalada',
        icon: salad
      },
    }
    return ingredients[ingredient][type]
  }

  const translateDetails = detail => {
    const details = {
      address: 'Dirección',
      country: 'País',
      deliveryMethod: 'Tipo de envío',
      email: 'Correo electrónico',
      name: 'Nombre',
      zipCode: 'Código postal'
    }
    return details[detail]
  }
  
  const ingredients = []
  for (let ingredientName in props.ingredients) {
    ingredients.push({
      name: ingredientName,
      amount: props.ingredients[ingredientName]
    })
  }

  const details = []
  for (let detailType in props.details) {
    details.push({
      type: detailType,
      value: props.details[detailType]
    })
  }

  const ingredientOutput = ingredients.map(ig => (
    <p key={ig.name} className={classes.Ingredient}>
      <img alt='Ingrediente' src={translateIngredients(ig.name, 'icon')}/>
      {translateIngredients(ig.name, 'title')}
      <strong style={{marginLeft:'4px'}}>{ig.amount}</strong>
    </p>
  ))

  const translateDetailsValues = value => {
    const deliveryMethods = {
      fast: 'Rápido',
      normal: 'Normal'
    }
    return deliveryMethods.hasOwnProperty(value) ? deliveryMethods[value] : value
  }

  const detailsOutput = details.map(e => (
    <p key={e.type} className={classes.Ingredient}>
      <strong style={{marginRight:'4px'}}>{translateDetails(e.type)}:</strong>
      {translateDetailsValues(e.value)}
    </p>
  ))
  
  return (
    <div className={classes.Order}>
      <p style={{fontWeight: '300',margin:0}}>
        Pedido #{props.number}
      </p>
      <p style={{margin:0}}>
        <strong>{translateBurgerName(props.ingredients)}</strong>
      </p>
      <div>
        <Burger ingredients={props.ingredients} small />
      </div>
      <Collapsible
        title='Ingredientes'
        content={ingredientOutput}
      />
      <Collapsible 
        title='Detalles'
        content={detailsOutput}
      />
      <p style={{
        margin: '8px 0 0 0',
        fontSize: '20px'
      }}>
        Precio: <strong>${props.price}</strong>
      </p>
    </div>
  )
}
  

export default Order