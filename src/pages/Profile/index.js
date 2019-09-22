import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Form, Input } from '@rocketseat/unform';
import { MdAddCircleOutline } from 'react-icons/md';
import { Container } from './styles';
import * as Yup from 'yup';
import { updateUserRequest } from '~/store/modules/user/actions';
import { userValidation } from '~/services/validations';

const schema = Yup.object().shape({
  name: userValidation.name,
  email: userValidation.email,
  oldPassword: Yup.string(),
  password: Yup.string().when('oldPassword', (oldPassword, field) =>
    oldPassword
      ? field.min(6, 'mínimo de 6 caracteres').required('Digite a nova senha')
      : field
  ),
  passwordConfirmation: Yup.string().when(
    'password',
    (password, confirmation) =>
      password
        ? confirmation
            .oneOf(
              [Yup.ref('password')],
              'As nova senha e a confirmação devem ser iguais'
            )
            .required('É necessário digitar novamente a nova senha')
        : confirmation
  ),
});

export default function Profile() {
  const dispatch = useDispatch();
  const user = useSelector(state => state.user.user);

  function handleSubmit(form) {
    dispatch(updateUserRequest(form));
  }

  return (
    <Container>
      <Form
        schema={schema}
        onSubmit={handleSubmit}
        initialData={user}
        noValidate={true}
      >
        <Input type="text" name="name" placeholder="Nome"></Input>
        <Input type="email" name="email" placeholder="E-mail"></Input>
        <hr />
        <Input
          type="password"
          name="oldPassword"
          placeholder="Senha atual"
        ></Input>
        <Input type="password" name="password" placeholder="Nova senha"></Input>
        <Input
          type="password"
          name="passwordConfirmation"
          placeholder="Confirmação de senha"
        ></Input>
        <button type="submit">
          <MdAddCircleOutline size={20} color="#fff" /> Salvar Perfil
        </button>
      </Form>
    </Container>
  );
}
