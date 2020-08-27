import { SET_PRODUCTS } from '../actions'

const products = (state = [], action) => {
  switch(action.type) {
    case SET_PRODUCTS:
      return [...action.value]

      default: return state
  }
}

export default products