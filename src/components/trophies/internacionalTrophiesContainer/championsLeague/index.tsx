/* eslint-disable react-native/no-inline-styles */
import React, {useEffect, useState} from 'react';
import {Animated, Image, StyleSheet, Text} from 'react-native';
import {
  ShelfContainer,
  CompetitionContainer,
  Container,
  DateContainer,
} from './styles';

const ChampionsLeague = () => {
  const [loading, setIsloading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsloading(false);
    }, 100);
  }, []);
  return (
    <Container>
      <CompetitionContainer>
        <Image
          style={[styles.trophy, {width: '40%'}]}
          source={require('../../../../assets/simboloChampions.png')}
        />
      </CompetitionContainer>
      <Animated.View style={styles.TrophiesContainer}>
        <Image
          style={styles.trophy}
          source={require('../../../../assets/ChampionsLeague.png')}
        />
        <Image
          style={styles.trophy}
          source={require('../../../../assets/ChampionsLeague.png')}
        />
        <Image
          style={styles.trophy}
          source={require('../../../../assets/ChampionsLeague.png')}
        />
      </Animated.View>
      <ShelfContainer>
        <DateContainer style={{width: '82%', bottom: 9}}>
          <Text style={styles.year}>1991-1992</Text>
          <Text style={styles.year}>2005-2006</Text>
          <Text style={styles.year}>2008-2009</Text>
        </DateContainer>
        <Image
          style={styles.shelf}
          source={require('../../../../assets/3Dshelf.png')}
        />
      </ShelfContainer>
      <Animated.View style={styles.TrophiesContainer}>
        <Image
          style={[styles.trophy, {left: 50}]}
          source={require('../../../../assets/ChampionsLeague.png')}
        />
        <Image
          style={[styles.trophy, {right: 50}]}
          source={require('../../../../assets/ChampionsLeague.png')}
        />
      </Animated.View>
      <ShelfContainer>
        <DateContainer>
          <Text style={styles.year}>2010-2011</Text>
          <Text style={styles.year}>2014-2015</Text>
        </DateContainer>
        <Image
          style={styles.shelf}
          source={require('../../../../assets/3Dshelf.png')}
        />
      </ShelfContainer>
    </Container>
  );
};

export default ChampionsLeague;

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
    height: 150,
    margin: 20,
    top: 38,
  },
  year: {
    color: '#fff',
    fontSize: 12,
  },
  TrophiesContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
