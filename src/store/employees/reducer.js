import { createReducer } from '../utils'

export const initialState = {
  users: [],
  selectedUsers: [],
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

  SET_SELECTED_USERS(state, action) {
    return {
      ...state,
      selectedUsers: state.selectedUsers.includes(action.payload)
        ? state.selectedUsers.filter((el) => el !== action.payload)
        : [...state.selectedUsers, action.payload],
    }
  },
})
