/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Animated, Image, StyleSheet, Text} from 'react-native';
import {
  ShelfContainer,
  CompetitionContainer,
  Container,
  DateContainer,
} from './styles';

const SpanishChampionship = () => {
  return (
    <Container>
      <CompetitionContainer>
        <Image
          style={[styles.Image, {width: '60%'}]}
          source={require('../../../../assets/SimbolLaliga.png')}
        />
      </CompetitionContainer>
      <Animated.View style={styles.TrophiesContainer}>
        <Image
          style={[styles.Image, {top: '10%'}]}
          resizeMode="contain"
          source={require('../../../../assets/LaLiga.png')}
        />
      </Animated.View>
      <ShelfContainer>
        <DateContainer>
          <Text style={styles.year}>26 títulos espanhóis</Text>
        </DateContainer>
        <Image
          style={styles.shelf}
          source={require('../../../../assets/3Dshelf.png')}
        />
      </ShelfContainer>
    </Container>
  );
};

export default SpanishChampionship;

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
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
