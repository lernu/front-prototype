import { applyMiddleware, createStore, compose } from 'redux'
import { offline } from '@redux-offline/redux-offline'
import offlineConfig from './configuration'
import { createLogger } from 'redux-logger'
import freeze from 'redux-freeze'
import rootReducer from '../reducers'

const configureStore = preloadedState => {
  const store = createStore(
    rootReducer,
    preloadedState,
    compose(
      applyMiddleware(freeze, createLogger()),
      offline(offlineConfig)
    ),
    
  )

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
      const nextRootReducer = require('../reducers').default
      store.replaceReducer(nextRootReducer)
    })
  }

  return store
}

export default configureStore
