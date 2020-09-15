import { SET_CATEGORIES, SET_EDIT_MODE } from '../actions'

const categories = (state = [], action) => {
  switch(action.type) {
    case SET_CATEGORIES:
      return [...action.value]
    case SET_EDIT_MODE: {
      console.log(action.value)
      const categories = (state || []).map(x => {
        if(x.id === action.value.id) {
          x.editMode = action.value.editMode
        }
        return {...x}
      })
      return [...categories]
    }
    default: return state
  }
}

export default categories