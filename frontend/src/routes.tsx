import React from "react";
import ProductList from "./pages/Productlist/ProductList";
import ProductDetails from "./pages/Productdetails/ProductDetails";
import Login from "./auth/Login";
import { Navigate } from "react-router-dom";
import GoogleAuthWrapper from "./auth/GoogleAuthWrapper";

interface RouteConfig {
  path: string;
  component: React.ReactElement;
  layoutProps?: {
    showSidebar?: boolean;
  };
}

export const AppRoutes: RouteConfig[] = [
  {
    path: "/products",
    component: <ProductList />,
    layoutProps: {
      showSidebar: true,
    },
  },
  {
    path: "/product/:id",
    component: <ProductDetails />,
    layoutProps: {
      showSidebar: false,
    },
  },
  {
    path: "/login",
    component: <GoogleAuthWrapper />,
    layoutProps: {
      showSidebar: false,
    },
  },
  {
    path: "/",
    component: <Navigate to="/login" />,
    layoutProps: {
      showSidebar: false,
    },
  },
];
