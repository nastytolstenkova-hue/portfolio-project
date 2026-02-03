import { createBrowserRouter, RouterProvider } from "react-router-dom";

import RootLayout from "../layouts/RootLayout";
import ErrorPage from "../pages/ErrorPage";
import Overview from "../pages/Overview";
import Habits from "../pages/Habits";
import FocusTimer from "../pages/FocusTimer";
import Statistics from "../pages/Statistics";

export default function AppRouter(){
  const router = createBrowserRouter([{
    path:'/',
    element: <RootLayout/>,
    errorElement: <ErrorPage/>,
    children: [
      {path:'/overview', element:<Overview/>},
      {path:'/habits', element:<Habits/>},
      {path:'/focus-timer', element:<FocusTimer/>},
      {path:'/statistics', element:<Statistics/>}]
}])

  return (
    <RouterProvider router={router}/>
    
  )
}