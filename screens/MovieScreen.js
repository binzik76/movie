// screens/MovieScreen.js
import * as React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import MovieListScreen from './MovieListScreen';
import CinemaScreen from './CinemaScreen';

const Tab = createMaterialTopTabNavigator();

function MovieScreen() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Movie" component={MovieListScreen} />
      <Tab.Screen name="Cimena" component={CinemaScreen} />
    </Tab.Navigator>
  );
}

export default MovieScreen;
