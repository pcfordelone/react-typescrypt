import { Link } from "react-router-dom";

export const Dashboard: React.FC = () => {
  return (
    <div className="dashboard">
      <h1>Dashboard</h1>
      <Link to="/login">Entrar</Link>
    </div>
  );
};
