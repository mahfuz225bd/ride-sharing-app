import React from 'react';
import { StatusBar } from 'expo-status-bar';

import HomeScreen from './src/screens/HomeScreen';

const initLocation = {
  latitude: 23.7276,
  longitude: 90.4106,
};

const App = () => {
  return (
    <React.Fragment>
      <HomeScreen initLocation={initLocation} />
      <StatusBar style="dark" />
    </React.Fragment>
  );
}

export default App;
