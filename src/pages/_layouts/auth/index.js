import React from 'react';
import PropTypes from 'prop-types';

import logo from '~/assets/logo.svg';

import { Wrapper, Content } from './styles';

export default function AuthLayout({ children }) {
  return (
    <Wrapper>
      <Content>
        <img src={logo} alt="MeetApp" />
        {children}
      </Content>
    </Wrapper>
  );
}

AuthLayout.propTypes = {
  children: PropTypes.element.isRequired,
};
