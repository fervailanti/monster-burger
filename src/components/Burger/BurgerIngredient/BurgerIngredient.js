import React from 'react'
import PropTypes from 'prop-types';
import classes from './BurgerIngredient.module.css'

const BurgerIngredient = ({ type, small }) => {
  const ingredients = {
    'bread-bottom': (
      <div className={classes.BreadBottom} style={{
        height: small && '10px',
        width: small && '56px',
        margin: small && '0.5px'
      }}></div>
    ),
    'bread-top': (
      <div className={classes.BreadTop} style={{
        height: small && '12px',
        width: small && '56px',
        margin: small && '0.5px'
      }}>
        <div className={classes.Seeds1}></div>
        <div className={classes.Seeds2}></div>
      </div>
    ),
    'meat': (
      <div className={classes.Meat} style={{
        height: small && '7px',
        width: small && '56px',
        margin: small && '0.5px'
      }}></div>
    ),
    'cheese': (
      <div className={classes.Cheese} style={{
        height: small && '3px',
        width: small && '57px',
        margin: small && '0.5px'
      }}></div>
    ),
    'bacon': (
      <div className={classes.Bacon} style={{
        height: small && '3px',
        width: small && '56px',
        margin: small && '0.5px'
      }}></div>
    ),
    'salad': (
      <div className={classes.Salad} style={{
        height: small && '3.5px',
        width: small && '57px',
        margin: small && '0.5px'
      }}></div>
    )
  }
  return ingredients.hasOwnProperty(type) && ingredients[type]
}

BurgerIngredient.propTypes = {
  type: PropTypes.string.isRequired
}

export default BurgerIngredient