import React from 'react';
import {Container} from './style';
import {View, Image, StyleSheet} from 'react-native';

const login = () => {
  return (
    <Container>
      <View>
        <Image
          style={styles.img}
          source={require('../../assets/Camp-Nou.jpg')}
        />
      </View>
    </Container>
  );
};
export default login;

const styles = StyleSheet.create({
  img: {
    flex: 1,
    position: 'relative',
    left: 25,
  },
});
