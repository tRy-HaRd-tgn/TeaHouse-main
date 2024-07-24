import App from "../pages/App";
import Login from "../pages/Login";
import MainApp from "../pages/Main_App";
import PersonalAccount from "../pages/Personal_account";
import Register from "../pages/Register";
export const privateRoutes = [
  { path: "/", component: <MainApp></MainApp>, exact: true },
  { path: "/app", component: <App></App>, exact: true },
  {
    path: "/personal_account",
    component: <PersonalAccount></PersonalAccount>,
    exact: true,
  },
];

export const publicRoutes = [
  { path: "/login", component: <Login></Login>, exact: true },
  { path: "/register", component: <Register></Register>, exact: true },
  { path: "/", component: <Login></Login>, exact: true },
];
