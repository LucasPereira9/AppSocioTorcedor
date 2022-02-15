import React from 'react';
import {Container} from './style';
import Header from '../components/Header/Header';
import {StatusBar} from 'native-base';
import Tabs from '../components/Tabs/Tabs';

const Index = () => {
  return (
    <Container>
      <StatusBar barStyle="light-content" backgroundColor={'#0b3692'} />
      <Header />
      <Tabs />
    </Container>
  );
};
export default Index;
