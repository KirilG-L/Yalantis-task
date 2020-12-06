import { applyMiddleware, compose, createStore } from 'redux'
import thunk from 'redux-thunk'
import { createRootReducer } from './root-reducer'
import { createBrowserHistory } from 'history'
import { routerMiddleware } from 'connected-react-router'

export const history = createBrowserHistory()

const composeEnhancers =
  typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
      })
    : compose

const enhancer = composeEnhancers(
  applyMiddleware(routerMiddleware(history), thunk)
)

export const store = createStore(createRootReducer(history), enhancer)
window.store = store
