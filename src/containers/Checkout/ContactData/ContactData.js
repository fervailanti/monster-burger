import React, { useState } from 'react'
import Button from '../../../components/Button/Button'
import Burger from '../../../components/Burger/Burger'
import classes from './ContactData.module.css'
import Loader from '../../../components/Loader/Loader'
import Input from '../../../components/Input/Input'
import { connect } from 'react-redux'
import { purchaseBurger } from '../../../store/actions/'
import formData from './formData'
import WithError from '../../../components/WithError/WithError'
import { translateBurgerName } from '../../../helpers/translateBurgerName'

const ContactData = props => {

  const [contactData, setContactData] = useState(formData)
  const [formIsValid, setFormValidity] = useState(false)

  const orderClick = event => {
    event.preventDefault()
    const orderData = {}
    for (let key in contactData) {
      orderData[key] = contactData[key].value
    }
    const order = {
      ingredients: props.ingredients,
      price: props.price,
      orderData: orderData
    }
    props.orderBurger(order)
  }

  const checkValidity = (value, rules) => {
    let isValid = true
    rules.required && ( isValid = value.trim() !== '' && isValid)
    rules.minLength && ( isValid = value.length >= rules.minLength && isValid)
    rules.maxLength && ( isValid = value.length <= rules.maxLength && isValid)
    return isValid
  }

  const onInputChange = (event, inputId) => {
    const updatedContactData = {...contactData}
    const updatedContactDataElement = {...updatedContactData[inputId]}
    updatedContactDataElement.value = event.target.value
    updatedContactDataElement.valid = checkValidity(
      updatedContactDataElement.value,
      updatedContactDataElement.validation
    )
    updatedContactDataElement.touched = true
    updatedContactData[inputId] = updatedContactDataElement
    setContactData({...updatedContactData})

    let formIsValidCopy = true
    for (let inputId in updatedContactData) {
      formIsValidCopy = updatedContactData[inputId].valid && formIsValidCopy
    }
    setFormValidity(formIsValidCopy)
  }

  const formElements = []

  for (let key in contactData) {
    formElements.push({
      id: key,
      config: contactData[key]
    })
  }

  const renderForm = {
    success: () => (
      <div className={classes.ContactData}>
        <h2>Solo nos faltan tus datos:</h2>
        <div style={{margin: '32px'}}>
          <Burger ingredients={props.ingredients} small />
          <p>{translateBurgerName(props.ingredients)}</p>
        </div>
        <form onSubmit={orderClick}>
          {formElements.map(formElement => <Input
            key={formElement.id}
            label={formElement.config.label}
            elementType={formElement.config.elementType}
            elementConfig={formElement.config.elementConfig}
            value={formElement.config.value}
            elementChange={event => onInputChange(event, formElement.id)}
            valid={formElement.config.valid}
            touched={formElement.config.touched}
            configStyle={formElement.config.style}
          />)}
          <div style={{padding: '16px'}}>
            <Button buttonType='Ghost' buttonClick={props.cancelClick}>
              Cancelar
            </Button>
            <Button buttonType='Principal' disabled={!formIsValid}>
              Pedir ahora
            </Button>
          </div>
        </form>
      </div>
    ),
    loading: () => <Loader />
  }

  return <WithError error={props.error}>
    {props.loading ? renderForm.loading() : renderForm.success()}
  </WithError>
}

const mapStateToProps = state => ({
  ingredients: state.burger.ingredients,
  price: state.burger.price,
  loading: state.checkout.loading,
  error: state.checkout.error
})

const mapDispatchToProps = dispatch => ({
  orderBurger: (orderData) => dispatch(purchaseBurger(orderData))
})

export default connect(mapStateToProps, mapDispatchToProps)(ContactData)