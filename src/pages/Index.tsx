import React from 'react';
import {Container} from './style';
import Header from '../components/Header/Header';
import {StatusBar} from 'native-base';
import Animated from 'react-native-animated-splash-screen';

const Index = () => {
  return (
    <Container>
      <StatusBar barStyle="light-content" backgroundColor={'#0b3692'} />
      <Header />
    </Container>
  );
};
export default Index;
