import { combineReducers } from 'redux'
import { routerReducer as routing } from 'react-router-redux'
import { RESET_ERROR_MESSAGE } from '../constants/action-types'
import lessons from './lessons'
//import russian from './russian'

// Updates error message to notify about the failed fetches.
const errorMessage = (state = null, action) => {
  const { type, error } = action

  if (type === RESET_ERROR_MESSAGE) {
    return null
  } else if (error) {
    return error
  }

  return state
}

const rootReducer = combineReducers({
  lessons,
  errorMessage,
  routing
})

export default rootReducer
