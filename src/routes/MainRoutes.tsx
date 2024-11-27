import { Route, Routes } from "react-router-dom";
import { Brand, Category, Dashboard, Main, Products } from "../pages/index";

const MainRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/brand" element={<Brand />} />
        <Route path="/category" element={<Category />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/products" element={<Products />} />
      </Routes>
    </>
  );
};

export default MainRoutes;
