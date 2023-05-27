import {
    createBrowserRouter,
  } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home/Home/Home";
import DoctorProfile from "../Pages/Doctor/DoctorProfile/DoctorProfile";
import Login from "../Pages/Home/RegisterLogin/Login/Login";
  
  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      children:[
        {
            path:'/',
            element:<Home></Home>
        },
        {
            path:'/profile/:id',
            element:<DoctorProfile></DoctorProfile>,
            loader:({params}) => fetch(`http://localhost:8000/doctors/${params.id}`)
        },
        {
            path:'/login',
            element:<Login></Login>
        }
      ]
    },
  ]);
export default router;