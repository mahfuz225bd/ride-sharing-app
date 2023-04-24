import React from 'react';
import { View } from 'react-native';
import { StatusBar } from 'expo-status-bar';

navigator.geolocation = require('react-native-geolocation-service');

import HomeScreen from './src/screens/HomeScreen';
import DestinationSearch from './src/screens/DestinationSearch';
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
    <DestinationSearch />
      <StatusBar style='dark' />
    </View>
  );
}

// <HomeScreen initLocation={initLocation} />
// <SearchResults origin={initLocation} destination={destination} />
// <DestinationSearch />

export default App;
