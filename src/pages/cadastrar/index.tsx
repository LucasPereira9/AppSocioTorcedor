import {useNavigation} from '@react-navigation/native';
import {StatusBar} from 'native-base';
import React, {useState} from 'react';
import {
  Image,
  Keyboard,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import {Container, InputContent, LoginContainer} from './styles';

export const Cadastrar = () => {
  const navigation = useNavigation();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <Container>
        <StatusBar backgroundColor={'#fc001dc7'} />
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
            <Text style={styles.text2}>Email</Text>
            <TextInput
              style={styles.input}
              placeholder="Insira um Email"
              value={email}
              onChangeText={value => setEmail(value)}
              placeholderTextColor={'#00000050'}
              returnKeyType={'next'}
              keyboardType="email-address"
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
              onChangeText={value => setPassword(value)}
            />
          </InputContent>
          <InputContent>
            <Text style={styles.text2}>Confirmar Senha</Text>
            <TextInput
              placeholder="Insira a mesma Senha"
              placeholderTextColor={'#00000050'}
              style={styles.input}
              secureTextEntry={true}
              keyboardType="numeric"
              value={passwordConfirmation}
              onChangeText={value => setPasswordConfirmation(value)}
            />
          </InputContent>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Cadastrar</Text>
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
    top: '4%',
    width: 220,
    height: 220,
    position: 'absolute',
  },
  text: {
    fontSize: 24,
    color: '#024189eb',
    fontFamily: 'Poppins-SemiBold',
  },
  text2: {
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
    width: 100,
    fontSize: 19,
    color: '#fff',
    fontFamily: 'Poppins-Light',
  },
});
