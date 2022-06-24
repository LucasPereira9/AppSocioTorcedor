/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Animated, Image, StyleSheet, Text} from 'react-native';
import {
  ShelfContainer,
  CompetitionContainer,
  Container,
  DateContainer,
} from './styles';

const WorldCup = () => {
  return (
    <Container style={{bottom: '12%'}}>
      <CompetitionContainer>
        <Image
          style={[styles.trophy, {width: '25%', flex: 1, top: 0}]}
          source={require('../../../../assets/simboloWorldCup.png')}
        />
      </CompetitionContainer>
      <Animated.View style={styles.TrophiesContainer}>
        <Image
          style={styles.trophy}
          source={require('../../../../assets/worldcup.png')}
        />
        <Image
          style={styles.trophy}
          source={require('../../../../assets/worldcup.png')}
        />
        <Image
          style={styles.trophy}
          source={require('../../../../assets/worldcup.png')}
        />
      </Animated.View>
      <ShelfContainer>
        <DateContainer style={{width: '68%', bottom: 9}}>
          <Text style={styles.year}>2009</Text>
          <Text style={styles.year}>2011</Text>
          <Text style={styles.year}>2015</Text>
        </DateContainer>
        <Image
          style={styles.shelf}
          source={require('../../../../assets/3Dshelf.png')}
        />
      </ShelfContainer>
    </Container>
  );
};

export default WorldCup;

const styles = StyleSheet.create({
  lottieContainer: {
    minHeight: '40%',
    minWidth: '60%',
  },
  shelf: {
    width: '90%',
    zIndex: -1,
  },
  trophy: {
    width: 84,
    height: 170,
    margin: 20,
    top: 30,
  },
  year: {
    color: '#fff',
    fontSize: 12,
    fontFamily: 'Poppins-SemiBoldItalic',
  },
  TrophiesContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
