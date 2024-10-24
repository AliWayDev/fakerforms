import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import useAuthStore from "../global/store/authStore";

export const ProtectedRoute = ({ children }) => {
  const navigate = useNavigate();
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);

  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/login");
    }
  }, [isAuthenticated, navigate]);

  return children;
};
