import React, {useState} from 'react';
import {Container} from '../../pages/home/style';
import {Image, StyleSheet, Text} from 'react-native';
import {Top} from './style';
import Details from '../AccountDetails/Details';

const Header = () => {
  const [name, setName] = useState('');
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
    width: 115,
    height: 115,
    right: '4%',
  },
  text: {
    fontSize: 29,
    color: '#FFFFFF',
    fontFamily: 'Poppins-SemiBold',
  },
});
