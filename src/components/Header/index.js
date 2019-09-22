import React from 'react';
import { Link } from 'react-router-dom';

import logo from '~/assets/logo.svg';
import { Container, Content } from './styles';
import { signOut } from '~/store/modules/auth/actions';
import { useDispatch } from 'react-redux';

export default function Header() {
  const dispatch = useDispatch();
  function handleSignOut() {
    dispatch(signOut());
  }

  return (
    <Container>
      <Content>
        <Link to="/dashboard">
          <img src={logo} alt="MeetApp" />
        </Link>
        <div>
          <span>
            <strong>Joao Pereira</strong>
            <Link to="/profile">Meu perfil</Link>
          </span>
          <button type="button" onClick={handleSignOut}>
            Sair
          </button>
        </div>
      </Content>
    </Container>
  );
}
