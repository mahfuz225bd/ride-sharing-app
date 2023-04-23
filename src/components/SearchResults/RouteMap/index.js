import PropTypes from "prop-types"
import React from "react";
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';

const GOOGLE_MAPS_API_KEY = 'AIzaSyB1KoK7KQe0YzwScTNjC7lHRSi7my056bk';

const RouteMap = ({ origin, destination }) => {
  return (
    <MapView
      style={{ width: '100%', height: '100%' }}
      provider={PROVIDER_GOOGLE}
      initialRegion={{
        ...origin,
        latitudeDelta: 0.0222,
        longitudeDelta: 0.0121,
      }}>
      <MapViewDirections
        origin={origin}
        destination={destination}
        apikey={GOOGLE_MAPS_API_KEY}
        strokeWidth={5}
        strokeColor="black"
      />
      <Marker
        coordinate={origin}
        title={'Origin'}
      />
      <Marker
        coordinate={destination}
        title={"Destination"}
      />
    </MapView>
  );
};

RouteMap.propTypes = {
  destination: PropTypes.shape({
    longitude: PropTypes.number.isRequired,
    latitude: PropTypes.number.isRequired
  }).isRequired,
  origin: PropTypes.shape({
    longitude: PropTypes.number.isRequired,
    latitude: PropTypes.number.isRequired
  }).isRequired
}

export default RouteMap;
