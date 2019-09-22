import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import { signInRequest } from '~/store/modules/auth/actions';

export default function SignIn() {
  const dispatch = useDispatch();
  function handleSubmit({ email, password }) {
    dispatch(signInRequest(email, password));
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Input type="text" name="email" placeholder="Digite seu e-mail" />
      <Input type="password" name="password" placeholder="Sua senha secreta" />
      <button type="submit">Entrar</button>
      <Link to="/signup">Criar conta grátis</Link>
    </Form>
  );
}
