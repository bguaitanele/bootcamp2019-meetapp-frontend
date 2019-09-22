import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import { createUserRequest } from '~/store/modules/user/actions';
import * as Yup from 'yup';
import { userValidation } from '~/services/validations';

const schema = Yup.object().shape({
  name: userValidation.name,
  email: userValidation.email,
  password: Yup.string().required('A senha é de preenchimento obrigatório'),
});

export default function SignUp() {
  const dispatch = useDispatch();
  function handleSubmit(form) {
    dispatch(createUserRequest(form));
  }

  return (
    <Form onSubmit={handleSubmit} schema={schema} noValidate>
      <Input type="text" name="name" placeholder="Nome completo" />
      <Input type="email" name="email" placeholder="Digite seu e-mail" />
      <Input type="password" name="password" placeholder="Sua senha secreta" />
      <button type="submit">Criar conta</button>
      <Link to="/">Já tenho login</Link>
    </Form>
  );
}
