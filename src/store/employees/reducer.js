import { createReducer } from '../utils'

export const initialState = {
  users: [],
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
      users: [...action.payload],
      isFetching: false,
    }
  },
})
