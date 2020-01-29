import React, { useState } from 'react'
import Button from '../../../components/Button/Button'
import classes from './ContactData.module.css'
import axios from '../../../axios-orders'
import Loader from '../../../components/Loader/Loader'
import Input from '../../../components/Input/Input'


const ContactData = props => {

  const [contactData, setContactData] = useState({
    name: {
      label: 'Nombre completo:',
      elementType: 'input',
      elementConfig: {
        type: 'text',
        placeholder: 'Tu nombre y apellido...'
      },
      value: '',
      validation: {
        required: true
      },
      valid: false,
      touched: false
    },
    email: {
      label: 'Correo electrónico:',
      elementType: 'input',
      elementConfig: {
        type: 'email',
        placeholder: 'Ej. hamburguesa@ejemplo.com'
      },
      value: '',
      validation: {
        required: true
      },
      valid: false,
      touched: false
    },
    address: {
      label: 'Dirección:',
      elementType: 'input',
      elementConfig: {
        type: 'text',
        placeholder: 'Ej. Calle San Martín 175'
      },
      value: '',
      validation: {
        required: true
      },
      valid: false,
      touched: false
    },
    zipCode: {
      label: 'Código postal:',
      elementType: 'input',
      elementConfig: {
        type: 'text',
        placeholder: 'Ej. 1043'
      },
      value: '',
      validation: {
        required: true,
        minLength: 4,
        maxLength: 4
      },
      valid: false,
      touched: false
    },
    country: {
      label: 'País:',
      elementType: 'input',
      elementConfig: {
        type: 'text',
        placeholder: 'Ej. Argentina'
      },
      value: '',
      validation: {
        required: true
      },
      valid: false,
      touched: false
    },
    deliveryMethod: {
      label: 'Tipo de envío:',
      elementType: 'select',
      elementConfig: {
        options: [
          {value: 'fast', displayValue: 'Rápido'},
          {value: 'normal', displayValue: 'Normal'}
        ]
      },
      value: 'normal',
      validation: {},
      valid: true
    }
  })

  const [loading, setLoading] = useState(false)
  const [formIsValid, setFormValidity] = useState(false)

  const orderClick = event => {
    event.preventDefault()
    setLoading(true)
    const formData = {}
    for (let formElementId in contactData) {
      formData[formElementId] = contactData[formElementId].value
    }
    const order = {
      ingredients: props.ingredients,
      price: props.price,
      orderData: formData
    }
    axios.post('/orders.json', order)
      .then(response => {
        setLoading(false)
        props.history.push('/') 
      })
      .catch(error => {
        setLoading(false)
      })
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

  const form = loading ? <Loader /> : (
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
        />)}
        <Button buttonType='Principal' disabled={!formIsValid}>
          Pedir ahora
        </Button>
      </form>
  )

  return (
    <div className={classes.ContactData}>
      <h4>¡Ya casi! Solo nos faltan tus datos:</h4>
      {form}
    </div>
  )
}

export default ContactData