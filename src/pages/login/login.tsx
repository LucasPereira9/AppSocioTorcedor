/* eslint-disable react-hooks/rules-of-hooks */
import 'react-native-gesture-handler';
import React, {useState} from 'react';
import {Container, LoginContainer, InputContent} from './style';
import {
  View,
  Image,
  StyleSheet,
  Text,
  TextInput,
  Keyboard,
  ToastAndroid,
} from 'react-native';
import {
  TouchableOpacity,
  TouchableWithoutFeedback,
} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';
import auth from '@react-native-firebase/auth';

const login = () => {
  const setToastMessage = (msg: string) => {
    ToastAndroid.showWithGravity(msg, ToastAndroid.LONG, ToastAndroid.BOTTOM);
  };

  function Logar() {
    auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        navigation.navigate('Home');
        setEmail('');
        setPassword('');
      })
      .catch(error => {
        if (error.code === 'auth/invalid-email' || 'auth/wrong-password') {
          setToastMessage('credenciais inválidas');
        }

        if (error.code === 'auth/invalid-email') {
          setToastMessage('email inválido');
        }

        console.error(error);
      });
  }
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <Container>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.view}>
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
          <InputContent>
            <Text style={styles.text3}>Email</Text>
            <TextInput
              style={styles.input}
              placeholder="Insira seu Email"
              value={email}
              onChangeText={string => setEmail(string)}
              placeholderTextColor={'#00000050'}
              returnKeyType={'next'}
              keyboardType="email-address"
              autoCapitalize="none"
            />
          </InputContent>
          <InputContent>
            <Text style={styles.text3}>Senha</Text>
            <TextInput
              placeholder="Insira sua Senha"
              placeholderTextColor={'#00000050'}
              style={styles.input}
              secureTextEntry={true}
              keyboardType="numeric"
              value={password}
              onChangeText={value =>
                setPassword(value.replace(/([^\d\s/-])/g, ''))
              }
            />
          </InputContent>
          <TouchableOpacity style={styles.button} onPress={Logar}>
            <Text style={styles.buttonText}>ENTRAR</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.accountCreate}
            onPress={() => {
              navigation.navigate('Cadastrar');
            }}>
            <Text style={styles.acoountCreateText}>Criar Conta</Text>
          </TouchableOpacity>
        </LoginContainer>
      </TouchableWithoutFeedback>
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
  view: {
    flex: 1,
  },
  img2: {
    top: '9%',
    left: '32%',
    width: 260,
    height: 260,
    position: 'absolute',
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
    fontFamily: 'PTSerif-Italic',
  },
  text2: {
    fontSize: 25,
    color: '#000000',
    paddingTop: 8,
    textAlign: 'center',
    fontFamily: 'Poppins-Light',
  },
  text3: {
    paddingLeft: 3,
    paddingTop: 10,
    fontSize: 20,
    color: '#024189eb',
    fontFamily: 'Poppins-SemiBold',
  },
  input: {
    width: 235,
    height: 50,
    backgroundColor: '#fff',
    borderRadius: 6,
    textAlign: 'left',
    fontFamily: 'Poppins-Light',
    borderWidth: 1,
    borderColor: '#024189f8',
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
    fontFamily: 'Poppins-Light',
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
    fontFamily: 'Poppins-Light',
  },
});
