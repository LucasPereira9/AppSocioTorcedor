/* eslint-disable react-native/no-inline-styles */
/**
 * @format
 */
import React, {Fragment} from 'react';
import {Container} from './style';
import Header from '../components/Header';
import {SafeAreaView} from 'react-native';

const Index = () => {
  return (
    <Fragment>
      <SafeAreaView style={{flex: 1, backgroundColor: '#024289'}} />
      <Container>
        <Header />
      </Container>
    </Fragment>
  );
};
export default Index;
