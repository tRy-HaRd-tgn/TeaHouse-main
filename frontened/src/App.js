import "./styles/index.scss";
import "./styles/logReg.scss";
import "./styles/ErrorPage.scss";
import "./styles/PersonalAccount.scss";
import "./styles/Main_App.scss";
import "./styles/Modal.scss";

import { BrowserRouter } from "react-router-dom";

import AppRouter from "./components/AppRouter";
import { AuthContext } from "./context";
import { useEffect, useState } from "react";
function App() {
  useEffect(() => {
    if (localStorage.getItem("auth")) {
      setIsAuth(true);
    }
  }, []);
  const [isAuth, setIsAuth] = useState(false);
  return (
    <AuthContext.Provider
      value={{
        isAuth,
        setIsAuth,
      }}
    >
      <BrowserRouter>
        <AppRouter></AppRouter>
      </BrowserRouter>
    </AuthContext.Provider>
  );
}
export default App;
