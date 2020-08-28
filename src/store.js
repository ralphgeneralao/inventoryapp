import { createStore, applyMiddleware } from 'redux';
import rootReducer from './redux/reducers';
import reduxSaga from 'redux-saga';
import rootSaga from './redux/sagas';

export const getStore = () => {
  const initialState = {};
  const reduxSagaMiddleware = reduxSaga();
  const store = createStore(rootReducer, initialState, applyMiddleware(reduxSagaMiddleware));
  reduxSagaMiddleware.run(rootSaga)
  return store;
}