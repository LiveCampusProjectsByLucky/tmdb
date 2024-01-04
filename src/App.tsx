import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { Routes, Route } from "react-router-dom";
import AuthLayout from "./layouts/AuthLayout";
import AuthForm from "./components/AuthForm";
import "./App.css";

function App() {
  const apiKey = "79f822ec6a74eb1a06b4197b3d7dcdf5";

  return (
    <>
      <Routes>
        <Route path="/" element={<h1>Hello</h1>} />
        <Route path="/login" element={<AuthLayout><AuthForm /></AuthLayout>} />
      </Routes>
    </>
  );
}

export default App;
