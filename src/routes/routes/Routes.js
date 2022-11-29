import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main/Main";
import AddProduct from "../../pages/AddProduct/AddProduct";
import Blog from "../../pages/AddProduct/Blog/Blog";
import Home from "../../pages/Home/Home";
import Singin from "../../pages/SingIn/Singin";
import Singup from "../../pages/Singup/Singup";

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
                path:'/singin',
                element: <Singin/>
            },
            {
                path:'/singup',
                element: <Singup/>
            }
        ]
    }
])