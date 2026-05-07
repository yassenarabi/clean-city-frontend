import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../Components/Navbar'

import Fotter from '../Components/Fotter'

export default function MainLayOut() {
  return (
    <>
    <Navbar/>

    <Outlet/>

    <Fotter/>




    </>
  )
}
