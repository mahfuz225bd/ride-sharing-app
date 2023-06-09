import PropTypes from "prop-types"
import React from 'react';
import { View, Dimensions } from 'react-native';

import RouteMap from "../../components/SearchResults/RouteMap";
import VehicleTypes from "../../components/SearchResults/VehicleTypes";

const SearchResults = ({ origin, destination }) => {

  return (
    <View style={{ display: 'flex', justifyContent: 'space-between' }}>
      <View style={{ height: Dimensions.get('window').height - 355 }}>
        <RouteMap origin={origin} destination={destination} />
      </View>

      <View>
        <VehicleTypes />
      </View>
    </View>
  );
};

SearchResults.propTypes = {
  destination: PropTypes.shape({
    longitude: PropTypes.number.isRequired,
    latitude: PropTypes.number.isRequired
  }).isRequired,
  origin: PropTypes.shape({
    longitude: PropTypes.number.isRequired,
    latitude: PropTypes.number.isRequired
  }).isRequired
}

export default SearchResults;
