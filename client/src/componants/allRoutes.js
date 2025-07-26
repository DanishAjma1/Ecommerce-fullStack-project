import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/home.js'
import Products from '../pages/products.js'

export default function AllRoutes() {
  return (
    <div>
        <Routes>
            <Route element={<Home />} path='/'/>
            <Route element={<Products />} path='/products'/>
        </Routes>
    </div>
  )
}
