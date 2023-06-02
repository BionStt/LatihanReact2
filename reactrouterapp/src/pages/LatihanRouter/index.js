import React from 'react'
import ProductPage from './pages/product'
import DetailPage from './pages/detail'
import CheckOutPage from './pages/checkout'
import Layout from './Component/Layout'
import { createBrowserRouter,RouterProvider} from 'react-router-dom'


const router = createBrowserRouter([
    {
        path:"/",
        element: <Layout/>,
        children:[
            {
                index: true,
                element:<ProductPage/>,
            },{
                path:"detail:id",
                element:<DetailPage/>
            },{
                path:"checkout",
                element: <CheckOutPage/>,

            }
        ]
    },
])


const MateriRouterResfull =()=> {
  return <RouterProvider router={router}/>
}

export default MateriRouterResfull
