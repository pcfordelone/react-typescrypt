import { useCallback, useEffect, useMemo, useRef, useState } from "react";

export const Login: React.FC = () => {
  // useRef
  const inputPasswordRef = useRef<HTMLInputElement>(null); 
  // useState
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [count, setCount] = useState(0);

  // useEffect
  useEffect(() => {
    document.title = `Você clicou ${count} vezes`;
    console.log(`Você clicou ${count} vezes`);
  }, [count]);

  useMemo(() => {}, []);
  
  const handleLogin = useCallback((e) => {
      e.preventDefault();
      console.log('E-mail: ' + email + '/ Password: ' + password);
      console.log(inputPasswordRef.current);      
  }, [email, password]);

  return (
    <div>
      {/* UseEffect */}
      <p>Você clicou {count} vezes</p>
      <button onClick={() => setCount(count + 1)}>Clique aqui</button>
      {/* UseState */}
      <hr />
      E-mail: {email} / Senha: {password}
      <hr />
      <form>
        <label htmlFor="email">
          <span>E-mail</span>
          <input
            name="email"
            type="email"
            placeholder="email"            
            onChange={(e) => setEmail(e.target.value)}
            onKeyDown={e => e.key === 'Enter' ?? console.log(inputPasswordRef.current)}
          />
        </label>
        <label htmlFor="password">
          <span>Password</span>
          <input
            name="password"
            type="password"
            placeholder="password"
            ref={inputPasswordRef}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="button" onClick={handleLogin}>
            Entrar
          </button>
        </label>
      </form>
    </div>
  );
};
