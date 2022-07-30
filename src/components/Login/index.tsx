import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/authProvider/useAuth";

import { Button, Container, Form, Input, Title } from "./styles";

const Login: React.FC = () => {
  const [emailInput, setEmailInput] = useState<string>("");
  const [passwordInput, setPasswordInput] = useState<string>("");

  const { auth } = useAuth();
  let navigate = useNavigate();

  async function handleSubmitData(email: string, password: string) {
    if (!emailInput && !passwordInput)
      return alert("Por favor, preencha todos os campos!");

    try {
      await auth(email, password);

      navigate("/profile");
    } catch (error) {
      alert("email ou senha inválidos");
    }
  }

  return (
    <Container>
      <Form>
        <Title>Login</Title>
        <Input
          type="email"
          name="email"
          placeholder="email"
          onChange={(e) => {
            setEmailInput(e.target.value);
          }}
        />
        <Input
          type="password"
          name="password"
          placeholder="password"
          onChange={(e) => {
            setPasswordInput(e.target.value);
          }}
        />
        <Button onClick={() => handleSubmitData(emailInput, passwordInput)}>
          Enviar
        </Button>
      </Form>
    </Container>
  );
};

export default Login;
