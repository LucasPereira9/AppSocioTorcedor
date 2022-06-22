import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Container} from '../../../../cadastrar/styles';
import LottieView from 'lottie-react-native';

const Trophy = () => {
  const [loading, setIsloading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsloading(false);
    }, 4200);
  }, []);
  return (
    <Container>
      {loading ? (
        <View style={styles.lottieContainer}>
          <LottieView
            source={require('../../../../../assets/animations/trophyAnimation/trophy.json')}
            autoPlay
            loop
          />
        </View>
      ) : (
        <Text style={{color: '#fff'}}>nacional!</Text>
      )}
    </Container>
  );
};

export default Trophy;

const styles = StyleSheet.create({
  lottieContainer: {
    minHeight: '40%',
    minWidth: '60%',
    top: '30%',
  },
});
