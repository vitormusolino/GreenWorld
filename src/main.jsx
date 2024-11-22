import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'

import App from './App.jsx'
import Home from './pages/Home.jsx'
import Sobre from './pages/Sobre.jsx'
import Comunidade from './pages/Comunidade.jsx'
import Usuario from './pages/Usuario.jsx'
import EnergiaPage from './pages/EnergiaPage.jsx'
import PageNotFound from './pages/PageNotFound.jsx'

const router = createBrowserRouter([
  {
    path:'/',
    element: <App/>,
    children: [
      {index: true, element: <Home/>},
      {path: '/sobre', element: <Sobre/>},
      {path: '/comunidade', element: <Comunidade/>},
      {path: '/usuario', element: <Usuario/>},
      {path: '/comunidade/:id', element: <EnergiaPage/>},
      {path: '*', element: <PageNotFound/>},

    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)