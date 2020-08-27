import { takeEvery, call, put } from 'redux-saga/effects'
import { SET_PRODUCTS, GET_PRODUCTS, POST_PRODUCT, PUT_PRODUCT, DELETE_PRODUCT, EDIT_PRODUCT, SET_EDIT_MODE } from '../actions'
import Axios from 'axios'

export const watchGetProducts = function* () {
  yield takeEvery(GET_PRODUCTS, workerGetProducts)
}

export const watchPostProduct = function* () {
  yield takeEvery(POST_PRODUCT, workerPostProduct)
}

export const watchPutProduct = function* () {
  yield takeEvery(PUT_PRODUCT, workerPutProduct)
}

export const watchDeleteProduct = function* () {
  yield takeEvery(DELETE_PRODUCT, workerDeleteProduct)
}

export const watchEditProduct = function* () {
  yield takeEvery(EDIT_PRODUCT, workerEditProduct)
}

function* workerGetProducts() {
  console.log('get products')
  try {
    const url = 'http://localhost:3000/products'
    const result = yield call(Axios.get, url)
    console.log(result.data)
    yield put({
      type: SET_PRODUCTS,
      value: result.data
    })
  }
  catch {
    console.log('Failed loading products')
  }
}

function* workerPostProduct(action) {
  console.log('Adding new product')
  try {
    const url = 'http://localhost:3000/products'
    const result = yield call(Axios.post, url, action.value)
    yield put({ type: GET_PRODUCTS })
    console.log('Added successfully')
  }
  catch {
    console.log('Error')
  }
}

function* workerPutProduct(action) {
  console.log('updating a product')
  try {
    const url = `http://localhost:3000/products/${action.value.id}`
    const result = yield call(Axios.put, url, action.value)
    yield put({ type: GET_PRODUCTS })
    console.log('Updated product successfully')
  }
  catch {
    console.log('Error')
  }
}

function* workerDeleteProduct(action) {
  console.log('Deleting Product')
  try {
    const url = `http://localhost:3000/products/${action.value}`
    const result = yield call(Axios.delete, url)
    yield put({ type: GET_PRODUCTS })
    console.log('Success')
  }
  catch{
    console.log('Failed')
  }
}

function* workerEditProduct(action) {
  console.log('Editing a product', action)
  yield put({ type: SET_EDIT_MODE, value: { id: action.value, editMode: true }})
}