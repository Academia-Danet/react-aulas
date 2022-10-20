import React, { useState } from "react";

export const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit() {
    //enviar dados no nanco de dedas
  }

  return (
    <>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          placeholder="digite o seu email"
          id="email"
          name="email"
          value={email}
          onChange={(event) => {
            setEmail(event.target.value);
          }}
        />

        <label htmlfor="password">Palavra Passe: </label>
        <input
          type="password"
          placeholder="digite a sua palavra passe"
          id="password"
          name="password"
          value={password}
          onChange={(event) => {
            setPassword(event.target.value);
          }}
        />

        <button type="submit">Registar</button>
      </form>
    </>
  );
};
