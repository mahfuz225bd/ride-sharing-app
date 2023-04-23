import React from "react";
import { View, Text } from "react-native";
import { Entypo, MaterialIcons } from "react-native-vector-icons";
import styles from './styles'

const PlaceRow = ({ data }) => {
  return (
    <View style={styles.row}>
      <View style={styles.iconContainer}>
        {data.description === 'Home' ? <Entypo name='home' color={'white'} />
          : data.description === 'Work' ? <MaterialIcons name={'work'} color={'white'} />
            : <Entypo name='location-pin' color={'white'} />
        }
      </View>
      <Text style={styles.locationText}>{data.description || data.vicinity}</Text>
    </View>
  );
};

export default PlaceRow;
