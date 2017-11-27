import React from 'react'
import PropTypes from 'prop-types'
import { Provider } from 'react-redux'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from './Home'
import About from './About'
import Lesson from './Lesson'

const Root = ({store}) => (
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <Route path="/about" component={About} />
        <Route path="/lesson/:lessonName" component={Lesson}/>
        <Route path="/" component={Home} />
      </Switch>
    </BrowserRouter>
  </Provider>
)

Root.propTypes = {
  store: PropTypes.object.isRequired
}
export default Root
