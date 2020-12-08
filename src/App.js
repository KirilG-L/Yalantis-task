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
            <div style={{ textAlign: 'center' }}>
              <Link to='/employees'>
                <button style={{ padding: '10px' }}>
                  go to employees page
                </button>
              </Link>
            </div>
          )}
        />
        <Route path={'/employees'} exact component={PageEmployees} />
      </Switch>
    </>
  )
}

export default App
