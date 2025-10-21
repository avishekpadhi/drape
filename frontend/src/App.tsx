import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  useLocation,
  matchPath,
} from "react-router-dom";
import Layout from "./components/Layout/Layout";
import { FilterProvider } from "./context/FilterContext";
import { AppRoutes } from "./routes";
import "./index.css";

const AppContent: React.FC = () => {
  const location = useLocation();
  const currentRouteConfig = AppRoutes.find((route) =>
    matchPath(route.path, location.pathname)
  );

  const showSidebar = currentRouteConfig?.layoutProps?.showSidebar ?? true;

  return (
    <FilterProvider>
      <Layout showSidebar={showSidebar}>
        <Routes>
          {AppRoutes.map((route) => (
            <Route
              key={route.path}
              path={route.path}
              element={route.component}
            />
          ))}
        </Routes>
      </Layout>
    </FilterProvider>
  );
};

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
};

export default App;
