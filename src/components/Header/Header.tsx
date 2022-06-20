import React from 'react';
import {Container} from '../../pages/home/style';
import {Image, StyleSheet} from 'react-native';
import {Top} from './style';
import Details from '../AccountDetails/Details';

const Header = () => {
  return (
    <Container>
      <Top>
        <Image
          style={styles.imagem}
          source={require('../../assets/Barcelona.jpg')}
        />
      </Top>
      <Details />
    </Container>
  );
};

export default Header;

const styles = StyleSheet.create({
  imagem: {
    width: 130,
    height: 107,
    right: '5%',
  },
  text: {
    fontSize: 29,
    color: '#FFFFFF',
    fontFamily: 'Poppins-SemiBold',
  },
});
