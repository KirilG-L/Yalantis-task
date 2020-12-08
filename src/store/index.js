import { applyMiddleware, compose, createStore } from 'redux'
import thunk from 'redux-thunk'
import { createRootReducer } from './root-reducer'
import { createBrowserHistory } from 'history'
import { routerMiddleware } from 'connected-react-router'

export const history = createBrowserHistory({
  basename: `${process.env.PUBLIC_URL}/`,
})

const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state)
    window.localStorage.setItem('state', serializedState)
  } catch (err) {
    // Ignore write errors.
  }
}

const loadState = () => {
  try {
    const serializedState = window.localStorage.getItem('state')
    if (serializedState === null) {
      return undefined
    }
    return JSON.parse(serializedState)
  } catch (err) {
    return undefined
  }
}

const oldState = loadState()

const composeEnhancers =
  typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
      })
    : compose

const enhancer = composeEnhancers(
  applyMiddleware(routerMiddleware(history), thunk)
)

export const store = createStore(createRootReducer(history), oldState, enhancer)
window.store = store

store.subscribe(() => {
  saveState(store.getState())
})
