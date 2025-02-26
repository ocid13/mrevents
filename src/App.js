import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import { useAuth } from "./context/AuthContext"; // Use useAuth instead of AuthContext
import LoginAdmin from "./admin/auth/LoginAdmin";
import ProtectedRoute from "./components/ProtectedRoute";
import AppAdmin from "./admin/AppAdmin";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { DashboardProvider } from "./context/DashboardContext";

const queryClient = new QueryClient();

function App() {
  const { token } = useAuth();

  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Routes>
          <Route
            path="/admin"
            element={
              token ? <Navigate to="/admin/main-dashboard" /> : <LoginAdmin />
            }
          />

          <Route
            path="/admin/*"
            element={
              <ProtectedRoute>
                  <DashboardProvider>
                    <AppAdmin />
                  </DashboardProvider>
                <ReactQueryDevtools />
              </ProtectedRoute>
            }
          />

          <Route
            path="*"
            element={<Navigate to={token ? "/admin/main-dashboard" : "/admin"} />}
          />
        </Routes>
      </Router>
    </QueryClientProvider>
  );
}

export default App;
