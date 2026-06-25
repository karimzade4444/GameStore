import { createBrowserRouter, RouterProvider } from "react-router"
import Layout from "./lib/components/layouts/Layout"
import Home from "./lib/components/layouts/Home"
import Games from "./lib/components/Games"


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
  }
  ]

    }


  ])
  return (
    <RouterProvider router={router}/>
  )
}

export default App