import React, { useState, useEffect } from 'react'
import Aux from '../../hoc/Aux'
import Burger from '../../components/Burger/Burger'
import BuildControls from '../../components/Burger/BuildControls/BuildControls'
import Modal from '../../components/Modal/Modal'
import OrderSummary from '../../components/OrderSummary/OrderSummary'
import axios from '../../axios-orders'
import Loader from '../../components/Loader/Loader'
import WithError from '../../hoc/WithError'

const BurguerBuilder = props => {

  const INGREDIENT_PRICES = {
    meat: 1.3,
    bacon: 0.7,
    salad: 0.5,
    cheese: 0.4
  }

  const [ingredients, setIngredients] = useState()
  const [totalPrice, setPrice] = useState(4)
  const [purchasable, setPurchasable] = useState(false)
  const [purchasing, setPurchasing] = useState(false)
  const [error, setError] = useState(false)

  useEffect(() => {
    axios.get('/ingredients.json')
      .then(response => {
        setIngredients(response.data)
      })
      .catch(error => {
        setError(true)
        console.log(error)
      })
  }, [])

  const updatePurchasable = updatedIngredients => {
    let sum = 0
    for (let key in updatedIngredients) {
      sum = sum + updatedIngredients[key]
    }
    setPurchasable(sum > 0);
  }

  const addIngredient = type => {
    const newIngredients = {
      ...ingredients,
      [type]: ingredients[type] + 1
    }
    setIngredients({ ...newIngredients }) 
    setPrice(totalPrice + INGREDIENT_PRICES[type])
    updatePurchasable(newIngredients)
  }

  const removeIngredient = type => {
    const newIngredients = {
      ...ingredients,
      [type]: ingredients[type] - 1
    }
    setIngredients({ ...newIngredients })
    setPrice(totalPrice - INGREDIENT_PRICES[type])
    updatePurchasable(newIngredients)
  }

  const orderBurger = () => {
    const queryParams = []
    for (let i in ingredients) {
      queryParams.push(encodeURIComponent(i) + '=' + encodeURIComponent(ingredients[i]))
    }
    queryParams.push('price=' + totalPrice.toFixed(2))
    const queryString = queryParams.join('&')
    props.history.push({
      pathname: '/checkout',
      search: '?' + queryString
    })
  }

  const disabled = {
    ...ingredients
  }

  for (let key in disabled) {
    disabled[key] = disabled[key] <= 0
  }

  const orderSummary = ingredients && <OrderSummary
    ingredients={ingredients}
    cancel={() => setPurchasing(false)}
    accept={orderBurger}
    price={totalPrice}
  />

  const burger = () => {
    const cases = {
      success: (
        <Aux>
          <Burger ingredients={ingredients}/>
          <BuildControls 
            addIngredient={addIngredient}
            removeIngredient={removeIngredient}
            disabled={disabled}
            totalPrice={totalPrice}
            purchasable={purchasable}
            orderClick={() => setPurchasing(true)}
            ingredients={ingredients}
          />
        </Aux>
      ),
      loading: ( 
        <Loader /> 
      )
    }
    return ingredients ? cases.success : cases.loading
  }

  return (
    <WithError error={error}>
      <Modal show={purchasing} closeModal={() => setPurchasing(false)}>
        {orderSummary}
      </Modal>
      {burger()}
    </WithError>
  )
}

export default BurguerBuilder