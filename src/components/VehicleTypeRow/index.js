import PropTypes from "prop-types"
import React from "react";
import { View, Image, Text } from "react-native";
import { decode } from "html-entities";
import Ionicons from "react-native-vector-icons/Ionicons";

import styles from './styles.js';

const VehicleTypeRow = ({ type, price, hasPromo }) => {
  const getImage = () => {
    if (type === 'Type A') {
      return require('../../assets/images/TypeA.png');
    }
    if (type === 'Type B') {
      return require('../../assets/images/TypeB.png');
    }
    return require('../../assets/images/TypeC.png');
  }

  return (
    <View style={styles.container}>

      {/*  Image */}
      <Image
        style={styles.image}
        source={getImage()}
      />

      <View style={styles.middleContainer}>
        <Text style={styles.type}>
          {type}{' '}
          {/* <Ionicons name={'person'} size={16} /> 1 */}
        </Text>
        {/* <Text style={styles.time}>
          8:03PM drop off
        </Text> */}
      </View>
      <View style={styles.rightContainer}>
        {hasPromo && <Ionicons name={'pricetag'} size={18} color={'#42d742'} />}
        <Text style={styles.price}>est. {decode('&#2547') + ' ' + price}</Text>
      </View>
    </View>
  );
};

VehicleTypeRow.propTypes = {
  hasPromo: PropTypes.bool.isRequired,
  price: PropTypes.number.isRequired,
  type: PropTypes.string.isRequired
}

VehicleTypeRow.defaultProps = {
  hasPromo: false
}

export default VehicleTypeRow;
