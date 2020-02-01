import React, { useState, useEffect } from 'react'
import CheckoutSummary from '../../components/CheckoutSummary/CheckoutSummary'
import { Route } from 'react-router-dom'
import ContactData from './ContactData/ContactData'

const Checkout = props => {

  const [ingredients, setIngredients] = useState({
    meat: 1,
    bacon: 1,
    salad: 1,
    cheese: 1
  })
  const [totalPrice, setTotalPrice] = useState()
  const [query] = useState(new URLSearchParams(props.location.search));

  useEffect(() => {
    // const { price, ...ingredientsCopy } = Object.fromEntries(query);
    const ingredientsCopy = {}
    let price = 0;
    for (let param of query.entries()) {
      param[0] === 'price' ? price = param[1] : ingredientsCopy[param[0]] = +param[1]
    }
    setIngredients(ingredientsCopy)
    setTotalPrice(price)
  }, [query])

  const checkoutCancel = () => {
    props.history.goBack()
  }

  const checkoutContinue = () => {
    props.history.replace('/checkout/contact-data')
  }

  return (
    <div style={{height: '100%', overflowY: 'auto'}}>
      <CheckoutSummary 
        ingredients={ingredients}
        cancelClick={checkoutCancel}
        continueClick={checkoutContinue}
      />
      <Route 
        path={props.match.path + '/contact-data'} 
        render={props => <ContactData ingredients={ingredients} price={totalPrice} {...props}/>}
      />
    </div>
  )
}

export default Checkout