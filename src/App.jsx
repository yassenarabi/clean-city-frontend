import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Navbar from './Components/Navbar'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import MainLayOut from './mainLayout/MainLayOut'
import Home from './Components/Home'
import Map from './Components/Map'
import Reports from './Components/Reports'
import Comprasies from './Components/Comprasies'


const route =    createBrowserRouter([{
  path:""  ,element:<MainLayOut/>,children:[
    {index:true , element:<Home/>},
    {path:"map", element:<Map/>},
    {path:"Reports", element:<Reports/>},
    {path:"companies" , element:<Comprasies/>},
  ]
}])

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <RouterProvider router={route}></RouterProvider>
    </>
  )
}

export default App
