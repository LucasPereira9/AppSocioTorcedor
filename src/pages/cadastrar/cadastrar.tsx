/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react-hooks/rules-of-hooks */
import {useNavigation} from '@react-navigation/native';
import {StatusBar} from 'native-base';
import React, {useState} from 'react';
import {
  Image,
  Keyboard,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import {Container, InputContent, LoginContainer} from './styles';
import auth from '@react-native-firebase/auth';
import Modal from 'react-native-modal';
import ModalEmail from '../../components/modal/invalidEmail';
import ModalEmailInUse from '../../components/modal/emailAlreadyRegistered';
import ModalPassword from '../../components/modal/weakPassword';
import LottieView from 'lottie-react-native';

export const Cadastrar = () => {
  const [isLoading, setIsLoading] = useState(false);
  const navigation = useNavigation();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const isEmpty = email === '' || password === '' || name === '';

  const [isModalVisible, setModalVisible] = useState(false);
  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };
  const [isModalVisible2, setModalVisible2] = useState(false);
  const toggleModal2 = () => {
    setModalVisible2(!isModalVisible2);
  };
  const [isModalVisible3, setModalVisible3] = useState(false);
  const toggleModal3 = () => {
    setModalVisible3(!isModalVisible3);
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
          setModalVisible2(true);
          setIsLoading(false);
        }

        if (error.code === 'auth/invalid-email') {
          setModalVisible(true);
          setIsLoading(false);
        }
        if (error.code === 'auth/weak-password') {
          setModalVisible3(true);
          setIsLoading(false);
        }

        console.error(error);
      });
  }

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
                <LottieView
                  source={require('../../assets/animations/ballAnimation/Ball.json')}
                  autoPlay
                  loop
                  style={{minHeight: 64, top: -4}}
                />
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

        <Modal
          isVisible={isModalVisible3}
          onBackdropPress={() => setModalVisible3(false)}
          animationIn={'zoomInDown'}
          animationOut={'zoomOutUp'}
          animationInTiming={1000}
          animationOutTiming={800}
          backdropTransitionInTiming={1000}
          backdropTransitionOutTiming={1100}>
          <ModalPassword />
          <View style={styles.hideModalButton}>
            <Pressable style={{width: '100%'}} onPress={toggleModal3}>
              <Text
                style={{
                  fontFamily: 'PTSerif-Italic',
                  alignSelf: 'center',
                  color: '#fff',
                }}>
                OK
              </Text>
            </Pressable>
          </View>
        </Modal>

        <Modal
          isVisible={isModalVisible}
          onBackdropPress={() => setModalVisible(false)}
          animationIn={'zoomInDown'}
          animationOut={'zoomOutUp'}
          animationInTiming={1000}
          animationOutTiming={800}
          backdropTransitionInTiming={1000}
          backdropTransitionOutTiming={1100}>
          <ModalEmail />
          <View style={styles.hideModalButton}>
            <Pressable style={{width: '100%'}} onPress={toggleModal}>
              <Text
                style={{
                  fontFamily: 'PTSerif-Italic',
                  alignSelf: 'center',
                  color: '#fff',
                }}>
                OK
              </Text>
            </Pressable>
          </View>
        </Modal>

        <Modal
          isVisible={isModalVisible2}
          onBackdropPress={() => setModalVisible2(false)}
          animationIn={'zoomInDown'}
          animationOut={'zoomOutUp'}
          animationInTiming={1000}
          animationOutTiming={800}
          backdropTransitionInTiming={1000}
          backdropTransitionOutTiming={1100}>
          <ModalEmailInUse />
          <View style={styles.hideModalButton}>
            <Pressable style={{width: '100%'}} onPress={toggleModal2}>
              <Text
                style={{
                  fontFamily: 'PTSerif-Italic',
                  alignSelf: 'center',
                  color: '#fff',
                }}>
                OK
              </Text>
            </Pressable>
          </View>
        </Modal>
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
  hideModalButton: {
    width: '40%',
    height: 50,
    borderRadius: 10,
    backgroundColor: '#e02107dd',
    justifyContent: 'center',
    alignSelf: 'center',
    top: 300,
  },
});
