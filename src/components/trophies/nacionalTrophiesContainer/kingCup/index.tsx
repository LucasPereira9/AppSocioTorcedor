/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {
  ShelfContainer,
  CompetitionContainer,
  Container,
  DateContainer,
} from './styles';

const KingCup = () => {
  return (
    <Container style={{bottom: '14%'}}>
      <CompetitionContainer>
        <Image
          style={[styles.Image, {width: '10%', height: 180}]}
          source={require('../../../../assets/SimbolCopaDoRei.png')}
          resizeMode="contain"
        />
      </CompetitionContainer>
      <View style={styles.TrophiesContainer}>
        <Image
          style={[styles.Image, {top: '26%'}]}
          resizeMode="contain"
          source={require('../../../../assets/CopaDoRei.png')}
        />
      </View>
      <ShelfContainer>
        <DateContainer>
          <Text style={styles.year}>31 títulos da Copa</Text>
        </DateContainer>
        <Image
          style={styles.shelf}
          source={require('../../../../assets/3Dshelf.png')}
        />
      </ShelfContainer>
    </Container>
  );
};

export default KingCup;

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
