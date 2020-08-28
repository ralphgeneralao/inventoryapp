import { takeEvery, call, put } from "redux-saga/effects"
import { GET_CATEGORIES, SET_CATEGORIES, POST_CATEGORIES, DELETE_CATEGORIES } from '../actions'
import Axios from 'axios'

export const watchGetCategories = function* () {
  yield takeEvery(GET_CATEGORIES, workerGetCategories)
}

export const watchPostCategories = function* () {
  yield takeEvery(POST_CATEGORIES, workerPostCategories)
}

export const watchDeleteCategories = function* () {
  yield takeEvery(DELETE_CATEGORIES, workerDeleteCategories)
}

function* workerGetCategories() {
  console.log('getting categories')
  try {
    const url = 'http://localhost:3000/categories'
    const result = yield call(Axios.get, url)
    yield put({ type: SET_CATEGORIES, value: result.data })
  }
  catch (error) {
    console.log('Failed getting categories', error)
  }
}
function* workerPostCategories(action) {
  console.log('Adding new category')
  try {
    const url = 'http://localhost:3000/categories'
    const result = yield call(Axios.post, url, action.value)
    yield put({ type: GET_CATEGORIES })
  }
  catch (error) {
    console.log('Error adding category', error)
  }
}

function* workerDeleteCategories(action) {
  console.log('Deleting Category')
  try {
    const url = `http://localhost:3000/categories/${action.value}`
    const result = yield call(Axios.delete, url)
    yield put({ type: GET_CATEGORIES })
  }
  catch (error) {
    console.log('Error deleting category', error)
  }
}