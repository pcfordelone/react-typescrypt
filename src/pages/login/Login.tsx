import { useState } from "react";

export const Login: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e: any) => {
    e.preventDefault();
    console.log(email, password);
  };

  console.log("email: " + email, "/ password: " + password )

  return (
    <div>
      <h1>Login</h1>
      <hr />
      <form>
        <label htmlFor="email">
          <span>E-mail</span>
          <input
            onChange={(e) => setEmail(e.target.value)}
            name="email"
            type="email"
            placeholder="email"
          />
        </label>
        <label htmlFor="password">
          <span>Password</span>
          <input
            onChange={(e) => setPassword(e.target.value)}
            name="password"
            type="password"
            placeholder="password"
          />
          <button type="submit" onClick={handleLogin}>
            Entrar
          </button>
        </label>
      </form>
    </div>
  );
};
