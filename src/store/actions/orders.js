import { actionTypes } from '../actionsTypes'
import axios from '../../axios-orders'

const fetchOrdersSuccess = orders => ({
  type: actionTypes.FETCH_ORDERS_SUCCESS,
  orders: orders
})

const fetchOrdersFail = error => ({
  type: actionTypes.FETCH_ORDERS_FAIL,
  error: error
})

const fetchOrdersStart = () => ({
  type: actionTypes.FETCH_ORDERS_START
})

export const fetchOrders = ( ) => dispatch => {
  dispatch(fetchOrdersStart())
  axios.get('/orders.json')
  .then(res => {
    const fetchedOrders = []
    for (let key in res.data) {
      fetchedOrders.push({
        ...res.data[key],
        id: key
      })
    }
    dispatch(fetchOrdersSuccess(fetchedOrders))
  })
  .catch(err => {
    dispatch(fetchOrdersFail())
    console.log(err)
  })
}