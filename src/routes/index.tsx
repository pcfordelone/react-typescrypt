import { Routes, Route, Navigate } from "react-router-dom";

export const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/start" element={<h1>Hello World</h1>} />

      <Route path="*" element={<Navigate to={"/start"} />} />
    </Routes>
  );
};
