import * as types from '../constants/action-types'

const initialState = getInitialState()

export default (state = initialState, action) => {
  switch (action.type) {
  case types.FETCH_LESSON_SUCCESS:
    console.log('fetch lesson success', action);
    return {
      ...state,
      questions: action.payload
    }
  case types.FETCH_LESSON_FAILURE:
    return { ...state }
  default:
    return state
  }
}

function getInitialState() {
  return {
    questoins: []
  }
}
