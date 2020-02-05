import { actionTypes } from '../actionsTypes'
import axios from '../../axios-orders'

const puschaseBurgerSuccess = () => ({
  type: actionTypes.PURCHASE_BURGER_SUCCESS
})

const puschaseBurgerFail = () => ({
  type: actionTypes.PURCHASE_BURGER_FAIL
})

const purchaseBurgerStart = () => ({
  type: actionTypes.PURCHASE_BURGER_START
})


export const purchaseBurger = orderData => dispatch => {
  dispatch(purchaseBurgerStart())
  axios.post('/orders.json', orderData)
  .then(res => {
    dispatch(puschaseBurgerSuccess())
  })
  .catch(err => {
    dispatch(puschaseBurgerFail())
    console.log(err)
  })
}

export const purchaseInit = () => ({
  type: actionTypes.PURCHASE_INIT
})