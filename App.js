import React from 'react';
import { View } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import HomeScreen from './src/screens/HomeScreen';
import SearchResults from './src/screens/SearchResults';

const initLocation = {
  latitude: 23.7276,
  longitude: 90.4106,
};

const destination = {
  latitude: 23.7591,
  longitude: 90.3996,
};

const App = () => {
  return (
    <View>
      <HomeScreen initLocation={initLocation} />
      <StatusBar style='dark' />
    </View>
  );
}

// <SearchResults origin={initLocation} destination={destination} />

export default App;
