import { actionTypes } from '../actionsTypes'
import { updateObject } from '../../helpers/utility'

const initialState = {
  ordersList: [],
  loading: false,
  error: false
}

const setLoading = (state, value) => updateObject(state, {
  loading: value,
  error: false
})

const fetchOrdersSuccess = (state, action) => updateObject(state, {
  ordersList: action.orders,
  loading: false
})

const setError = state => updateObject(state, {
  loading: false,
  error: true
})

export const ordersReducer = (state = initialState, action) => {
  const options = {
    [actionTypes.FETCH_ORDERS_START]: () => setLoading(state, true),
    [actionTypes.FETCH_ORDERS_SUCCESS]: () => fetchOrdersSuccess(state, action),
    [actionTypes.FETCH_ORDERS_FAIL]: () => setError(state)
  }
  return options.hasOwnProperty(action.type) ? options[action.type]() : state
}