import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main/Main";
import Blog from "../../pages/AddProduct/Blog/Blog";
import Home from "../../pages/Home/Home";
import Singin from "../../pages/SingIn/Singin";
import Singup from "../../pages/Singup/Singup";
import Profile from '../../pages/profile/Profile'
import VerifyPayment from "../../pages/verifryPayment/VerifyPayment";
import AllMobiles from "../../pages/AllMobiles/AllMobiles";
import Deshboard from "../../pages/deshboard/deshboard/Deshboard";
import DeshboardLayout from "../../layout/deshboard/DeshboardLayout";
import ErrorElement from "../../pages/Shared/errorElement/ErrorElement";


export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main/>,
        errorElement: <ErrorElement/>,
        children :[
            
            {
                path:'/',
                element: <Home/>
            },
            {
                path:'/home',
                element: <Home/>
            },
            // {
            //     path:'/addproduct',
            //     element: <AddProduct/>
            // },
            {
                path:'/blog',
                element: <Blog/>
            },
            {
                path:'/verification',
                element: <VerifyPayment/>
            },
            
            {
                path:'/singin',
                element: <Singin/>
            },
            {
                path:'/profile',
                element: <Profile/>
            },
            {
                path:'/singup',
                element: <Singup/>
            },
            {
                path:'/all-mobiles',
                element: <AllMobiles/>
               
            },
           
        ]
    },
    {
        path:'/deshboard',
        element:<DeshboardLayout/>,
        errorElement: <ErrorElement/>,
        // children: [
        //     {
        //         path:'/dashboard',
        //         element:  <AddProduct/>
        //     }
        // ]

    }
])