import React from 'react'
import BurgerIngredient from './BurgerIngredient/BurgerIngredient'
import classes from './Burger.module.css'

const Burger = ({ ingredients }) => {
  let transformedIngredients = Object.keys(ingredients)
  .map(igKey => {
    return [...Array(ingredients[igKey])].map((_, i) => {
      return <BurgerIngredient key={igKey + i} type={igKey} />
    })
  })
  .reduce((arr, el) => {
    return arr.concat(el)
  }, [])

  transformedIngredients.length === 0 && (
    transformedIngredients = <p>Comenzá a añadir ingredientes</p>
  )

  return (
    <div className={classes.Container}>
      <div className={classes.Burger}>
        <BurgerIngredient type='bread-top' />
        {transformedIngredients}
        <BurgerIngredient type='bread-bottom' />
      </div>
    </div>
  )
}

export default Burger