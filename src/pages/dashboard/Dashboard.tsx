import { Link } from "react-router-dom";
import { useRef } from 'react';

export const Dashboard: React.FC = () => {
  const counterRef = useRef(0)

  return (
    <div className="dashboard">
      <h1>Dashboard</h1>
      <p>
        Counter: {counterRef.current}
      </p>
      <button onClick={() => counterRef.current++}>Somar</button>

      <hr/>
      <Link to="/login">Entrar</Link>
    </div>
  );
};
