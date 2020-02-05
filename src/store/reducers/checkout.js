import { actionTypes } from '../actionsTypes'
import { updateObject } from '../../helpers/utility'

const initialState = {
  purchased: false,
  loading: false,
  error: false
}

const setLoading = (state, value) => updateObject(state, {
  loading: value
})

const setError = state => updateObject(state, {
  loading: false,
  error: true
})

const purchaseBurgerSuccess = state => updateObject(state, {
  loading: false,
  purchased: true
})

const pruchaseInit = state => updateObject(state, {
  purchased: false,
  error: false
})

export const checkoutReducer = (state = initialState, action) => {
  const options = {
    [actionTypes.PURCHASE_BURGER_START]: () => setLoading(state, true),
    [actionTypes.PURCHASE_BURGER_SUCCESS]: () => purchaseBurgerSuccess(state),
    [actionTypes.PURCHASE_BURGER_FAIL]: () => setError(state),
    [actionTypes.PURCHASE_INIT]: () => pruchaseInit(state)
  }
  return options.hasOwnProperty(action.type) ? options[action.type]() : state
}