import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/home.js'
import Products from '../pages/products.js'
import SelectedItem from '../pages/selectedItem.js'
import CartedItems from '../pages/cartedItems.js'
import AdminPortal from '../pages/admin/adminPortal.js'

export default function AllRoutes() {
  return (
    <div>
        <Routes>
            <Route element={<Home />} path='/'/>
            <Route element={<Products />} path='/products'/>
            <Route element={<SelectedItem />} path='/products/:id'/>
            <Route element={<CartedItems />} path='/cartitems'/>
            <Route element={<AdminPortal />} path='/admin/adminPortal'/>
        </Routes>
    </div>
  )
}
