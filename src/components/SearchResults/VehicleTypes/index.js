import React from "react";
import { View, Text, Pressable } from "react-native";

import styles from './styles.js';
import VehicleTypeRow from '../VehicleTypeRow'

import typesData from '../../../assets/data/types.js';

const VehicleTypes = () => {
  const confirm = () => {
    console.warn('confirm');
  };

  return (
    <View>
      {typesData.map((each) => (
        <VehicleTypeRow key={each.id} type={each.type} price={each.price} hasPromo={each.hasPromo} />
      ))}

      <Pressable onPress={confirm} style={{
        backgroundColor: 'black',
        padding: 10,
        margin: 10,
        alignItems: 'center',
      }}>
        <Text style={{ color: 'white', fontWeight: 'bold' }}>
          Confirm {'{Type A|B|C}'}
        </Text>
      </Pressable>
    </View>
  );
};

export default VehicleTypes;
