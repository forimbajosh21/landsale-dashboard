import React from 'react'
import { BrowserRouter, Routes as RouterRoutes, Route } from 'react-router-dom'

// layout
import WithSidebarLayout from 'common/components/layouts/WithSidebar'

// pages

const Routes = () => {
  return (
    <BrowserRouter>
      <RouterRoutes>
        <Route path="/" element={<WithSidebarLayout />}>
          <Route index element={<h1>Dashboard</h1>} />
        </Route>
        <Route path="/login" element={<h1>Login</h1>} />
      </RouterRoutes>
    </BrowserRouter>
  )
}

export default Routes
