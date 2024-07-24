import { Route, Routes } from "react-router-dom";
import Error from "../pages/NotFoundPage";
import { privateRoutes, publicRoutes, routes } from "../router";
import { useContext } from "react";
import { AuthContext } from "../context";
const AppRouter = () => {
  const { isAuth, setIsAuth } = useContext(AuthContext);
  return (
    <Routes>
      {isAuth
        ? privateRoutes.map((route) => (
            <Route
              element={route.component}
              path={route.path}
              exact={route.exact}
            />
          ))
        : publicRoutes.map((route) => (
            <Route
              element={route.component}
              path={route.path}
              exact={route.exact}
            />
          ))}
      <Route path="*" element={<Error />} />
    </Routes>
  );
};
export default AppRouter;
