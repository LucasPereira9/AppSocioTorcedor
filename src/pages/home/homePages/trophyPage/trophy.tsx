import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import TabRoutes from './routes';

export default function TabsTrophy() {
  return (
    <NavigationContainer independent={true}>
      <TabRoutes />
    </NavigationContainer>
  );
}
