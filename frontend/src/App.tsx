import React from "react";
import Sidebar from "./components/Sidebar";
import ProductList from "./pages/ProductList";
import Layout from "./components/Layout";

const App = () => {
  return (
    <Layout>
      <ProductList />
    </Layout>
  );
};

export default App;
