import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Navbar from "./Components/home/Navbar.jsx";
import RootLayout from "./Components/MainLayout/RootLayout.jsx";
import { RouterProvider } from "react-router";
import { router } from "./router/router.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
