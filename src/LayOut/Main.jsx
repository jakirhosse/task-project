import { Outlet } from "react-router-dom";
import Navbar from "../componentes/pages/Shared/Navbar/Navbar";
import Footer from "../componentes/pages/Shared/Footer/Footer";

const Main = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Main;
