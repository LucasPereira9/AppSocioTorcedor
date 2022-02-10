import React from 'react';
import {Container} from '../../pages/style';
import {DetailContainer, Icon, Line} from './styles';
import Caretdown from 'react-native-vector-icons/Feather';
import {Text, StyleSheet, View} from 'react-native';

const Details = () => {
  return (
    <Container>
      <DetailContainer>
        <Icon>
          <Caretdown name="dollar-sign" size={28} color="#c2bdbd" />
          <Caretdown name="eye-off" size={32} color="#c2bdbd" />
        </Icon>
        <Text style={styles.text}>Saldo Disponivel</Text>
        <Text style={styles.value}>R$ 12.234,00</Text>
        <View style={styles.view} />
      </DetailContainer>
    </Container>
  );
};
export default Details;

const styles = StyleSheet.create({
  text: {
    fontSize: 16,
    paddingTop: 25,
    paddingLeft: 10,
    color: '#c5c3c3',
  },
  value: {
    fontSize: 40,
    color: '#FFF',
    paddingLeft: 10,
  },
  view: {
    paddingTop: 10,
    width: 100,
    height: 20,
    backgroundColor: '#FFF',
  },
});
