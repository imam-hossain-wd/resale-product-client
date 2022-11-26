import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main/Main";
import Home from "../../pages/Home/Home";
import Singin from "../../pages/SingIn/Singin";

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
                path:'/singin',
                element: <Singin/>
            }
        ]
    }
])