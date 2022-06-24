import React, {useEffect, useState} from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {Container} from '../../../../register/styles';
import LottieView from 'lottie-react-native';
import SpanishChampionship from '../../../../../components/trophies/nacionalTrophiesContainer/spanishChampionship';
const NationalTrophy = () => {
  const [loading, setIsloading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsloading(false);
    }, 1000);
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
        <ScrollView>
          <SpanishChampionship />
        </ScrollView>
      )}
    </Container>
  );
};

export default NationalTrophy;

const styles = StyleSheet.create({
  lottieContainer: {
    minHeight: '40%',
    minWidth: '60%',
    top: '30%',
  },
});
