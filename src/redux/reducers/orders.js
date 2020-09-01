import { SET_ORDERS, SET_EDIT_MODE } from '../actions'

const orders = (state = [], action) => {
  switch(action.type) {
    case SET_ORDERS:
      return [...action.value]
    case SET_EDIT_MODE: {
      const orders = (state || []).map(x => {
        if(x.id === action.value.id) {
          x.editMode = action.value.editMode
        }
        return {...x}
      })
      return [...orders]
    }
    default: return state
  }
}

export default orders