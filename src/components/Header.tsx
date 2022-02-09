import React from 'react';
import {Container} from '../pages/style';
import {Image, StyleSheet, Text} from 'react-native';
import {Top} from './style';
import {AiFillAlert} from 'react-icons/ai';

const Header = () => {
  return (
    <Container>
      <Top>
        <Image
          style={styles.imagem}
          source={require('../assets/Barcelona.png')}
        />
        <AiFillAlert />
        <Text style={styles.text}>OLÁ, LUCAS</Text>
      </Top>
    </Container>
  );
};

export default Header;

const styles = StyleSheet.create({
  imagem: {
    width: 95,
    height: 95,
    borderRadius: 50,
  },
  text: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
});
