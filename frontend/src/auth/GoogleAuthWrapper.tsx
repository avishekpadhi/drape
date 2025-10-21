import React from "react";
import { GoogleOAuthProvider } from "@react-oauth/google";
import Login from "./Login";

const GoogleAuthWrapper: React.FC = () => (
  <GoogleOAuthProvider clientId="1083687510801-lv6urca81uu14mhpa6gva856bah5pouh.apps.googleusercontent.com">
    <Login />
  </GoogleOAuthProvider>
);

export default GoogleAuthWrapper;
