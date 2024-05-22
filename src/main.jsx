import React from "react";
import ReactDOM from "react-dom/client";
import MainPage from "./pages/MainPage";
import Tariffs from "./pages/Tariffs";
import TariffDesc from "./pages/TariffDesc";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPage />,
  },
  {
    path: "/Tariff",
    element: <TariffDesc />,
  },
  {
    path: "/Tariffs",
    element: <Tariffs />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
