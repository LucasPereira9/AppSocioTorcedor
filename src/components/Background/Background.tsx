import React from 'react';
import {QRcodeView, Container, ViewItem} from './Styles';
import QRCode from 'react-native-qrcode-svg';
import {StyleSheet, Text, View} from 'react-native';
import Caretdown from 'react-native-vector-icons/AntDesign';

const Background = () => {
  return (
    <Container>
      <QRcodeView>
        <QRCode value={'https://google.com'} size={70} color={'#ff0000'} />
      </QRcodeView>
      <View>
        <ViewItem>
          <Caretdown name="caretdown" size={15} color="#FFF" />
          <Text style={styles.text}>EXEMPLO 1</Text>
        </ViewItem>

        <ViewItem>
          <Caretdown name="user" size={15} color="#FFF" />
          <Text style={styles.text}>EXEMPLO 2</Text>
        </ViewItem>
        <ViewItem>
          <Caretdown name="caretdown" size={15} color="#FFF" />
          <Text style={styles.text}>EXEMPLO 3</Text>
        </ViewItem>
        <ViewItem>
          <Caretdown name="caretdown" size={15} color="#FFF" />
          <Text style={styles.text}>EXEMPLO 4</Text>
        </ViewItem>
      </View>
    </Container>
  );
};

export default Background;

const styles = StyleSheet.create({
  text: {
    marginTop: 20,
    color: '#fff',
    borderTopColor: '#FFF',
  },
});
