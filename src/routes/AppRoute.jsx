import { Route, Routes, Navigate } from "react-router-dom";
import { Home, Login, Register } from "../views/index.js";
import { UserContextProvider } from "../context/UserContext.jsx";
const AppRoute = () => {
  return (
    <UserContextProvider>
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route exact path="/signIn" element={<Login />} />
        <Route exact path="/signUp" element={<Register />} />
        <Route exact path="/home" element={<Home />} />
        <Route path="*" element={<>Path not found</>} />
      </Routes>
    </UserContextProvider>
  );
};

export default AppRoute;
