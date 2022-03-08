import React from 'react';
import {Container, Icon, Notification} from './styles';
import {ScrollView, Text, StyleSheet, Alert} from 'react-native';
import Caretdown from 'react-native-vector-icons/Feather';
import {TouchableOpacity} from 'react-native-gesture-handler';

const Tabs = ({translateY}: any) => {
  return (
    <Container
      style={{
        transform: [
          {
            translateY: translateY.interpolate({
              inputRange: [0, 340],
              outputRange: [0, 120],
              extrapolate: 'clamp',
            }),
          },
        ],
        opacity: translateY.interpolate({
          inputRange: [0, 250],
          outputRange: [1, 0.2],
          extrapolate: 'clamp',
        }),
      }}>
      <ScrollView horizontal={true}>
        <TouchableOpacity
          style={styles.tabs}
          onPress={() =>
            Alert.alert('Perdão torcedor! Botão em manutenção...')
          }>
          <Icon>
            <Caretdown name="calendar" size={38} color="#ffffffdf" />
          </Icon>
          <Text style={styles.text}>Calendário</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.tabs}
          onPress={() =>
            Alert.alert('Perdão torcedor! Botão em manutenção...')
          }>
          <Icon>
            <Caretdown name="users" size={38} color="#ffffffdf" />
          </Icon>
          <Text style={styles.text}>Elenco</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.tabs}
          onPress={() =>
            Alert.alert(
              'Temos novas contratações! Volte no fim da manutenção. ;)',
            )
          }>
          <Notification>
            <Text style={styles.text}>3</Text>
          </Notification>
          <Icon>
            <Caretdown name="refresh-ccw" size={38} color="#ffffffdf" />
          </Icon>
          <Text style={styles.text2}>Novas Contratações</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.tabs}
          onPress={() =>
            Alert.alert('Perdão torcedor! Botão em manutenção...')
          }>
          <Icon>
            <Caretdown name="trending-up" size={38} color="#ffffffdf" />
          </Icon>
          <Text style={styles.text}>Classificação</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.tabs}
          onPress={() =>
            Alert.alert('Perdão torcedor! Botão em manutenção...')
          }>
          <Icon>
            <Caretdown name="percent" size={38} color="#ffffffdf" />
          </Icon>
          <Text style={styles.text}>Meus Cupons</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.tabs}
          onPress={() =>
            Alert.alert('Perdão torcedor! Botão em manutenção...')
          }>
          <Icon>
            <Caretdown name="shopping-cart" size={38} color="#ffffffdf" />
          </Icon>
          <Text style={styles.text}>Minhas Compras</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.tabs}
          onPress={() =>
            Alert.alert('Perdão torcedor! Botão em manutenção...')
          }>
          <Icon>
            <Caretdown name="dollar-sign" size={38} color="#ffffffdf" />
          </Icon>
          <Text style={styles.text}>PIX</Text>
        </TouchableOpacity>
      </ScrollView>
    </Container>
  );
};

export default Tabs;

const styles = StyleSheet.create({
  text: {
    fontSize: 18,
    color: '#000000bc',
    textAlign: 'center',
    fontFamily: 'PTSerif-Italic',
  },
  text2: {
    fontSize: 18,
    color: '#050505bb',

    textAlign: 'center',
    marginBottom: 6,
    fontFamily: 'PTSerif-Italic',
  },
  tabs: {
    width: 120,
    height: 107,
    backgroundColor: '#b41e1e',
    marginLeft: 10,
    marginRight: 10,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
