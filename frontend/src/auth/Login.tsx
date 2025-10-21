import React from "react";
import { useGoogleLogin } from "@react-oauth/google";
import { googleAuth } from "../services/OauthService";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const responseGoogle = async (authResult: any) => {
    try {
      if (authResult["code"]) {
        const result = await googleAuth(authResult["code"]);
        const { email, name } = result.data.user;
        const token = result.data.token;
        const obj = { email, name, token };
        localStorage.setItem("userInfo", JSON.stringify(obj));
        navigate("/products");
        console.log("result.data.user ----", result.data.user);
        console.log(token);
      }
    } catch (err) {
      console.log("Error while fetching gogole auth details:", err);
    }
  };

  const googleLogin = useGoogleLogin({
    onSuccess: responseGoogle,
    onError: responseGoogle,
    flow: "auth-code",
  });

  return (
    <div className="container mx-auto w-full">
      <button className="cursor-pointer btn" onClick={googleLogin}>
        Login with Google
      </button>
    </div>
  );
};

export default Login;
