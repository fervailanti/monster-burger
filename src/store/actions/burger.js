import { actionTypes } from '../actionsTypes'
import axios from '../../axios-orders'

export const addIngredient = name => ({
  type: actionTypes.ADD_INGREDIENT,
  ingredient: name
})

export const removeIngredient = name => ({
  type: actionTypes.REMOVE_INGREDIENT,
  ingredient: name
})

const fetchIngredientsStart = () => ({
  type: actionTypes.FETCH_INGREDIENTS_START
})

const fetchIngredientsSuccess = ingredients => ({
  type: actionTypes.FETCH_INGREDIENTS_SUCCESS,
  ingredients: ingredients
})

const fetchIngredientsFailed = () => ({
  type: actionTypes.FETCH_INGREDIENTS_FAILED
})

export const fetchIngredients = () => dispatch => {
  dispatch(fetchIngredientsStart())
  axios.get('/ingredients.json')
  .then(res => {
    dispatch(fetchIngredientsSuccess(res.data))
  })
  .catch(err => {
    dispatch(fetchIngredientsFailed())
    console.log(err)
  })
}