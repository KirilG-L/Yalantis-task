import React from 'react'
import './App.css'
import { Link, Route, Switch } from 'react-router-dom'
import { PageEmployees } from './pages/employees'

function App() {
  return (
    <>
      <Switch>
        <Route
          path={'/'}
          exact
          render={() => (
            <div>
              <button>
                <Link to='/employees'>go to employees page</Link>
              </button>
            </div>
          )}
        />
        <Route path={'/employees'} exact component={PageEmployees} />
      </Switch>
    </>
  )
}

export default App
