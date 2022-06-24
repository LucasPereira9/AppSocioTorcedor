import React, {useState} from 'react';
import {
  DetailContainer,
  Icon,
  Content,
  NextGame,
  TextContent,
  Container,
} from './styles';
import Caretdown from 'react-native-vector-icons/Feather';
import {
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  View,
  Alert,
  Animated,
} from 'react-native';
import Background from '../Background/Background';
import Tabs from '../Tabs/Tabs';
import {PanGestureHandler, State} from 'react-native-gesture-handler';

const Details = () => {
  const [isOpenEye, setIsOpenEye] = useState(true);

  let offset = 0;
  const translateY = new Animated.Value(0);

  const animatedEvent = Animated.event(
    [
      {
        nativeEvent: {
          translationY: translateY,
        },
      },
    ],
    {useNativeDriver: true},
  );

  function onHandlerStateChanged(event) {
    if (event.nativeEvent.oldState === State.ACTIVE) {
      let opened = false;
      const {translationY} = event.nativeEvent;

      offset += translationY;

      if (translationY >= 50) {
        opened = true;
      } else {
        translateY.setValue(offset);
        translateY.setOffset(0);
        offset = 0;
      }

      Animated.timing(translateY, {
        toValue: opened ? 380 : 0,
        duration: 200,
        useNativeDriver: true,
      }).start(() => {
        offset = opened ? 380 : 0;
        translateY.setOffset(offset);
        translateY.setValue(0);
      });
    }
  }

  return (
    <Container>
      <Background translateY={translateY} />
      <PanGestureHandler
        onGestureEvent={animatedEvent}
        onHandlerStateChange={onHandlerStateChanged}>
        <Animated.View
          style={{
            transform: [
              {
                translateY: translateY.interpolate({
                  inputRange: [-290, 0, 360],
                  outputRange: [-20, 0, 360],
                  extrapolate: 'clamp',
                }),
              },
            ],
            // opacity: pan.y.interpolate({
            //   inputRange: [0, 150],
            //   outputRange: [0, 1],
            // }),
          }}>
          <Caretdown
            // eslint-disable-next-line react-native/no-inline-styles
            style={{position: 'relative', left: '45%'}}
            name="chevrons-down"
            size={35}
            color="#FFF"
          />
          <DetailContainer>
            <Icon>
              <Caretdown name="credit-card" size={24} color="#ffffffdf" />
              <Caretdown
                name={isOpenEye ? 'eye-off' : 'eye'}
                size={38}
                color="#ffffffd6"
                onPress={() => {
                  setIsOpenEye(!isOpenEye);
                }}
              />
            </Icon>
            <Text style={styles.text}>Saldo Disponivel</Text>
            <Text style={styles.value}>
              R$
              {isOpenEye ? (
                '0,00'
              ) : (
                <View
                  // eslint-disable-next-line react-native/no-inline-styles
                  style={{
                    backgroundColor: '#302d2d6e',
                    borderRadius: 15,
                    height: 32,
                    width: 100,
                  }}
                />
              )}
            </Text>
            <Content>
              <TextContent>
                <Text style={styles.text2}>Proximo Jogo:</Text>
                <Text style={styles.text2}>22/03 ás 14:00</Text>
              </TextContent>

              <NextGame>
                <Image
                  style={styles.image}
                  source={require('../../assets/reservabarça.jpg')}
                />
                <Caretdown
                  style={styles.versus}
                  name="x"
                  size={28}
                  color="#ffffffd6"
                />
                <Image
                  style={styles.image2}
                  source={require('../../assets/RealMadri.jpg')}
                />
              </NextGame>
              <TouchableOpacity
                style={styles.BuyButton}
                onPress={() =>
                  Alert.alert('Perdão torcedor! Botão em manutenção...')
                }>
                <Text style={styles.BuyButtonText}>Comprar Ingresso</Text>
              </TouchableOpacity>
            </Content>
          </DetailContainer>
        </Animated.View>
      </PanGestureHandler>

      <Tabs translateY={translateY} />
    </Container>
  );
};

export default Details;

const styles = StyleSheet.create({
  text: {
    fontSize: 17,
    paddingLeft: 10,
    color: '#c5c3c3',
    fontFamily: 'Poppins-Light',
  },
  value: {
    fontSize: 46,
    color: '#FFF',
    paddingLeft: 10,
    fontFamily: 'Poppins-bold',
  },
  text2: {
    color: '#c5c3c3',
    fontSize: 16,
    marginLeft: 10,
    marginTop: 10,
    fontFamily: 'Poppins-Light',
  },
  image: {
    width: 60,
    height: 60,
    marginLeft: 20,
    marginTop: 6,
    borderRadius: 10,
  },
  image2: {
    width: 60,
    height: 60,
    marginLeft: 20,
    borderRadius: 10,
  },
  versus: {
    marginLeft: 20,
  },
  BuyButton: {
    width: '46%',
    height: 45,
    backgroundColor: '#024189f8',
    marginTop: 25,
    left: '50%',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
  },
  BuyButtonText: {
    color: '#fff',
    fontSize: 15,
    fontFamily: 'Poppins-Light',
  },
});
