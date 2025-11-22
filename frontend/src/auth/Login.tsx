import { useContext } from "react";
import { useGoogleLogin } from "@react-oauth/google";
import { googleAuth } from "../services/OauthService";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import googleIcon from "@/assets/google.png";
import drape from "@/assets/drape.png";

const Login = () => {
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const responseGoogle = async (authResult: any) => {
    try {
      if (authResult.code) {
        const res = await googleAuth(authResult.code);

        const user = {
          email: res.data.user.email,
          name: res.data.user.name,
          token: res.data.token,
        };

        login(user);
        navigate("/products");
      }
    } catch (err) {
      console.error("Google login error:", err);
      alert("Google login failed. Please try again.");
    }
  };

  const googleLogin = useGoogleLogin({
    onSuccess: responseGoogle,
    onError: responseGoogle,
    flow: "auth-code",
  });

  return (
    <div className="w-full h-screen grid grid-cols-1 md:grid-cols-2">
      <div className="hidden md:block">
        <img
          src={drape}
          alt="Login visual"
          className="w-full h-screen object-cover"
        />
      </div>

      <div className="flex flex-col items-center justify-center px-10">
        <div className="w-full max-w-sm">
          <h1 className="text-3xl font-semibold mb-2 text-gray-800">
            Welcome.
          </h1>
          <p className="text-gray-500 mb-8">Sign in to continue.</p>

          <button
            className="w-full border border-gray-300 rounded-xl py-3 flex items-center justify-center gap-3 hover:bg-gray-100 transition"
            onClick={googleLogin}
            aria-label="Login with Google"
          >
            <img src={googleIcon} alt="Google icon" className="w-5 h-5" />
            <span className="font-medium">Login with Google</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
