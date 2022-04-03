import { Routes, Route, Navigate } from "react-router-dom";
import { Dashboard, Login } from "../pages";

export const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login/>} />
      <Route path="/dashboard" element={<Dashboard/>} />

      <Route path="*" element={<Navigate to={"/dashboard"} />} />
    </Routes>
  );
};
