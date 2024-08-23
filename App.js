import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from './screens/HomeScreen';
import MovieScreen from './screens/MovieScreen';
import ProfileScreen from './screens/ProfileScreen';
import LoginScreen from './screens/LoginScreen';
 
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';  
import { confirmLogout } from './utils/logout'; // Adjust the path as needed

const Drawer = createDrawerNavigator();


function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Login">
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="Movies" component={MovieScreen} />
        <Drawer.Screen name="Profile" component={ProfileScreen} /> 
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
 
export default App;
