import React from 'react'
import './App.css'
import { Route, Switch } from 'react-router-dom'
import { PageEmployees } from './pages/employees'

function App() {
  return (
    <>
      <Switch>
        <Route path={'/'} exact>
          Home
        </Route>
        <Route path={'/employees'} exact component={PageEmployees} />
      </Switch>
    </>
  )
}

export default App
