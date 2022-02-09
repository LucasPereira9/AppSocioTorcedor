/**
 * @format
 */
import React from 'react';
import {Container, Logo, Text} from './style';

import logo from '../assets/Chofer.png';

const Header = () => {
  return (
    <Container>
      <Logo source={logo} />
      <Text>OLÁ, LUCAS</Text>
    </Container>
  );
};
export default Header;
