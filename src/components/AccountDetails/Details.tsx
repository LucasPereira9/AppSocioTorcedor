import React, {useState} from 'react';
import {
  DetailContainer,
  Icon,
  Content,
  NextGame,
  ButtonContainer,
  TextContent,
  Container,
} from './styles';
import Caretdown from 'react-native-vector-icons/Feather';
import {
  Text,
  StyleSheet,
  Image,
  Button,
  View,
  Alert,
  Animated,
  PanResponder,
} from 'react-native';
import Background from '../Background/Background';
import Tabs from '../Tabs/Tabs';

const Details = () => {
  const [isOpenEye, setIsOpenEye] = useState(true);

  const pan = useState(new Animated.ValueXY())[0];

  const panResponder = useState(
    PanResponder.create({
      onMoveShouldSetPanResponder: () => true,
      onPanResponderGrant: () => {
        pan.setOffset({
          x: pan.x._value,
          y: pan.y._value,
        });
      },
      onPanResponderMove: Animated.event([null, {dy: pan.y}]),
      onPanResponderRelease: () => {
        pan.flattenOffset();
      },
    }),
  )[0];
  return (
    <Container>
      <Background translateY={pan.y} />
      <Animated.View
        style={{
          transform: [
            {
              translateY: pan.y.interpolate({
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
        }}
        {...panResponder.panHandlers}>
        <Caretdown
          // eslint-disable-next-line react-native/no-inline-styles
          style={{position: 'relative', left: 170}}
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
                if (isOpenEye) {
                  setIsOpenEye(false);
                } else {
                  setIsOpenEye(true);
                }
              }}
            />
          </Icon>
          <Text style={styles.text}>Saldo Disponivel</Text>
          <Text style={styles.value}>
            R$
            {isOpenEye ? (
              '1.387,15'
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
            <ButtonContainer>
              <Button
                title="COMPRAR INGRESSO"
                onPress={() =>
                  Alert.alert('Perdão torcedor! Botão em manutenção...')
                }
                color="#024189ed"
              />
            </ButtonContainer>
          </Content>
        </DetailContainer>
      </Animated.View>
      <Tabs translateY={pan.y} />
    </Container>
  );
};

export default Details;

const styles = StyleSheet.create({
  text: {
    fontSize: 16,
    paddingLeft: 10,
    color: '#c5c3c3',
  },
  value: {
    fontSize: 40,
    color: '#FFF',
    paddingLeft: 10,
  },
  text2: {
    color: '#c5c3c3',
    fontSize: 18,
    marginLeft: 10,
    marginTop: 10,
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
});
