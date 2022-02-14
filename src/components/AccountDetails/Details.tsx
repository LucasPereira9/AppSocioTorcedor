import React, {useState} from 'react';
import {Container} from '../../pages/style';
import {
  DetailContainer,
  Icon,
  Content,
  NextGame,
  ButtonContainer,
  TextContent,
} from './styles';
import Caretdown from 'react-native-vector-icons/Feather';
import {Text, StyleSheet, Image, Button, View, Alert} from 'react-native';

const Details = () => {
  const [isOpenEye, setIsOpenEye] = useState(true);
  return (
    <Container>
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
            '12.234,00'
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
    </Container>
  );
};
export default Details;

const styles = StyleSheet.create({
  text: {
    fontSize: 16,
    paddingTop: 25,
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
