import React, { useState, useEffect } from 'react'
import Aux from '../../components/Aux/Aux'
import Burger from '../../components/Burger/Burger'
import BuildControls from '../../components/BuildControls/BuildControls'
import Modal from '../../components/Modal/Modal'
import ModalSummary from '../../components/ModalSummary/ModalSummary'
import Loader from '../../components/Loader/Loader'
import { fixPrice } from '../../helpers/utility'
import WithError from '../../components/WithError/WithError'
import { connect } from 'react-redux'
import { addIngredient, removeIngredient, fetchIngredients } from '../../store/actions/'


const BurgerBuilder = props => {

  const { fetchIngredients } = props

  useEffect(() => fetchIngredients(), [fetchIngredients])

  const [purchasing, setPurchasing] = useState(false)

  const updatePurchasable = ings => {
    let sum = 0
    for (let key in ings) {
      sum = sum + ings[key]
    }
    return sum > 0
  }

  const orderBurger = () => {
    props.history.push('/checkout')
  }

  const disabled = {
    ...props.ingredients
  }

  for (let key in disabled) {
    disabled[key] = disabled[key] <= 0
  }

  const orderSummary = props.ingredients && <ModalSummary
    ingredients={props.ingredients}
    cancel={() => setPurchasing(false)}
    accept={orderBurger}
    price={fixPrice(props.price)}
  />

  const burger = () => {
    const options = {
      burger: () => (
        <Aux>
          <Burger ingredients={props.ingredients}/>
          <BuildControls 
            addIngredient={props.addIngredient}
            removeIngredient={props.removeIngredient}
            disabled={disabled}
            price={fixPrice(props.price)}
            purchasable={updatePurchasable(props.ingredients)}
            orderClick={() => setPurchasing(true)}
            ingredients={props.ingredients}
          />
        </Aux>
      ),
      loading: () => <Loader />
    }
    return props.loading ? options.loading() : options.burger()
  }

  return (
    <WithError error={props.error}>
      <Modal show={purchasing} closeModal={() => setPurchasing(false)}>
        {orderSummary}
      </Modal>
      {burger()}
    </WithError>
  )
}

const mapStateToProps = state => ({
  ingredients: state.burger.ingredients,
  price: state.burger.price,
  loading: state.burger.loading,
  error: state.burger.error
})

const mapDispatchToProps = dispatch => ({
  addIngredient: (ing) => dispatch(addIngredient(ing)),
  removeIngredient: (ing) => dispatch(removeIngredient(ing)),
  fetchIngredients: () => dispatch(fetchIngredients())
})

export default connect(mapStateToProps, mapDispatchToProps)(BurgerBuilder)