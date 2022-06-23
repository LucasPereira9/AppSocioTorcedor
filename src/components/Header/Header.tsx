import React from 'react';
import {Container} from '../../pages/home/style';
import {Image, StyleSheet} from 'react-native';
import Details from '../AccountDetails/Details';

const Header = () => {
  return (
    <Container>
      <Image
        style={styles.imagem}
        source={require('../../assets/Barcelona.jpg')}
      />
      <Details />
    </Container>
  );
};

export default Header;

const styles = StyleSheet.create({
  imagem: {
    top: '8%',
    width: 130,
    height: 107,
  },
  text: {
    fontSize: 29,
    color: '#FFFFFF',
    fontFamily: 'Poppins-SemiBold',
  },
});
