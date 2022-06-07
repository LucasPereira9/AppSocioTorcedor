import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React, {useState} from 'react';
import Login from './src/pages/login/login';
import Home from './src/pages/home/home';
import {Cadastrar} from './src/pages/cadastrar/cadastrar';

const Stack = createStackNavigator();

const Routes = () => {
  const user = useState(false);
  return (
    <NavigationContainer>
      <Stack.Navigator
        headerMode="none"
        initialRouteName={user ? 'Home' : 'Login'}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Cadastrar" component={Cadastrar} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
