
import './App.css'

import OurProducts from './Pages/OurProducts/OurProducts'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './Pages/Home/Home'
import AboutUs from './Pages/AboutUs/AboutUs'
import MasterLayout from './Layout/MasterLayout/MasterLayout'
import NotFound from './Components/NotFound/NotFound'
import ContactUs from './Pages/ContactUs/ContactUs'
import { useEffect, useState } from 'react'
import cookies from 'js-cookie'
import i18n from './i18n'



function App() {

  const [loading, setLoading] = useState(true);


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

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, [])

  const lang = cookies.get("i18next") || "en"

  useEffect(() => {
    window.document.dir = i18n.dir()
  }, [lang])


  return (

    <>

      {
        loading ? <div
          style={{
            height: '100vh',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'green'
          }}
        >
          <img src="/assets/imgs/logo.svg" className='fading-image ' width={150} height={150} alt="logo" />
        </div>
          :
          <div className='animate__animated animate__fadeIn'>
            <RouterProvider router={routes} />
          </div>


      }




    </>


  )
}

export default App
