/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react-hooks/rules-of-hooks */
import {useNavigation} from '@react-navigation/native';
import {StatusBar} from 'native-base';
import React, {useState} from 'react';
import {
  ActivityIndicator,
  Image,
  Keyboard,
  StyleSheet,
  Text,
  TextInput,
  ToastAndroid,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import {Container, InputContent, LoginContainer} from './styles';
import auth from '@react-native-firebase/auth';

export const Cadastrar = () => {
  const [isLoading, setIsLoading] = useState(false);
  const navigation = useNavigation();
  const setToastMessage = (msg: string) => {
    ToastAndroid.showWithGravity(msg, ToastAndroid.LONG, ToastAndroid.BOTTOM);
  };

  function SignUp() {
    setIsLoading(true);
    auth()
      .createUserWithEmailAndPassword(email, password)
      .then(userCredential => {
        console.log('user', userCredential, 'aqui o nome', name);
        navigation.navigate('Login');
        setEmail('');
        setPassword('');
      })
      .catch(error => {
        if (error.code === 'auth/email-already-in-use') {
          setToastMessage('email já cadastrado');
          setIsLoading(false);
        }

        if (error.code === 'auth/invalid-email') {
          setToastMessage('email inválido');
          setIsLoading(false);
        }
        if (error.code === 'auth/weak-password') {
          setToastMessage('A senha deve ter no mínimo 6 caracteres');
          setIsLoading(false);
        }

        console.error(error);
      });
  }

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const isEmpty = email === '' || password === '' || name === '';

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <Container>
        <StatusBar backgroundColor={'#000000be'} />
        <View>
          <Image
            style={styles.img}
            source={require('../../assets/vestiario5.jpeg')}
          />
        </View>
        <Image
          style={styles.img2}
          source={require('../../assets/Barcelona_empty.png')}
        />
        <LoginContainer>
          <Text style={styles.text}>Criar Conta</Text>
          <InputContent>
            <Text style={styles.text2}>Nome</Text>
            <TextInput
              style={styles.input}
              placeholder="Insira seu nome"
              value={name}
              onChangeText={value => setName(value.replace(/[^a-zA-Z.]/g, ''))}
              placeholderTextColor={'#00000050'}
              returnKeyType={'next'}
              keyboardType="email-address"
            />
          </InputContent>
          <InputContent>
            <Text style={styles.text2}>Email</Text>
            <TextInput
              style={styles.input}
              placeholder="Insira um Email válido"
              value={email}
              onChangeText={value => setEmail(value)}
              placeholderTextColor={'#00000050'}
              returnKeyType={'next'}
              keyboardType="email-address"
              autoCapitalize="none"
            />
          </InputContent>
          <InputContent>
            <Text style={styles.text2}>Senha</Text>
            <TextInput
              placeholder="Insira uma Senha"
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
          {isEmpty ? (
            <View style={styles.empty}>
              <Text style={styles.buttonText}>Cadastrar</Text>
            </View>
          ) : (
            <TouchableOpacity onPress={SignUp} style={styles.button}>
              {isLoading ? (
                <ActivityIndicator size="large" color="#ffffff" />
              ) : (
                <Text style={styles.buttonText}>Cadastrar</Text>
              )}
            </TouchableOpacity>
          )}

          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Login');
            }}
            style={styles.buttonBack}>
            <Text
              style={[
                styles.buttonText,
                {
                  color: '#000000',
                  width: 200,
                  borderBottomWidth: 1,
                  borderColor: '#ee0000',
                  bottom: 10,
                },
              ]}>
              Já Possuo Cadastro
            </Text>
          </TouchableOpacity>
        </LoginContainer>
      </Container>
    </TouchableWithoutFeedback>
  );
};
const styles = StyleSheet.create({
  img: {
    height: '100%',
    left: 70,
  },
  img2: {
    top: '3%',
    width: 200,
    height: 200,
    position: 'absolute',
  },
  text: {
    fontSize: 29,
    color: '#024189eb',
    fontFamily: 'Poppins-SemiBold',
  },
  text2: {
    paddingLeft: 3,
    paddingTop: 10,
    fontSize: 18,
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
  buttonBack: {
    width: 230,
    height: 44,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    borderRadius: 4,
  },
  buttonText: {
    width: 100,
    fontSize: 19,
    color: '#fff',
    fontFamily: 'Poppins-Light',
  },
  empty: {
    width: 230,
    height: 44,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#94989cf8',
    marginTop: 20,
    borderRadius: 4,
  },
});
