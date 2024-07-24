import React from "react";
import ReactDOM from "react-dom/client";

import App from "./pages/App";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Personal_account from "./pages/Personal_account";
import NotFoundPage from "./pages/NotFoundPage";
import Main_App from "./pages/Main_App";

import "./styles/index.scss";
import "./styles/logReg.scss";
import "./styles/ErrorPage.scss";
import "./styles/PersonalAccount.scss";
import "./styles/Main_App.scss";
import "./styles/Modal.scss";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
    errorElement: <NotFoundPage />,
  },
  {
    path: "/Register",
    element: <Register />,
  },
  {
    path: "/App",
    element: <App />,
  },
  {
    path: "/Personal_account",
    element: <Personal_account />,
  },
  {
    path: "/Main_App",
    element: <Main_App />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
