/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { StatusBar } from 'react-native';

import HomeScreen from './src/screens/HomeScreen';
import SearchResults from './src/screens/SearchResults';
import DestinationSearch from './src/screens/DestinationSearch';

const initLocation = {
  latitude: 23.7276,
  longitude: 90.4106,
};

const destination = {
  latitude: 23.7591,
  longitude: 90.3996,
};

const App: () => React$Node = () => {
  return (
    <React.Fragment>
      <DestinationSearch />
      <StatusBar barStyle="dark-content" />
    </React.Fragment>
  );
};

// <HomeScreen initLocation={initLocation} />
// <SearchResults origin={initLocation} destination={destination} />

export default App;
