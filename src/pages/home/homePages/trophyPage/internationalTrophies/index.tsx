/* eslint-disable react-native/no-inline-styles */
import React, {useEffect, useState} from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {Container} from '../../../../register/styles';
import LottieView from 'lottie-react-native';
import ChampionsLeague from '../../../../../components/trophies/internacionalTrophiesContainer/championsLeague';
import SuperCup from '../../../../../components/trophies/internacionalTrophiesContainer/UEFAsuperCup';

const InternationalTrophy = () => {
  const [loading, setIsloading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsloading(false);
    }, 4200);
  }, []);
  return (
    <Container style={{justifyContent: 'center'}}>
      {loading ? (
        <View style={styles.lottieContainer}>
          <LottieView
            source={require('../../../../../assets/animations/trophyAnimation/trophy.json')}
            autoPlay
            loop
          />
        </View>
      ) : (
        <ScrollView showsVerticalScrollIndicator={false}>
          <ChampionsLeague />
          <SuperCup />
        </ScrollView>
      )}
    </Container>
  );
};

export default InternationalTrophy;

const styles = StyleSheet.create({
  lottieContainer: {
    minHeight: '40%',
    minWidth: '60%',
  },
  shelf: {
    width: '90%',
    top: '50%',
    zIndex: -1,
  },
  trophy: {
    top: 42,
    width: 84,
    height: 150,
    margin: 25,
  },
});
