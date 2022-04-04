import { Link } from "react-router-dom";
import { useContext, useRef } from 'react';
import { LoggedInUserContext } from "../../shared/contexts";

export const Dashboard: React.FC = () => {
  const counterRef = useRef(0)
  const { userName } = useContext(LoggedInUserContext);

  return (
    <div className="dashboard">
      <h1>Dashboard <small>({userName})</small></h1>
      <p>
        Counter: {counterRef.current}
      </p>
      <button onClick={() => counterRef.current++}>Somar</button>

      <hr/>
      <Link to="/login">Entrar</Link>
    </div>
  );
};
