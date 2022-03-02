import 'react-native-gesture-handler';
import React, {useState} from 'react';
import {Container, LoginContainer, ButtonContainer} from './style';
import {
  View,
  Image,
  StyleSheet,
  Text,
  TextInput,
  Alert,
  Button,
} from 'react-native';

const login = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [text, setText] = useState('');
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
          placeholder="Insira Seu Email Cadastrado"
          onChangeText={newText => setText(newText)}
          defaultValue={text}
          placeholderTextColor={'#00000092'}
          returnKeyType={'next'}
        />
        <Text style={styles.text3}>Senha</Text>
        <TextInput
          placeholder="Insira sua Senha"
          placeholderTextColor={'#00000092'}
          style={styles.input}
          secureTextEntry={true}
          keyboardType="numeric"
        />
        <ButtonContainer>
          <Button
            title="Entrar"
            onPress={() => Alert.alert('fdsdsdsdsdsd')}
            color="#024189ed"
          />
        </ButtonContainer>
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
    fontSize: 25,
    color: '#000000',
    paddingTop: 30,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  text3: {
    paddingTop: 10,
    fontSize: 20,
    color: '#000',
  },
  input: {
    width: 200,
    height: 50,
    color: '#000',
    backgroundColor: '#fff',
    borderRadius: 6,
    marginTop: 12,
    textAlign: 'center',
  },
});
