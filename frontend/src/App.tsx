import React from "react";
import Sidebar from "./components/Sidebar/Sidebar";
import ProductList from "./pages/ProductList";
import Layout from "./components/Layout/Layout";
import { FilterProvider } from "./context/FilterContext";
import "./index.css";

const App = () => {
  return (
    <FilterProvider>
      <Layout>
        <ProductList />
      </Layout>
    </FilterProvider>
  );
};

export default App;
