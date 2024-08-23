// screens/MovieListScreen.js
import React, { useState } from 'react';
import { View, Text, FlatList, Button, TextInput, StyleSheet, TouchableOpacity } from 'react-native';

const MovieListScreen = () => {
  const [movies, setMovies] = useState([
    { number: 1501, title: 'Inception', genre: 'Sci-Fi', totalWatchers: 1200000 },
    { number: 1502, title: 'Interstellar', genre: 'Sci-Fi', totalWatchers: 1500000 },
    { number: 1503, title: 'The Dark Knight', genre: 'Action', totalWatchers: 2000000 },
    { number: 1504, title: 'The Matrix', genre: 'Sci-Fi', totalWatchers: 1800000 },
    { number: 1505, title: 'Gladiator', genre: 'Action', totalWatchers: 1300000 },
    { number: 1506, title: 'Titanic', genre: 'Romance', totalWatchers: 2500000 },
    { number: 1507, title: 'The Shawshank Redemption', genre: 'Drama', totalWatchers: 1900000 },
    { number: 1508, title: 'Forrest Gump', genre: 'Drama', totalWatchers: 1700000 },
    { number: 1509, title: 'Jurassic Park', genre: 'Adventure', totalWatchers: 2100000 },
    { number: 1510, title: 'The Lion King', genre: 'Animation', totalWatchers: 2300000 },
    { number: 1511, title: 'Pulp Fiction', genre: 'Crime', totalWatchers: 1600000 },
    { number: 1512, title: 'Fight Club', genre: 'Drama', totalWatchers: 1800000 },
    { number: 1513, title: 'The Godfather', genre: 'Crime', totalWatchers: 2200000 },
    { number: 1514, title: 'The Lord of the Rings: The Fellowship of the Ring', genre: 'Fantasy', totalWatchers: 2000000 },
    { number: 115, title: 'Star Wars: A New Hope', genre: 'Sci-Fi', totalWatchers: 2400000 },
    { number: 116, title: 'Avengers: Endgame', genre: 'Action', totalWatchers: 2700000 },
    { number: 117, title: 'Avatar', genre: 'Sci-Fi', totalWatchers: 2600000 },
    { number: 118, title: 'The Silence of the Lambs', genre: 'Thriller', totalWatchers: 1400000 },
    { number: 119, title: 'Schindler’s List', genre: 'Drama', totalWatchers: 1300000 },
    { number: 120, title: 'Saving Private Ryan', genre: 'War', totalWatchers: 1200000 },
  ]);

  const [query, setQuery] = useState('');
  const [sortBy, setSortBy] = useState('title');

  const filteredMovies = movies.filter((movie) =>
    movie.title.toLowerCase().includes(query.toLowerCase())
  );

  const sortMovies = () => {
    const sortedMovies = [...filteredMovies].sort((a, b) => {
      if (sortBy === 'title') {
        return a.title.localeCompare(b.title);
      } else if (sortBy === 'genre') {
        return a.genre.localeCompare(b.genre);
      } else if (sortBy === 'totalWatchers') {
        return b.totalWatchers - a.totalWatchers;
      }
    });
    setMovies(sortedMovies);
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Search Movies"
        value={query}
        onChangeText={setQuery}
        style={styles.searchInput}
      />
      <View style={styles.buttonContainer}>
        <Button title="Title" onPress={() => { setSortBy('title'); sortMovies(); }} />
        <Button title="Genre" onPress={() => { setSortBy('genre'); sortMovies(); }} />
        <Button title="Watchers" onPress={() => { setSortBy('totalWatchers'); sortMovies(); }} />
      </View>
      <FlatList
        data={filteredMovies}
        keyExtractor={(item) => item.number.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.card}>
            <View style={styles.cardContent}>
              <View style={styles.numberContainer}>
                <Text style={styles.numberText}>{item.number}</Text>
              </View>
              <View style={styles.movieDetails}>
                <Text style={styles.movieTitle}>{item.title}</Text>
                <Text style={styles.movieGenre}>Genre: {item.genre}</Text>
                <Text style={styles.movieWatchers}>Watchers: {item.totalWatchers.toLocaleString()}</Text>
              </View>
            </View>
          </TouchableOpacity>
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
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 10,
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
    flexDirection: 'row',
    alignItems: 'center',
  },
  cardContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  numberContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#f39c12',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
  },
  numberText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  movieDetails: {
    flex: 1,
  },
  movieTitle: {
    fontSize: 9,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  movieGenre: {
    fontSize: 8,
    color: '#666',
  },
  movieWatchers: {
    fontSize: 8,
    color: '#333',
    marginTop: 5,
  },
});

export default MovieListScreen;
