import { createBrowserRouter } from "react-router";
import Layout from "../layout/Layout";
import Home from "../Component/Home";
import Timeline from "../Component/Timeline";
import ErrorPage from "../error/ErrorPage";
import Stats from "../Component/Stats";

export  const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    children:[
      {
        index: true,
        element:<Home/>
      },
      {
        path:"/timeline",
        element:<Timeline/>
      },
      {
        path:"/stats",
        element: <Stats/>
      }
    ],
    errorElement:<ErrorPage/>
  },
 
]);