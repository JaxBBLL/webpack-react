import React from 'react'
import Login from '@/views/Login'
import About from '@/views/About'
import Home from '@/views/Home'
import Layout from '@/components/layout'
import { Route } from 'react-router-dom'

export const RouteWithSubRoutes = (route) => {
  return (
    <Route
      path={route.path}
      render={(props) => (
        // pass the sub-routes down to keep nesting
        <route.component {...props} routes={route.routes} />
      )}
    />
  )
}

const routes = [
  {
    path: '/login',
    exact: true,
    component: Login,
  },
  {
    path: '/',
    component: Layout,
    routes: [
      {
        path: '/home',
        component: Home,
      },
      {
        path: '/about',
        component: About,
      },
    ],
  },
]

export default routes
