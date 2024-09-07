import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import iconImg from "../../../../assets/icon.png";
import { useSelector } from "react-redux";
const Navbar = () => {
  const cartData = useSelector((state) => state?.cart?.items);
  console.log(cartData);
  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between">
          <div className="flex space-x-7">
            <div className="flex items-center">
              {/* Website Logo */}
              <Link to="/" className="flex items-center gap-1">
                <img
                  src={iconImg}
                  alt="img"
                  className="h-12 w-12 rounded-full"
                />
                <h5 className=" text-xl">
                  Furni<span className="text-blue-600 text-xl">Flex</span>
                </h5>
              </Link>
            </div>
            {/* Primary Navbar items */}
            <div className="hidden md:flex items-center space-x-1">
              <Link
                to="/"
                className="py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300"
              >
                Home
              </Link>
              <Link
                to="/products"
                className="py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300"
              >
                Products
              </Link>
              <Link
                to="/categories"
                className="py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300"
              >
                Categories
              </Link>
              <Link
                to="/custom"
                className="py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300"
              >
                Custom
              </Link>
              <Link
                to="/blog"
                className="py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300"
              >
                Blog
              </Link>
            </div>
          </div>
          {/* Secondary Navbar Items */}
          <div className="flex items-center gap-5">
            <Link className="flex items-center gap-2" to="/checkOut">
              <FaShoppingCart /> <sup>{cartData?.length}</sup>
            </Link>
            <div className="hidden md:flex items-center space-x-3">
              <Link
                to="/login"
                className="py-2 px-2 font-medium text-gray-500 rounded hover:bg-green-500 hover:text-white transition duration-300"
              >
                Login
              </Link>
              <Link
                to="/register"
                className="py-2 px-2 font-medium text-gray-500 rounded hover:bg-green-500 hover:text-white transition duration-300"
              >
                Register
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button className="outline-none mobile-menu-button">
              <svg
                className="w-6 h-6 text-gray-500 hover:text-green-500"
                x-show="!showMenu"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M4 6h16M4 12h16m-7 6h7"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
      {/* Mobile Menu */}
      <div className="mobile-menu hidden md:hidden">
        <Link to="/" className="block py-2 px-4 text-sm hover:bg-gray-200">
          Home
        </Link>
        <Link
          to="/products"
          className="block py-2 px-4 text-sm hover:bg-gray-200"
        >
          Products
        </Link>
        <Link
          to="/categories"
          className="block py-2 px-4 text-sm hover:bg-gray-200"
        >
          Categories
        </Link>
        <Link
          to="/custom"
          className="block py-2 px-4 text-sm hover:bg-gray-200"
        >
          Custom
        </Link>
        <Link to="/blog" className="block py-2 px-4 text-sm hover:bg-gray-200">
          Blog
        </Link>
        <Link to="/login" className="block py-2 px-4 text-sm hover:bg-gray-200">
          Login
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
