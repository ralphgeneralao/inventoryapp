import { SET_EDIT_MODE, SET_PRODUCTS } from '../actions';

const products = (state = [], action) => {
  switch (action.type) {
    case SET_PRODUCTS:
      return [...action.value];
    case SET_EDIT_MODE:{
      console.log(action)
      const products = (state || []).map(x => {
        if(x.id === action.value.id){
          x.editMode = action.value.editMode;
        }
        return {...x}
      });
      console.log(products)
      return [...products]
    }

    default: return state;
  }
}

export default products;