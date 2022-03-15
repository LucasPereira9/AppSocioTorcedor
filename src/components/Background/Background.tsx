import React, {useState} from 'react';
import {Container, QRcodeView, OptionsContainer} from './Styles';
import QRCode from 'react-native-qrcode-svg';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import Caretdown from 'react-native-vector-icons/Feather';
import {useNavigation} from '@react-navigation/native';

const Background = ({translateY}: any) => {
  const [isNotificationON, setIsNotificationON] = useState(true);
  const navigation = useNavigation();
  return (
    <Container
      style={{
        opacity: translateY.interpolate({
          inputRange: [0, 300],
          outputRange: [0, 1],
        }),
      }}>
      <QRcodeView>
        <QRCode
          value={'https://www.linkedin.com/in/lucas-pereira-5280b9206/'}
          size={102}
          color={'#ff0000'}
        />
      </QRcodeView>
      <OptionsContainer>
        <TouchableOpacity style={styles.options}>
          <Caretdown name="user" size={22} color="#ffffffdf" />
          <Text style={styles.text}>Dados Cadastrais</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.options}
          onPress={() => {
            if (isNotificationON) {
              setIsNotificationON(false);
            } else {
              setIsNotificationON(true);
            }
          }}>
          <Caretdown
            name={isNotificationON ? 'bell-off' : 'bell'}
            size={22}
            color="#ffffffd6"
          />
          <Text style={styles.text}>Notificações de partidas</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.options}>
          <Caretdown name="settings" size={22} color="#ffffffdf" />
          <Text style={styles.text}>Configurações</Text>
        </TouchableOpacity>
      </OptionsContainer>
      <TouchableOpacity
        style={styles.logoutButton}
        onPress={() => {
          navigation.navigate('Login');
        }}>
        <Text style={styles.buttonText}>Sair da Conta</Text>
      </TouchableOpacity>
    </Container>
  );
};

export default Background;

const styles = StyleSheet.create({
  text: {
    fontSize: 17,
    color: '#ffffff',
    marginLeft: 20,
    fontFamily: 'Poppins-Light',
  },
  options: {
    width: 320,
    height: 40,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    borderBottomWidth: 1,
    borderColor: '#e908086c',
    alignItems: 'center',
  },
  logoutButton: {
    position: 'relative',
    top: 10,
    width: 310,
    height: 40,
    borderWidth: 1,
    borderColor: '#ff000096',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontFamily: 'Poppins-Light',
  },
});
