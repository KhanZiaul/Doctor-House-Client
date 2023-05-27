import {
    createBrowserRouter,
  } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home/Home/Home";
import DoctorProfile from "../Pages/Doctor/DoctorProfile/DoctorProfile";
  
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
        }
      ]
    },
  ]);
export default router;