import { createBrowserRouter, RouterProvider } from "react-router"
import Layout from "./lib/components/layouts/Layout"
import Home from "./lib/components/layouts/home"


const App = () => {
  const router = createBrowserRouter([
    {
    path:"/",
    element: <Layout/>,
    children:[{
      path:"/",
      index: true,
      element: <Home/>, 
    }]

    }


  ])
  return (
    <RouterProvider router={router}/>
  )
}

export default App