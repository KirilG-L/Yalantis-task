export function createAction(type) {
  const actionCreator = (payload = {}) => ({ type, payload })
  actionCreator.type = type
  return actionCreator
}

export function createReducer(initialState, reducerMap) {
  return (state = initialState, action) => {
    const reducer = reducerMap[action.type]

    return reducer ? reducer(state, action) : state
  }
}
