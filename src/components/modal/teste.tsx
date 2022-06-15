import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import modal from 'react-native-modal';

const ModalTeste = () => {
  return (
    <View style={styles.modal}>
      <View style={styles.indicator} />
      <Text style={styles.text}>teste</Text>
      <TouchableOpacity>
        <Text style={styles.btn}>fechar</Text>
      </TouchableOpacity>
    </View>
  );
};
export default ModalTeste;

const styles = StyleSheet.create({
  modal: {
    position: 'absolute',
    height: '50%',
    backgroundColor: '#fff',
    width: '100%',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingLeft: 25,
    paddingRight: 25,
  },
  indicator: {
    width: 50,
    height: 5,
    backgroundColor: '#ccc',
    borderRadius: 50,
    alignSelf: 'center',
    marginTop: 5,
  },
  text: {
    marginTop: 50,
    textAlign: 'center',
  },
  btn: {
    width: '100%',
    height: 50,
    borderRadius: 10,
    backgroundColor: '#9b59b6',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
  },
});
