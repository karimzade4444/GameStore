import { createBrowserRouter, RouterProvider } from "react-router"
import Layout from "./lib/components/layouts/Layout"
import Home from "./lib/components/layouts/Home"
import Games from "./lib/components/Games"
import About from "./lib/components/About"
import ProdByID from "./lib/components/prodByID"
import Cart from "./lib/components/Cart"
import AdminPanel from "./lib/components/admin/adminPanel"


const App = () => {
  const router = createBrowserRouter([
    {
    path:"/",
    element: <Layout/>,
    children:[{
      path:"/",
      index: true,
      element: <Home/>, 
    },
  {
    path:"/games",
    element:<Games/>
  },
  {
    path:"/about",
    element:<About/>
  },
  {
    path:"/prod/:id",
    element:<ProdByID/>
  },
  {
    path:"/cart",
    element:<Cart/>
  }
  ]

    },
    {
      path:"/admin",
      element:<AdminPanel/>
    }


  ])
  return (
    <RouterProvider router={router}/>
  )
}

export default App