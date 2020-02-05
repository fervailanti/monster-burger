import { actionTypes } from '../actionsTypes'
import { updateObject } from '../../helpers/utility'

const INGREDIENT_PRICES = {
  meat: 130,
  bacon: 70,
  salad: 50,
  cheese: 40
}

const initialState = {
  ingredients: null,
  price: 400,
  loading: true,
  error: false
}

const addIngredient = (state, action) => {
  return updateObject(state, {
    ingredients: updateObject(state.ingredients, {
      [action.ingredient]: state.ingredients[action.ingredient] + 1
    }),
    price: state.price + INGREDIENT_PRICES[action.ingredient]
  })
}

const removeIngredient = (state, action) => {
  return updateObject(state, {
    ingredients: updateObject(state.ingredients, {
      [action.ingredient]: state.ingredients[action.ingredient] - 1
    }),
    price: state.price - INGREDIENT_PRICES[action.ingredient]
  })
}

const fetchIngredientsStart = state => updateObject(state, {
  loading: true,
  error: false,
})

const fetchIngredientsSuccess = (state, action) => updateObject(state, {
  ingredients: action.ingredients,
  price: initialState.price,
  loading: false,
  error: false
})

const fetchIngredientsFailed = state => updateObject(state, {
  error: true,
  loading: false
})

export const burgerReducer = (state = initialState, action) => {
  const options = {
    [actionTypes.ADD_INGREDIENT]: () => addIngredient(state, action),
    [actionTypes.REMOVE_INGREDIENT]: () => removeIngredient(state, action),
    [actionTypes.FETCH_INGREDIENTS_START]: () => fetchIngredientsStart(state),
    [actionTypes.FETCH_INGREDIENTS_SUCCESS]: () => fetchIngredientsSuccess(state, action),
    [actionTypes.FETCH_INGREDIENTS_FAILED]: () => fetchIngredientsFailed(state)
  }
  return options.hasOwnProperty(action.type) ? options[action.type]() : state
}