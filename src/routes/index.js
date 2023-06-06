import React from 'react'

import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from 'react-router-dom'
import Root from '../layouts/root/Root'
import ArticaleDetails from '../pages/ArticaleDetails'
import Articales from '../pages/Articales'
import Home from '../pages/Home'
import Login from '../pages/Login'
import ReadReview from '../pages/ReadReview'
import RePropertys from '../pages/RePropertys'
import SignUp from '../pages/SignUp'

const router = createBrowserRouter(createRoutesFromElements(
    <Route path='/' element={<Root/>}>
        <Route path='/articales' element={<ArticaleDetails/>}></Route>
        <Route path='/articale' element={<Articales/>}></Route>
        <Route index element={<Home/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/review' element={<ReadReview/>}></Route>
        <Route path='/propertys' element={<RePropertys/>}></Route>
        <Route path='/signup' element={<SignUp/>}></Route>
    </Route>
))

const Routes = () => {
  return (
    <RouterProvider router={router}/>
  )
}

export default Routes