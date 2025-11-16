import React from "react";
import ProductList from "../pages/Productlist/ProductList";
import ProductDetails from "../pages/Productdetails/ProductDetails";
import Login from "../auth/Login";
import { Navigate } from "react-router-dom";
import GoogleAuthWrapper from "../auth/GoogleAuthWrapper";
import AuthenticatedRoute from "./AuthenticatedRoutes";

interface RouteConfig {
  path: string;
  component: React.ReactElement;
  layoutProps?: {
    showSidebar?: boolean;
    useLayout?: boolean;
  };
}

export const AppRoutes: RouteConfig[] = [
  {
    path: "/products",
    component: <ProductList />,
    layoutProps: {
      showSidebar: true,
      useLayout: true,
    },
  },
  {
    path: "/product/:id",
    component: <ProductDetails />,
    layoutProps: {
      showSidebar: false,
      useLayout: true,
    },
  },
  {
    path: "/login",
    component: (
      <AuthenticatedRoute>
        <GoogleAuthWrapper />
      </AuthenticatedRoute>
    ),
    layoutProps: {
      showSidebar: false,
      useLayout: false,
    },
  },
  {
    path: "/",
    component: <Navigate to="/login" />,
    layoutProps: {
      showSidebar: false,
      useLayout: false,
    },
  },
];
