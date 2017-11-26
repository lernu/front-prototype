import { applyMiddleware, createStore, compose } from 'redux'
import { offline } from '@redux-offline/redux-offline'
import offlineConfig from './configuration'
import freeze from 'redux-freeze'
import rootReducer from '../reducers'

const configureStore = preloadedState => createStore(
  rootReducer,
  preloadedState,
  compose(
    applyMiddleware(freeze),
    offline(offlineConfig)
  )
)

export default configureStore