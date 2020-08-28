import { takeEvery, call, put } from 'redux-saga/effects';
import { SET_PRODUCTS, GET_PRODUCTS, POST_PRODUCT, DELETE_PRODUCT } from '../actions';
import Axios from 'axios';

export const watchGetProducts = function* () {
  yield takeEvery(GET_PRODUCTS, workerGetProducts);
}

export const watchPostProduct = function* () {
  yield takeEvery(POST_PRODUCT, workerPostProduct)
}

export const watchDeleteProduct = function* () {
  yield takeEvery(DELETE_PRODUCT, workerDeleteProduct)
}

// for fetching data from API
function* workerGetProducts() {
  console.log('get products')
  try {
    const url = 'http://localhost:3000/products';
    const result = yield call(Axios.get, url);
    yield put({ type: SET_PRODUCTS, value: result.data });
  } 
  catch (error) {
    console.error('Failed', error);
  }
}

// for adding data to the API
function* workerPostProduct(action) {
  console.log('Adding new product')
  try {
    const url = 'http://localhost:3000/products';
    const result = yield call(Axios.post, url, action.value)
    yield put({ type: GET_PRODUCTS })
    console.log('added successfully')
  }
  catch (error) {
    console.log('Failed', error)
  }
}

// for deleting a data in API
function* workerDeleteProduct(action) {
  console.log('Deleting a product', action)
  try {
    const url = `http://localhost:3000/products/${action.value}`
    const result = yield call(Axios.delete, url)
    yield put({ type: GET_PRODUCTS })
    console.log('deleted successfully')
  }
  catch (error) {
    console.log('Failed to delete', error)
  }
}