// In App.js in a new project

import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
// import SignUp from '../Screens/SignUp';
// import Login from '../Screens/Login';
import Home from '../Screens/Home';
import Register from '../Screens/Register';
import SignUp from '../Screens/SignUp';
import Login from '../Screens/Login';
import BookData from '../Screens/BookData';
import Available from '../Screens/Available';
import BookVehicle from '../Screens/BookVehicle';

const Stack = createNativeStackNavigator();

function AppNavigate() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={{
            headerShown: false,
          }}
          name="Login"
          component={Login}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="SignUp"
          component={SignUp}
        />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="Available" component={Available} />
        <Stack.Screen name="BookVehicle" component={BookVehicle} />
        <Stack.Screen name="BookData" component={BookData} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigate;
