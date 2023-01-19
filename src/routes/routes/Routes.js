import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main/Main";
import Blog from "../../pages/Blog/Blog";
import Home from "../../pages/Home/Home";
import Singin from "../../pages/SingIn/Singin";
import Singup from "../../pages/Singup/Singup";
import Deshboard from "../../pages/deshboard/deshboard/Deshboard";
import DeshboardLayout from "../../layout/deshboard/DeshboardLayout";
import ErrorElement from "../../pages/Shared/errorElement/ErrorElement";
import AddProduct from "../../pages/deshboard/addProduct/AddProduct";
import ShowProduct from "../../pages/deshboard/showProduct/ShowProduct";
import MyOrder from "../../pages/deshboard/MyOrder/MyOrder";
import DeshboardProfile from "../../pages/deshboard/deshboardProfile/DeshboardProfile";
import Oneplus from "../../pages/categories/oneplus/Oneplus";
import Iphone from "../../pages/categories/iphone/Iphone";
import Xiaomi from "../../pages/categories/xiaomi/Xiaomi";
import Bookings from "../../pages/deshboard/bookings/Bookings";
import Allsellers from "../../pages/deshboard/allsellers/Allsellers";
import Allbuyers from "../../pages/deshboard/allbuyers/Allbuyers";
import Payment from "../../pages/deshboard/payment/Payment";
import ReportedProducts from "../../pages/deshboard/reportedProducts/ReportedProducts";
import PrivateRoute from "../privateRoutes/PrivateRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorElement />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/blog",
        element: (
          <PrivateRoute>
            <Blog />
          </PrivateRoute>
        ),
      },

      {
        path: "/singin",
        element: <Singin />,
      },
      {
        path: "/singup",
        element: <Singup />,
      },
      {
        path: "/categories/oneplus",
        element: <Oneplus />,
      },
      {
        path: "/categories/iphone",
        element: <Iphone />,
      },
      {
        path: "/categories/xiaomi",
        element: <Xiaomi />,
      },
    ],
  },
  {
    path: "/deshboard",
    element: <DeshboardLayout />,
    errorElement: <ErrorElement />,
    children: [
      {
        path: "/deshboard",
        element: <DeshboardProfile />,
      },
      // {
      //     path:'/deshboard',
      //     element:  <AddProduct/>
      // },
      {
        path: "/deshboard/addproduct",
        element: <AddProduct />,
      },
      {
        path: "/deshboard/showproduct",
        element: <ShowProduct />,
      },
      {
        path: "/deshboard/order",
        element: <MyOrder />,
      },
      {
        path: "/deshboard/booking",
        element: <Bookings />,
      },
      {
        path: "/deshboard/allsellers",
        element: <Allsellers />,
      },
      {
        path: "/deshboard/allbuyers",
        element: <Allbuyers />,
      },
      {
        path: "/deshboard/reported-products",
        element: <ReportedProducts />,
      },
      {
        path: "/deshboard/payment/:id",
        element: <Payment />,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/bookings/${params.id}`),
      },
    ],
  },
]);
