import PropTypes from "prop-types"
import React from "react";
import { Image } from "react-native";
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';


const HomeMap = ({ cars, initLocation }) => {
  const getImage = (type) => {
    if (type === 'Type A') {
      return require('../../assets/images/top-TypeA.png');
    }
    if (type === 'Type B') {
      return require('../../assets/images/top-TypeB.png');
    }
    return require('../../assets/images/top-TypeC.png');
  };

  return (
    <MapView
      style={{ width: '100%', height: '100%' }}
      provider={PROVIDER_GOOGLE}
      initialRegion={{
        ...initLocation,
        latitudeDelta: 0.0222,
        longitudeDelta: 0.0121,
      }}>
      {cars.map((car) => (
        <Marker
          key={car.id}
          coordinate={{ latitude: car.latitude, longitude: car.longitude }}
        >
          <Image
            style={{ width: 30, height: 30, resizeMode: 'contain' }}
            source={getImage(car.type)}
          />
        </Marker>
      ))}
    </MapView>
  );
};

HomeMap.propTypes = {
  cars: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      type: PropTypes.string.isRequired,
      latitude: PropTypes.number.isRequired,
      longitude: PropTypes.number.isRequired
    })
  ),
  initLocation: PropTypes.shape({
    longitude: PropTypes.number.isRequired,
    latitude: PropTypes.number.isRequired
  }).isRequired
}

export default HomeMap;
