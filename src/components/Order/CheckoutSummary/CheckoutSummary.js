import React from 'react'
import Burger from '../../Burger/Burger'
import Button from '../../Button/Button'
import classes from './CheckoutSummary.module.css'

const CheckoutSummary = props => {

  return (
    <div className={classes.CheckoutSummary}>
      <h2>Tu hamburguesa:</h2>
      <div style={{width: '100%', margin: 'auto'}}>
        <Burger ingredients={props.ingredients}/>
      </div>
      <Button buttonType='Ghost' buttonClick={props.cancelClick}>
        Cancelar
      </Button>
      <Button buttonType='Principal' buttonClick={props.continueClick}>
        Continuar
      </Button>
    </div>
  )

}

export default CheckoutSummary