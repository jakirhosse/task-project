import { useContext } from "react";
import { FcGoogle } from "react-icons/fc"; // Google Icon import
import { AuthContext } from "../../../provider/AuthProvider";

const GoogleSignUp = () => {
  const { logingoogle, user } = useContext(AuthContext);

  const handleGoogleSignUp = async () => {
    try {
      const result = await logingoogle();
      console.log("User signed up with Google: ", result.user);
    } catch (error) {
      console.error("Error during Google sign up: ", error);
    }
  };

  return (
    <div>
      <button onClick={handleGoogleSignUp} className="">
        <FcGoogle size={20} />
      </button>
      {/* {user && <p>Welcome, {user.displayName}!</p>} */}
    </div>
  );
};

export default GoogleSignUp;
