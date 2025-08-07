import { Route, Routes } from 'react-router-dom'
import Home from '../pages/home.js'
import Products from '../pages/products.js'
import SelectedItem from '../pages/selectedItem.js'
import CartedItems from '../pages/cartedItems.js'
import AdminPortal from '../pages/admin/adminPortal.js'
import EmailToSignIn from './emailSignIn.js'
import Verify from './verifyEmail.js'

export default function AllRoutes({querySearch}) {
  return (
    <div>
        <Routes>
            <Route element={<Home querySearch={querySearch} />} path='/'/>
            <Route element={<Products querySearch={querySearch} />} path='/products'/>
            <Route element={<SelectedItem querySearch={querySearch} />} path='/products/:id'/>
            <Route element={<CartedItems />} path='/cartitems'/>
            <Route element={<EmailToSignIn />} path='/emailtosignin'/>
            <Route element={<Verify />} path='/verify'/>
            <Route element={<AdminPortal />} path='/admin/adminPortal'/>
        </Routes>
    </div>
  )
}
