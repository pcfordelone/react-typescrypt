import { Routes, Route, Navigate } from "react-router-dom";
import { Dashboard, Login } from "../pages";
import { Concepts } from '../pages/concepts/Concepts';

export const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/items-estudados" element={<Concepts/>} />

      <Route path="/login" element={<Login/>} />
      <Route path="/dashboard" element={<Dashboard/>} />

      <Route path="*" element={<Navigate to={"/dashboard"} />} />
    </Routes>
  );
};
