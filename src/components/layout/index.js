import React from 'react'
import { RouteWithSubRoutes } from '@/routes/index'
import { Switch, Link, Route, Redirect } from 'react-router-dom'

export default function Layout({ routes }) {
  return (
    <div className="flex">
      <ul className="w-56 h-screen border-r">
        <li>
          <Link to="/home" className="text-primary">
            home
          </Link>
        </li>
        <li>
          <Link to="/about" className="text-primary">
            about
          </Link>
        </li>
      </ul>
      <main className="flex-1">
        <Switch>
          <Route from="/" exact component={() => <Redirect to="/home" />} />
          {routes.map((route, i) => {
            return <RouteWithSubRoutes key={i} {...route} />
          })}
        </Switch>
      </main>
    </div>
  )
}
