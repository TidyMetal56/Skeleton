import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import screen from '../utils/screenNames';
import Home from '../screens/Home';
import Perfil from '../Screens/Perfil'


const Stack = createNativeStackNavigator();

const AppStack = () => {
  return (
    <Stack.Navigator 
      initialRouteName={screen.home}
      screenOptions={{headerShown: false}}
    >
        <Stack.Screen 
            name={screen.home} 
            component={Home} 
        />

        <Stack.Screen 
            name={screen.perfil} 
            component={Perfil} 
        />

    </Stack.Navigator>
  )
}

export default AppStack