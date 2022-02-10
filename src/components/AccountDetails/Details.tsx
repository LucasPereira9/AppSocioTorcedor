import React from 'react';
import {Container} from '../../pages/style';
import {DetailContainer, Icon, Content} from './styles';
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
        <Content>
          <Text style={styles.text2}>Proximo Jogo</Text>
          <Text style={styles.text2}>TESTE TESTE TESTE</Text>
        </Content>
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
  text2: {
    color: '#FFF',
    fontSize: 20,
    marginLeft: 30,
  },
});
