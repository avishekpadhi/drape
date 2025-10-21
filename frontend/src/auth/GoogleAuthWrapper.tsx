import React from "react";
import { GoogleOAuthProvider } from "@react-oauth/google";
import Login from "./Login";

const clientId = import.meta.env.VITE_GOOGLE_CLIENT_ID;

const GoogleAuthWrapper: React.FC = () => (
  <GoogleOAuthProvider clientId={clientId}>
    <Login />
  </GoogleOAuthProvider>
);

export default GoogleAuthWrapper;
