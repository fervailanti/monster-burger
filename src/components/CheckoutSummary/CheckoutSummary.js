import React from 'react'
import Burger from '../Burger/Burger'
import Button from '../Button/Button'
import classes from './CheckoutSummary.module.css'

const CheckoutSummary = ({ ingredients, cancelClick, continueClick }) => (
  <div className={classes.CheckoutSummary}>
    <h2>Tu hamburguesa:</h2>
    <div style={{width: '100%', margin: 'auto'}}>
      <Burger ingredients={ingredients}/>
    </div>
    <Button buttonType='Ghost' buttonClick={cancelClick}>
      Cancelar
    </Button>
    <Button buttonType='Principal' buttonClick={continueClick}>
      Continuar
    </Button>
  </div>
)

export default CheckoutSummary