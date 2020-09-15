import { takeEvery, call, put } from 'redux-saga/effects'
import { GET_ORDERS, SET_ORDERS, POST_ORDER, DELETE_ORDER } from '../actions'
import Axios from 'axios'

export const watchGetOrders = function* () {
  yield takeEvery(GET_ORDERS, workerGetOrders)
}

export const watchPostOrder = function* () {
  yield takeEvery(POST_ORDER, workerPostOrder)
}

export const watchDeleteOrder = function* () {
  yield takeEvery(DELETE_ORDER, workerDeleteOrder)
}

function* workerGetOrders() {
  console.log('getting orders')
  try {
    const url = 'http://localhost:3000/orders'
    const result = yield call(Axios.get, url)
    yield put({ type: SET_ORDERS, value: result.data })
  }
  catch (error) {
    console.log('Failed', error)
  }
}

function* workerPostOrder(action) {
  console.log('creating new order')
  try {
    const url = 'http://localhost:3000/orders'
    const result = yield call(Axios.post, url, action.value)
    yield put({ type: GET_ORDERS })
    console.log('created successfully')
  }
  catch (error) {
    console.log('Failed', error)
  }
}

function* workerDeleteOrder(action) {
  console.log('Deleting order')
  try {
    const url = `http://localhost:3000/orders/${action.value}`
    const result = yield call(Axios.delete, url)
    yield put({ type: GET_ORDERS })
    console.log('Deleted successfully')
  }
  catch (error) {
    console.log('Failed deleting', error)
  }
}