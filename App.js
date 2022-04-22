
import * as React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/Home'
import Result from './src/Result'


const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
        name="Home" 
        component={Home} 
        options={
          {
            title: 'Consumo de Veículos',
          }
        }
        />

      <Stack.Screen 
        name="Result" 
        component={Result}
        options={
          {
            title: 'Consumo de Veículos',
          }
        }
      />

      </Stack.Navigator>
    </NavigationContainer>

    
  );
}

export default App;



