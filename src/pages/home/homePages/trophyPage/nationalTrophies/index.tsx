import React, {useEffect, useState} from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {Container} from '../../../../register/styles';
import LottieView from 'lottie-react-native';
import SpanishChampionship from '../../../../../components/trophies/nacionalTrophiesContainer/spanishChampionship';
import KingCup from '../../../../../components/trophies/nacionalTrophiesContainer/kingCup';
import SuperCupSpain from '../../../../../components/trophies/nacionalTrophiesContainer/spanishSuperCup';
const NationalTrophy = () => {
  const [loading, setIsloading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsloading(false);
    }, 3100);
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
        <ScrollView showsVerticalScrollIndicator={false}>
          <SpanishChampionship />
          <KingCup />
          <SuperCupSpain />
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
