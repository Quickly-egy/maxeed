
import './App.css'

import OurProducts from './Pages/OurProducts/OurProducts'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './Pages/Home/Home'
import AboutUs from './Pages/AboutUs/AboutUs'
import MasterLayout from './Layout/MasterLayout/MasterLayout'
import NotFound from './Components/NotFound/NotFound'
import ContactUs from './Pages/ContactUs/ContactUs'


function App() {

  const routes = createBrowserRouter([
    {
      path: '/',
      element: <MasterLayout />,
      errorElement: <NotFound />,
      children: [
        {
          path: '/', element: <Home />,
        },
        {
          path: 'home', element: <Home />,
        },
        {
          path: 'products', element: <OurProducts />,
        },
        {
          path: 'about-us', element: <AboutUs />
        },
        {
          path: 'contact-us', element: <ContactUs />
        },

      ]
    },




  ])




  return (

    <>
      <RouterProvider router={routes} />
    </>


  )
}

export default App
