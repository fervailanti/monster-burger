import React from 'react'
import classes from './Order.module.css'
import Collapsible from '../Collapsible/Collapsible'
import Burger from '../Burger/Burger'
import { images } from '../../assets/images'
import { translateBurgerName }  from '../../helpers/translateBurgerName' 

const Order = props => {

  const translateIngredients = (ingredient, type) => {
    const ingredients = {
      bacon: {
        title: 'Panceta',
        icon: images.ingredients.bacon
      },
      cheese: {
        title: 'Queso',
        icon: images.ingredients.cheese
      },
      meat: {
        title: 'Carne',
        icon: images.ingredients.meat
      },
      salad: {
        title: 'Ensalada',
        icon: images.ingredients.salad
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