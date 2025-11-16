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
import { AuthProvider } from "./context/AuthContext";

const AppContent: React.FC = () => {
  const location = useLocation();
  const currentRouteConfig = AppRoutes.find((route) =>
    matchPath(route.path, location.pathname)
  );

  const showSidebar = currentRouteConfig?.layoutProps?.showSidebar ?? true;
  const useLayout = currentRouteConfig?.layoutProps?.useLayout ?? true;

  return (
    <FilterProvider>
      {useLayout ? (
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
      ) : (
        <Routes>
          {AppRoutes.map((route) => (
            <Route
              key={route.path}
              path={route.path}
              element={route.component}
            />
          ))}
        </Routes>
      )}
    </FilterProvider>
  );
};

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <AuthProvider>
        <AppContent />
      </AuthProvider>
    </BrowserRouter>
  );
};

export default App;
