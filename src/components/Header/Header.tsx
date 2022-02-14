import React from 'react';
import {Container} from '../../pages/style';
import {Image, StyleSheet, Text} from 'react-native';
import {Top} from './style';
import Caretdown from 'react-native-vector-icons/AntDesign';
import Details from '../AccountDetails/Details';
import Tabs from '../Tabs/Tabs';

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
      <Caretdown name="caretdown" size={25} color="#FFF" />
      <Details />
      <Tabs />
    </Container>
  );
};

export default Header;

const styles = StyleSheet.create({
  imagem: {
    width: 95,
    height: 95,
    // resizeMode: 'cover',
    borderRadius: 50,
  },
  text: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
});
