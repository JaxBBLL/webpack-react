import React, { Component } from 'react'
import { BrowserRouter as Router, Switch } from 'react-router-dom'
import routes, { RouteWithSubRoutes } from './routes'
import './App.less'

export default class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Switch>
            {routes.map((route, i) => (
              <RouteWithSubRoutes key={i} {...route} />
            ))}
          </Switch>
        </div>
      </Router>
    )
  }
}
