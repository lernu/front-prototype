import * as types from '../constants/action-types'


export const loadLesson = lessonId => ({
  type: types.FETCH_LESSON_REQUEST,
  payload: { lessonId },
  meta: {
    offline: {
      effect: { url: `/data/${lessonId}.json`, method: 'GET' },
      commit: { type: types.FETCH_LESSON_SUCCESS, meta: { lessonId } },
      rollback: { type: types.FETCH_LESSON_FAILURE, meta: { lessonId } }
    }
  }
})
