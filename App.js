import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Login from './screens/Login';
import HomeScreen from './screens/HomeScreen';

const Stack = createNativeStackNavigator();

const headerStyle = {
  backgroundColor: 'yellow',
};

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          options={{
            title: 'Login',
            headerStyle: headerStyle,
          }}
          component={Login}
        />
        <Stack.Screen
          name="Home"
          options={{
            title: 'Home',
            headerStyle: headerStyle,
          }}
          component={HomeScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
