import React from 'react'
import { Redirect } from 'react-router-dom'
import ContactData from './ContactData/ContactData'
import { connect } from 'react-redux'
import { purchaseInit } from '../../store/actions/'

const Checkout = props => {

  props.initPurchased()

  const checkoutCancel = () => {
    props.history.goBack()
  }

  const redirect = () => <Redirect to='/' />
  const form = () => <ContactData cancelClick={checkoutCancel} />
  const renderForm = () => props.purchased ? redirect() : form()

  return (
    <div style={{height: '100%', overflowY: 'auto'}}>
      {props.ingredients ? renderForm() : redirect()}
    </div>
  )
}

const mapStateToProps = state => ({
  ingredients: state.burger.ingredients,
  purchased: state.checkout.purchased
})

const mapDispatchToProps = dispatch => ({
  initPurchased: () => dispatch(purchaseInit())
})

export default connect(mapStateToProps, mapDispatchToProps)(Checkout)