import { takeEvery, call, put } from "redux-saga/effects"
import { GET_CATEGORIES, SET_CATEGORIES, POST_CATEGORIES, DELETE_CATEGORIES, PUT_CATEGORY, SET_EDIT_MODE, EDIT_CATEGORY, CANCEL_CATEGORY_UPDATE } from '../actions'
import Axios from 'axios'

export const watchGetCategories = function* () {
  yield takeEvery(GET_CATEGORIES, workerGetCategories)
}

export const watchPostCategories = function* () {
  yield takeEvery(POST_CATEGORIES, workerPostCategories)
}

export const watchPutCategories = function* () {
  yield takeEvery(PUT_CATEGORY, workerPutCategories)
}

export const watchDeleteCategories = function* () {
  yield takeEvery(DELETE_CATEGORIES, workerDeleteCategories)
}

export const watchEditCategory = function* () {
  yield takeEvery(EDIT_CATEGORY, workerEditCategory)
}

export const watchCancelCategoryUpdate = function* () {
  yield takeEvery(CANCEL_CATEGORY_UPDATE, workerCancelCategoryUpdate)
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

function* workerPutCategories(action) {
  console.log('Updating category')
  try {
    const url = `http://localhost:3000/categories/${action.value.id}`
    const result = yield call(Axios.put, url, action.value)
    yield put({ type: GET_CATEGORIES })
    console.log('Updated Category successfully', result)
  }
  catch {
    console.log('Failed updating')
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

function* workerEditCategory(action) {
  console.log('Editing a Category', action)
  yield put({ type: SET_EDIT_MODE, value: { id: action.value, editMode: true }})
}

function* workerCancelCategoryUpdate(action) {
  console.log('Cancelled category edit')
  yield put({ type: SET_EDIT_MODE, value: { id: action.value, editMode: false }})
}