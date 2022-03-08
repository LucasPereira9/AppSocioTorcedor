/* eslint-disable react-hooks/rules-of-hooks */
import 'react-native-gesture-handler';
import React, {useState} from 'react';
import {Container, LoginContainer} from './style';
import {View, Image, StyleSheet, Text, TextInput, Alert} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

const login = ({navigation}: any) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function Login() {
    if (email === 'lucas@teste.com' && password === '12345678') {
      navigation.navigate('Index');
    } else {
      Alert.alert('Email ou senha incorretos!');
    }
  }
  return (
    <Container>
      <View>
        <Image
          style={styles.img}
          source={require('../../assets/Camp-Nou.jpg')}
        />
      </View>
      <Image
        style={styles.img2}
        source={require('../../assets/login_image.png')}
      />

      <LoginContainer>
        <Text style={styles.text2}>Insira seus dados para efetuar o login</Text>
        <Text style={styles.text3}>Email</Text>
        <TextInput
          style={styles.input}
          placeholder="Insira seu Email cadastrado"
          value={email}
          onChangeText={value => setEmail(value)}
          placeholderTextColor={'#00000092'}
          returnKeyType={'next'}
          keyboardType="email-address"
        />
        <Text style={styles.text3}>Senha</Text>
        <TextInput
          placeholder="Insira sua Senha cadastrada"
          placeholderTextColor={'#00000092'}
          style={styles.input}
          secureTextEntry={true}
          keyboardType="numeric"
          value={password}
          onChangeText={value => setPassword(value)}
        />
        <TouchableOpacity style={styles.button} onPress={Login}>
          <Text style={styles.buttonText}>ENTRAR</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.accountCreate}
          onPress={() => {
            Alert.alert('Adquira os dados de Login com o Desenvolvedor!');
            Alert.alert(
              'App em desenvolvimento. \nnovos cadastros indisponiveis! :(',
            );
          }}>
          <Text style={styles.acoountCreateText}>Criar Conta</Text>
        </TouchableOpacity>
      </LoginContainer>
    </Container>
  );
};
export default login;

const styles = StyleSheet.create({
  img: {
    flex: 1,
    position: 'relative',
    left: 25,
    zIndex: -22,
  },
  img2: {
    width: 260,
    height: 260,
    position: 'absolute',
    top: 15,
  },
  text: {
    width: 180,
    height: 60,
    backgroundColor: '#024189dd',
    position: 'absolute',
    top: 350,
    color: '#ffffff',
    zIndex: 20,
    fontSize: 40,
    textAlign: 'center',
    borderRadius: 90,
  },
  text2: {
    fontSize: 28,
    color: '#000000',
    paddingTop: 30,
    textAlign: 'center',
    fontFamily: 'PTSerif-Italic',
  },
  text3: {
    paddingTop: 10,
    fontSize: 22,
    color: '#000',
    fontFamily: 'PTSerif-Italic',
  },
  input: {
    width: 255,
    height: 50,
    color: '#000',
    backgroundColor: '#fff',
    borderRadius: 6,
    marginTop: 12,
    textAlign: 'center',
    fontFamily: 'PTSerif-Italic',
  },
  button: {
    width: 230,
    height: 44,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#024189f8',
    marginTop: 20,
    borderRadius: 4,
  },
  buttonText: {
    marginLeft: 13,
    width: 100,
    fontSize: 22,
    color: '#fff',
    fontFamily: 'PTSerif-Italic',
  },
  accountCreate: {
    width: 100,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 16,
    marginLeft: 6,
  },
  acoountCreateText: {
    fontSize: 17,
    color: '#000',
    borderBottomWidth: 1,
    borderColor: '#ee0000',
    fontFamily: 'PTSerif-Italic',
  },
});
