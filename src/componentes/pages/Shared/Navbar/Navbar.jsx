import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import iconImg from "../../../../assets/icon.png";
import { useSelector } from "react-redux";
import { AuthContext } from "../../../../provider/AuthProvider";

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);
  const cartData = useSelector((state) => state?.cart?.items);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between">
          <div className="flex space-x-7">
            <div className="flex items-center">
              <Link to="/" className="flex items-center gap-1">
                <img
                  src={iconImg}
                  alt="Logo"
                  className="h-12 w-12 rounded-full"
                />
                <h5 className="text-xl">
                  Furni<span className="text-blue-600">Flex</span>
                </h5>
              </Link>
            </div>
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
          <div className="flex items-center gap-5">
            <Link className="flex items-center gap-2" to="/checkout">
              <FaShoppingCart /> <sup>{cartData?.length}</sup>
            </Link>
            {user ? (
              <div className="flex items-center gap-2">
                <img
                  src={user.photoURL || "default_profile.png"}
                  alt="Profile"
                  className="h-8 w-8 rounded-full"
                />
                <button
                  onClick={logout}
                  className="bg-red-500 hover:bg-red-700 text-white px-3 py-1 rounded"
                >
                  Logout
                </button>
              </div>
            ) : (
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
            )}
            <button className="md:hidden" onClick={toggleMobileMenu}>
              <svg
                className="w-6 h-6 text-gray-500 hover:text-green-500"
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
      {isMobileMenuOpen && (
        <div className="md:hidden">
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
          <Link
            to="/blog"
            className="block py-2 px-4 text-sm hover:bg-gray-200"
          >
            Blog
          </Link>
          {user ? (
            <button
              onClick={logout}
              className="block py-2 px-4 text-sm hover:bg-gray-200"
            >
              Logout
            </button>
          ) : (
            <>
              <Link
                to="/login"
                className="block py-2 px-4 text-sm hover:bg-gray-200"
              >
                Login
              </Link>
              <Link
                to="/register"
                className="block py-2 px-4 text-sm hover:bg-gray-200"
              >
                Register
              </Link>
            </>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
