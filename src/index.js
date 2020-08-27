import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { getStore } from './store'
import App from './App'

import './index.css'

const store = getStore()

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, document.getElementById('root')
)
