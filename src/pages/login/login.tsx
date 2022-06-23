/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react-hooks/rules-of-hooks */
import 'react-native-gesture-handler';
import React, {useState} from 'react';
import {
  Container,
  LoginContainer,
  InputContent,
  ContainerBottom,
} from './style';
import {
  View,
  Image,
  StyleSheet,
  Text,
  TextInput,
  Keyboard,
  Pressable,
  ActivityIndicator,
} from 'react-native';
import {
  TouchableOpacity,
  TouchableWithoutFeedback,
} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';
import auth from '@react-native-firebase/auth';
import Modal from 'react-native-modal';
import ModalContent from '../../components/modal/invalidCredentials';
import ModalInvalidEmail from '../../components/modal/invalidEmail';
import ModalNewPassword from '../../components/modal/resetPassword';
import ModalUser from '../../components/modal/userNotFound';
import LottieView from 'lottie-react-native';

const login = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const [isModalVisible, setModalVisible] = useState(false);
  const [isModalVisible2, setModalVisible2] = useState(false);
  const [isModalVisible3, setModalVisible3] = useState(false);
  const [isModalVisible4, setModalVisible4] = useState(false);

  const isEmpty = email === '' || password === '';

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };
  const toggleModal2 = () => {
    setModalVisible2(!isModalVisible2);
  };
  const toggleModal3 = () => {
    setModalVisible3(!isModalVisible3);
  };
  const toggleModal4 = () => {
    setModalVisible4(!isModalVisible4);
  };

  function Logar() {
    setIsLoading(true);
    auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        navigation.navigate('Home');
        setEmail('');
        setPassword('');
        setIsLoading(false);
      })
      .catch(error => {
        if (error.code === 'auth/invalid-email' || 'auth/wrong-password') {
          setIsLoading(false);
          setModalVisible(true);
        }

        console.error(error);
      });
  }

  function handleForgotPassword() {
    if (email === '') {
      setModalVisible3(true);
    } else {
      auth()
        .sendPasswordResetEmail(email)
        .then(() => {
          setModalVisible2(true);
        })
        .catch(error => {
          if (error.code === 'auth/invalid-email') {
            setModalVisible3(true);
          }
          if (error.code === 'auth/user-not-found') {
            setModalVisible4(true);
          }

          console.error(error);
        });
    }
  }

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
          {isEmpty ? (
            <View style={styles.empty}>
              <Text style={styles.buttonText}>Entrar</Text>
            </View>
          ) : (
            <TouchableOpacity style={styles.button} onPress={Logar}>
              {isLoading ? (
                <ActivityIndicator size="large" color="#ffffff" />
              ) : (
                <Text style={styles.buttonText}>Entrar</Text>
              )}
            </TouchableOpacity>
          )}
          <ContainerBottom>
            <TouchableOpacity
              style={[styles.accountCreate, {width: '120%'}]}
              onPress={handleForgotPassword}>
              <Text style={styles.acoountCreateText}>Esqueci a Senha</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.accountCreate}
              onPress={() => {
                navigation.navigate('Cadastrar');
                setEmail('');
                setPassword('');
              }}>
              <Text style={styles.acoountCreateText}>Criar Conta</Text>
            </TouchableOpacity>
          </ContainerBottom>
        </LoginContainer>
      </TouchableWithoutFeedback>

      <Modal
        isVisible={isModalVisible}
        onBackdropPress={() => setModalVisible(false)}
        animationIn={'zoomInDown'}
        animationOut={'zoomOutUp'}
        animationInTiming={1000}
        animationOutTiming={800}
        backdropTransitionInTiming={1000}
        backdropTransitionOutTiming={1100}>
        <ModalContent />
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
        <ModalNewPassword />
        <View style={[styles.hideModalButton, {backgroundColor: '#024189dd'}]}>
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

      <Modal
        isVisible={isModalVisible3}
        onBackdropPress={() => setModalVisible3(false)}
        animationIn={'zoomInDown'}
        animationOut={'zoomOutUp'}
        animationInTiming={1000}
        animationOutTiming={800}
        backdropTransitionInTiming={1000}
        backdropTransitionOutTiming={1100}>
        <ModalInvalidEmail />
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
        isVisible={isModalVisible4}
        onBackdropPress={() => setModalVisible4(false)}
        animationIn={'zoomInDown'}
        animationOut={'zoomOutUp'}
        animationInTiming={1000}
        animationOutTiming={800}
        backdropTransitionInTiming={1000}
        backdropTransitionOutTiming={1100}>
        <ModalUser />
        <View style={styles.hideModalButton}>
          <Pressable style={{width: '100%'}} onPress={toggleModal4}>
            <Text
              style={{
                fontFamily: 'Poppins-SemiBold',
                alignSelf: 'center',
                color: '#fff',
              }}>
              OK
            </Text>
          </Pressable>
        </View>
      </Modal>
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
    top: '13%',
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
    marginLeft: 36,
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
