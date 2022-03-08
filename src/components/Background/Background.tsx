import React from 'react';
import {
  Container,
  QRcodeView,
  OptionsContainer,
  ButtonContainer,
  Option,
} from './Styles';
import QRCode from 'react-native-qrcode-svg';
import {StyleSheet, Text, Button, Alert} from 'react-native';
import Caretdown from 'react-native-vector-icons/Feather';
import {useNavigation} from '@react-navigation/native';

const Background = ({translateY}: any) => {
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
        <Option>
          <Caretdown name="user" size={22} color="#ffffffdf" />
          <Text style={styles.text}>Dados Cadastrais</Text>
        </Option>
        <Option>
          <Caretdown name="bell-off" size={22} color="#ffffffdf" />
          <Text style={styles.text}>Notificações de partidas</Text>
        </Option>
        <Option>
          <Caretdown name="settings" size={22} color="#ffffffdf" />
          <Text style={styles.text}>Configurações</Text>
        </Option>
      </OptionsContainer>
      <ButtonContainer>
        <Button
          title="Trocar de conta"
          onPress={() => navigation.navigate('Login')}
          color="#024189"
        />
      </ButtonContainer>
    </Container>
  );
};

export default Background;

const styles = StyleSheet.create({
  text: {
    color: '#ffffff',
    marginLeft: 20,
  },
});
