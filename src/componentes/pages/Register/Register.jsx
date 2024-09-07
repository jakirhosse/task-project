import { useContext, useState } from "react";
import { AuthContext } from "../../../provider/AuthProvider";
import { FaApple, FaGoogle, FaEye, FaEyeSlash } from "react-icons/fa"; // Import both eye icons
import { Link, useNavigate } from "react-router-dom";
// import GoogleSignUp from "../GoogleSignUp/GoogleSignUp";
import "./Register.css";
import Swal from "sweetalert2";

const Register = () => {
  const { createUser } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate("/");
  const handleRegister = async (e) => {
    e.preventDefault();
    setError(null);
    try {
      await createUser(email, password);
      // Navigate or show a success message
    } catch (err) {
      setError(err.message);
    }
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "Your loggin is sucessfully",
      showConfirmButton: false,
      timer: 1500,
    });
    navigate("/");
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row items-center justify-center mt-8">
      {/* Left Side: Form */}
      <div className="md:w-1/2 w-full p-6 md:p-16 flex flex-col items-center bg-gray-50">
        <h1 className="text-4xl font-bold mb-6">Welcome To FurniFlex</h1>
        <p className="text-gray-600 mb-8">
          Sign up to explore exclusive furniture collections
        </p>
        {error && <p className="text-red-500 mb-4">{error}</p>}
        <form onSubmit={handleRegister} className="w-full max-w-sm">
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <label htmlFor="firstName" className="block mb-1">
                First Name
              </label>
              <input
                type="text"
                id="firstName"
                placeholder="First Name"
                className="w-full p-2 border border-gray-300 rounded"
              />
            </div>
            <div>
              <label htmlFor="lastName" className="block mb-1">
                Last Name
              </label>
              <input
                type="text"
                id="lastName"
                placeholder="Last Name"
                className="w-full p-2 border border-gray-300 rounded"
              />
            </div>
          </div>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-3 mb-4 border border-gray-300 rounded"
          />
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-3 mb-4 border border-gray-300 rounded"
            />
            <p className="absolute top-4 right-2 cursor-pointer">
              {showPassword ? (
                <FaEyeSlash onClick={() => setShowPassword(false)} />
              ) : (
                <FaEye onClick={() => setShowPassword(true)} />
              )}
            </p>
          </div>
          <div className="form-control">
            <label className="label cursor-pointer">
              <input type="checkbox" defaultChecked className="checkbox" />
              <span className="label-text mx-center">
                I agree to the terms and conditions {/* Fixed the text */}
              </span>
            </label>
          </div>
          <button
            type="submit"
            className="w-full bg-black text-white p-3 rounded font-semibold hover:bg-gray-800"
          >
            Register
          </button>
          <div className="divider">OR</div>
        </form>
        <div className="flex items-center mt-6 space-x-2">
          <button className="bg-gray-100 p-2 rounded-full">
            <FaGoogle size={24} /> {/* Google Icon */}
          </button>
          <button className="bg-gray-100 p-2 rounded-full">
            <FaApple size={24} /> {/* Apple Icon */}
          </button>
        </div>
        <p className="my-4 text-center">
          Have an account?{" "}
          <Link to="/login" className="text-blue-500">
            Sign In
          </Link>
        </p>
      </div>

      {/* Right Side: Image */}
      <div className="singup_bg flex flex-col items-center justify-center  px-5 md:px-20">
        <img
          src="../../../../src/assets/icon.png"
          alt="icon"
          width={85}
          height={85}
        />
        <h5 className="text-white text-xl">
          Furni<span className="text-blue-600 text-xl">Flex</span>
        </h5>
        <p className="text-white">
          Discover a seamless shopping experience with our curated collection of
          products. From fashion to electronics, we bring quality.
        </p>
      </div>
    </div>
  );
};

export default Register;
