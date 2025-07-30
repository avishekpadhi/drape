import React from "react";
import ProductList from "./pages/ProductList";
import ProductDetails from "./pages/ProductDetails";

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
