import React from 'react'
import BurgerIngredient from './BurgerIngredient/BurgerIngredient'
import classes from './Burger.module.css'

const Burger = ({ ingredients, small }) => {

  let transformedIngredients = Object.keys(ingredients)
  .map(igKey => [...Array(ingredients[igKey])].map((_, i) => (
    <BurgerIngredient key={igKey + i} type={igKey} small={small} />
  )))
  .reduce((arr, el) => arr.concat(el), [])

  transformedIngredients.length === 0 && (
    transformedIngredients = <p>Comenzá a añadir ingredientes</p>
  )

  return (
    <div className={[classes.Container, small && classes.Small].join(' ')}>
      <div className={classes.Burger}>
        <BurgerIngredient type='bread-top' small={small} />
        {transformedIngredients}
        <BurgerIngredient type='bread-bottom' small={small} />
      </div>
    </div>
  )
}

export default Burger