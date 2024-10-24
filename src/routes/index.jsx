import React from "react";
import { Route, Routes } from "react-router-dom";

import { TemplatePage } from "../pages/templates/template-page";
import { Forms } from "../pages/forms";
import { Create } from "../pages/create";
import { Dashboard } from "../pages/dashboard";
import { Login } from "../pages/login";
import { Register } from "../pages/register";

import { Layout } from "../components/UI/Layout";
import { ProtectedRoute } from "./ProtectedRoute";
import { Answers } from "../pages/answers";

export const IndexRoutes = () => {
  return (
    <Routes>
      <Route path="/register" element={<Register />} />
      <Route index path="/login" element={<Login />} />

      <Route path="/" element={<Layout />}>
        <Route path="/" element={<Dashboard />} />
        <Route path="/template/:templateId" element={<TemplatePage />} />
        <Route
          path="/forms"
          element={
            <ProtectedRoute>
              <Forms />
            </ProtectedRoute>
          }
        />
        <Route
          path="/create/:type"
          element={
            <ProtectedRoute>
              <Create />
            </ProtectedRoute>
          }
        />
        <Route
          path="/answers"
          element={
            <ProtectedRoute>
              <Answers />
            </ProtectedRoute>
          }
        />
      </Route>
    </Routes>
  );
};
