import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Caretdown from 'react-native-vector-icons/Feather';

const EmailSendedModal = () => {
  return (
    <View style={styles.modal}>
      <View style={styles.indicator} />
      <Text style={styles.text}>
        Prontinho! Enviamos um email para que voce possa redefinir sua senha!
      </Text>
      <Caretdown name="email" size={22} color="#ffffffdf" />
      <Text />
    </View>
  );
};
export default EmailSendedModal;

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
    color: '#024189eb',
    fontFamily: 'Poppins-SemiBold',
  },
});
