import { createBrowserRouter } from "react-router-dom";
import Main from "../LayOut/Main";
import Login from "../componentes/pages/Login/Login";
import Register from "../componentes/pages/Register/Register";
import Home from "../componentes/pages/Home/Home";
import Products from "../componentes/pages/Products/Products";
import Category from "../componentes/pages/Category/Category";
import CheckOutPage from "../componentes/pages/CheckOutPage/CheckOutPage";

export const Router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/checkOut",
        element: <CheckOutPage></CheckOutPage>,
      },
      {
        path: "/products",
        element: <Products></Products>,
      },
      {
        path: "/categories",
        element: <Category></Category>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },

      {
        path: "/register",
        element: <Register></Register>,
      },
    ],
  },
]);
