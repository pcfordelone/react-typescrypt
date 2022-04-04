import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { ButtonLogin } from "./components/ButtonLogin";
import { InputLogin } from "./components/InputLogin";

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

  const handleLogin = useCallback(
    () => {
      // e.preventDefault();
      console.log("E-mail: " + email + "/ Password: " + password);
      console.log(inputPasswordRef.current);
    },
    [email, password]
  );

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
        <InputLogin
          label="E-mail"
          name="email"
          type="email"
          onChange={(newValue) => setEmail(newValue)}
          onPressEnter={() => inputPasswordRef.current?.focus()}
        />
        <InputLogin
          label="Password"
          name="password"
          type="password"
          onChange={(newValue) => setPassword(newValue)}
          ref={inputPasswordRef}
        />

        {/* <label htmlFor="password">
          <span>Password</span>
          <input
            name="password"
            type="password"
            placeholder="password"
            ref={inputPasswordRef}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label> */}

        <ButtonLogin 
          buttonType="button"
          onclick={handleLogin}
        >
          Click
        </ButtonLogin>
        {/* <button type="submit" onClick={handleLogin}>
          Entrar
        </button> */}
      </form>
    </div>
  );
};
