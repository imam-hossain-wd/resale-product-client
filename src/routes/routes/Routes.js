import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main/Main";
import AddProduct from "../../pages/AddProduct/AddProduct";
import Blog from "../../pages/AddProduct/Blog/Blog";
import Home from "../../pages/Home/Home";
import Singin from "../../pages/SingIn/Singin";
import Singup from "../../pages/Singup/Singup";
import Profile from '../../pages/profile/Profile'
import VerifyPayment from "../../pages/verifryPayment/VerifyPayment";
import Deshboard from "../../pages/deshboard/Deshboard";
import AddItem from "../../pages/deshboard/addItem/AddItem";
import AllMobiles from "../../pages/AllMobiles/AllMobiles";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main/>,
        children :[
            
            {
                path:'/',
                element: <Home/>
            },
            {
                path:'/home',
                element: <Home/>
            },
            {
                path:'/addproduct',
                element: <AddProduct/>
            },
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
                path:'/deshboard',
                element: <Deshboard/>
               
            },
            {
                path:'/all-mobiles',
                element: <AllMobiles/>
               
            },
           
        ]
    }
])