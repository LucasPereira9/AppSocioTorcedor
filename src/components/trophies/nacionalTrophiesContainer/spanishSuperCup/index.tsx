/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {
  ShelfContainer,
  CompetitionContainer,
  Container,
  DateContainer,
} from './styles';

const SuperCupSpain = () => {
  return (
    <Container style={{bottom: '7%'}}>
      <CompetitionContainer>
        <Image
          style={[styles.Image, {width: '10%', height: 170}]}
          source={require('../../../../assets/simbolSuperCup.png')}
          resizeMode="contain"
        />
      </CompetitionContainer>
      <View style={styles.TrophiesContainer}>
        <Image
          style={[styles.Image, {top: '38%'}]}
          resizeMode="contain"
          source={require('../../../../assets/supercupSpain.png')}
        />
      </View>
      <ShelfContainer>
        <DateContainer>
          <Text style={styles.year}>13 Títulos da Supercopa</Text>
        </DateContainer>
        <Image
          style={styles.shelf}
          source={require('../../../../assets/3Dshelf.png')}
        />
      </ShelfContainer>
      <View style={{height: 237}} />
    </Container>
  );
};

export default SuperCupSpain;

const styles = StyleSheet.create({
  lottieContainer: {
    minHeight: '40%',
    minWidth: '60%',
  },
  shelf: {
    width: '90%',
    zIndex: -1,
  },
  Image: {
    flex: 1,
    minWidth: '100%',
    height: 250,
  },
  year: {
    color: '#fff',
    fontSize: 17,
    fontFamily: 'Poppins-SemiBoldItalic',
    height: 22,
    alignSelf: 'center',
  },
  TrophiesContainer: {
    alignItems: 'center',
    bottom: '6%',
    maxWidth: '100%',
  },
});
