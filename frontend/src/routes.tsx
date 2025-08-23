import React from "react";
import ProductList from "./pages/Productlist/ProductList";
import ProductDetails from "./pages/Productdetails/ProductDetails";

interface RouteConfig {
  path: string;
  component: React.ReactElement;
  layoutProps?: {
    showSidebar?: boolean;
  };
}

export const AppRoutes: RouteConfig[] = [
  {
    path: "/",
    component: <ProductList />,
    layoutProps: {
      showSidebar: true,
    },
  },
  {
    path: "/product/:id", // Example path for product details
    component: <ProductDetails />,
    layoutProps: {
      showSidebar: false,
    },
  },
];
