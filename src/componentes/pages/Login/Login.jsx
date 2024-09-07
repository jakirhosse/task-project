import { useContext, useState } from "react";
import { AuthContext } from "../../../provider/AuthProvider";
import { FaApple } from "react-icons/fa";
import { Link } from "react-router-dom";
import { FaRegEyeSlash } from "react-icons/fa6";
import GoogleSignUp from "../GoogleSignUp/GoogleSignUp";
import "./Login.css";
const Login = () => {
  const { signIn } = useContext(AuthContext); // Use your signIn method from AuthProvider
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [showPassword, setShowPassword] = useState(false);
  const handleLogin = async (e) => {
    e.preventDefault();
    setError(null);
    try {
      await signIn(email, password);
      //       navigate("/dashboard");
    } catch (err) {
      if (
        err.code === "auth/wrong-password" ||
        err.code === "auth/user-not-found"
      ) {
        setError("Invalid login credentials. Please check and try again.");
      } else {
        setError("An unexpected error occurred. Please try again later.");
      }
    }
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row items-center justify-center">
      {/* Left Side: Form */}
      <div className="md:w-1/2 w-full p-6 md:p-16 flex flex-col items-center bg-gray-50">
        <h1 className="text-4xl font-bold mb-6">Welcome Back!</h1>
        <p className="text-gray-600 mb-8">
          Enter your Credentials to access your account
        </p>
        {error && <p className="text-red-500 mb-4">{error}</p>}
        <form onSubmit={handleLogin} className="w-full max-w-sm">
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
            <p className="absolute top-4 right-2">
              {showPassword ? (
                <FaRegEyeSlash onClick={() => setShowPassword(false)} />
              ) : (
                <FaRegEyeSlash onClick={() => setShowPassword(true)} />
              )}
            </p>
          </div>

          <button
            type="submit"
            className="w-full bg-black text-white p-3 rounded font-semibold hover:bg-gray-800"
          >
            Login
          </button>
          <div className="divider">OR</div>
        </form>
        <div className="flex items-center mt-6">
          <button className="bg-gray-100 p-2 rounded-full mx-2">
            <GoogleSignUp></GoogleSignUp>
          </button>
          <button className="bg-gray-100 p-2 rounded-full mx-2">
            <FaApple />
          </button>
        </div>
        <p className="my-4 text-center">
          Don't have an account?{" "}
          <Link to="/register" className="text-blue-500">
            Sign Up
          </Link>
        </p>
      </div>

      {/* Right Side: Image */}
      <div className="ml-40 singup_bg flex flex-col items-center justify-center px-20">
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

export default Login;
