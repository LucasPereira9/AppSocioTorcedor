import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Caretdown from 'react-native-vector-icons/Feather';

const UserNotFoundModal = () => {
  return (
    <View style={styles.modal}>
      <View style={styles.indicator} />
      <Text style={styles.text}>Usuário não encontrado!</Text>
      <Caretdown name="email" size={22} color="#ffffffdf" />
      <Text />
    </View>
  );
};
export default UserNotFoundModal;

const styles = StyleSheet.create({
  modal: {
    bottom: -20,
    position: 'absolute',
    height: '30%',
    backgroundColor: '#fff',
    width: '100%',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingLeft: 25,
    paddingRight: 25,
  },
  indicator: {
    width: 70,
    height: 5,
    backgroundColor: '#ccc',
    borderRadius: 50,
    alignSelf: 'center',
    marginTop: 5,
  },
  text: {
    marginTop: 50,
    textAlign: 'center',
    color: '#d10d0d',
    fontFamily: 'Poppins-SemiBold',
  },
});
