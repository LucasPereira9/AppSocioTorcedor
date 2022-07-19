/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import internationalTrophies from './internationalTrophies/index';
import nationalTrophies from './nationalTrophies';
import Globe from 'react-native-vector-icons/FontAwesome';
import {View} from 'react-native';

const Tab = createBottomTabNavigator();

export default function TabRoutes() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {minHeight: '9%', alignItems: 'center'},
      }}>
      <Tab.Screen
        options={{
          tabBarLabelStyle: {fontSize: 15},
          tabBarIcon: ({focused}) => (
            <View
              style={{
                backgroundColor: focused ? '#9b989852' : '#fff',
                minWidth: '100%',
                minHeight: '156%',
                top: 14,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Globe
                name="globe"
                size={36}
                style={{
                  color: focused ? '#024189' : '#000000',
                  bottom: 11,
                }}
              />
            </View>
          ),
        }}
        name="Troféus Internacionais"
        component={internationalTrophies}
      />
      <Tab.Screen
        options={{
          tabBarLabelStyle: {fontSize: 15},
          tabBarIcon: ({focused}) => (
            <View
              style={{
                backgroundColor: focused ? '#9b989852' : '#fff',
                minWidth: '100%',
                minHeight: '156%',
                top: 14,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Globe
                name="flag"
                size={30}
                style={{color: focused ? '#024189' : '#000000', bottom: 11}}
              />
            </View>
          ),
        }}
        name="Troféus Nacionais"
        component={nationalTrophies}
      />
    </Tab.Navigator>
  );
}
