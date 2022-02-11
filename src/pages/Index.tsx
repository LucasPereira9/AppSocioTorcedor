import React from 'react';
import {Container} from './style';
import Header from '../components/Header/Header';
import {StatusBar} from 'native-base';
import Footer from '../components/Footer/Footer';

const Index = () => {
  return (
    <Container>
      <StatusBar barStyle="light-content" backgroundColor={'#0b3692'} />
      <Header />
      <Footer />
    </Container>
  );
};
export default Index;
