import React from 'react'
import ReactDOM from 'react-dom'
import registerServiceWorker from './registerServiceWorker'
import configureStore from './store/configureStore'
import Root from './containers/Root'

import './styles/normalize.css'
import './styles/common.css'
import './styles/test.css'
import './styles/test-choice.css'

const store = configureStore()

ReactDOM.render(
  <Root store={store} />,
  document.getElementById('root')
)

registerServiceWorker()
