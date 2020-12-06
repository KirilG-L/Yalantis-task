import { createReducer } from '../utils'

const initialState = {
  isFetching: false,
}

export const reducer = createReducer(initialState, {
  'SET_USERS START'(state, action) {
    return {
      ...state,
      isFetching: true,
    }
  },

  'SET_USERS SUCCESS'(state, action) {
    return {
      ...state,
      ...action.payload,
      isFetching: false,
    }
  },
})
