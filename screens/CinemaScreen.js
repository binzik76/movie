// screens/SearchScreen.js
import React, { useState } from 'react';
import { View, TextInput, FlatList, Text, StyleSheet } from 'react-native';

const SearchScreen = () => {
  const [query, setQuery] = useState('');
  const [cinemas] = useState([
    { id: '1', name: 'Cineworld', location: 'London', totalScreens: 12 },
    { id: '2', name: 'AMC Theatres', location: 'New York', totalScreens: 15 },
    { id: '3', name: 'Regal Cinemas', location: 'Los Angeles', totalScreens: 10 },
    { id: '4', name: 'Vue Cinemas', location: 'Manchester', totalScreens: 8 },
    { id: '5', name: 'Cinepolis', location: 'San Francisco', totalScreens: 20 },
    { id: '6', name: 'Cinemark', location: 'Dallas', totalScreens: 18 },
    { id: '7', name: 'Odeon', location: 'Birmingham', totalScreens: 14 },
    { id: '8', name: 'Cineplex', location: 'Toronto', totalScreens: 22 },
    { id: '9', name: 'Pathé', location: 'Paris', totalScreens: 16 },
    { id: '10', name: 'Event Cinemas', location: 'Sydney', totalScreens: 12 },
  ]);

  const filteredCinemas = cinemas.filter((cinema) =>
    cinema.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Search Cinemas"
        value={query}
        onChangeText={setQuery}
        style={styles.searchInput}
      />
      <FlatList
        data={filteredCinemas}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.cinemaName}>{item.name}</Text>
            <Text style={styles.cinemaLocation}>Location: {item.location}</Text>
            <Text style={styles.cinemaScreens}>Screens: {item.totalScreens}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  searchInput: {
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    marginBottom: 10,
    padding: 8,
    fontSize: 16,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
    marginVertical: 5,
    padding: 15,
  },
  cinemaName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  cinemaLocation: {
    fontSize: 14,
    color: '#666',
  },
  cinemaScreens: {
    fontSize: 14,
    color: '#333',
    marginTop: 5,
  },
});

export default SearchScreen;
