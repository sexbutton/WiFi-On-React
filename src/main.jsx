import React from "react";
import ReactDOM from "react-dom/client";
import MainPage from "./pages/MainPage";
import Tariffs from "./pages/Tariffs";
import TariffDesc from "./pages/TariffDesc";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";

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
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
