import { Route, Routes } from "react-router-dom";
import { Login, SignUp } from "../pages/index";

const AuthRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/sign-up" element={<SignUp />} />
      </Routes>
    </>
  );
};

export default AuthRoutes;
