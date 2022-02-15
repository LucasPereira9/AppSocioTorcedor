import React from 'react';
import {Container} from '../../pages/style';
import {Image, StyleSheet, Text} from 'react-native';
import {Top} from './style';
import Caretdown from 'react-native-vector-icons/AntDesign';
import Details from '../AccountDetails/Details';
import Background from '../Background/Background';

const Header = () => {
  return (
    <Container>
      <Top>
        <Image
          style={styles.imagem}
          source={require('../../assets/Barcelona.jpg')}
        />
        <Text style={styles.text}>OLÁ, LUCAS</Text>
      </Top>
      <Caretdown name="caretdown" size={26} color="#FFF" />
      <Details />
      <Background />
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
  text3: {
    zIndex: -1,
    color: '#1eff00',
    position: 'absolute',
    top: 160,
  },
});
