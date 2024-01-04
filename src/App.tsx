import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { Routes, Route } from "react-router-dom";
import AuthLayout from "./layouts/AuthLayout";
import AuthForm from "./components/AuthForm";
import "./App.css";
import Dashboard from "./pages/dashboard/Dashboard";
import ProtectedRoutes from "./router/ProtectedRoutes";
import MainLayout from "./layouts/mainLayout/MainLayout";

function App() {
  return (
    <>
      <Routes>
        <Route element={<ProtectedRoutes />}>
          <Route element={<MainLayout/>}>
            <Route path="/" element={<Dashboard />} />
          </Route>
        </Route>

        <Route path="/login" element={<AuthLayout><AuthForm /></AuthLayout>} />
      </Routes>
    </>
  );
}

export default App;
