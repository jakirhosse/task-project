import { createBrowserRouter } from "react-router-dom";
import Main from "../LayOut/Main";
import Login from "../componentes/pages/Login/Login";
import Register from "../componentes/pages/Register/Register";
import Home from "../componentes/pages/Home/Home";
import CheckOutPage from "../componentes/pages/checkOut/checkOutPage";

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
