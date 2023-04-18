import React from "react";
import { View, Text } from "react-native";
import { AntDesign, MaterialIcons, Entypo } from "react-native-vector-icons";

import styles from './styles.js';

const HomeSearch = () => {
  return (
    <View>
      {/*  Input Box */}
      <View style={styles.inputBox}>
        <Text style={styles.inputText}>Where To?</Text>

        <View style={styles.timeContainer}>
          <AntDesign name={'clockcircle'} size={16} color={'#535353'} />
          <Text>Now</Text>
          <MaterialIcons name={'keyboard-arrow-down'} size={16} />
        </View>
      </View>

      {/* Previous destination */}
      <View style={styles.row}>
        <View style={styles.iconContainer}>
          <MaterialIcons name={'work'} size={20} color={'#ffffff'} />
        </View>
        <Text style={styles.destinationText}>Spin Work</Text>
      </View>

      {/* Home destination */}
      <View style={styles.row}>
        <View style={[styles.iconContainer, { backgroundColor: '#0071FA' }]}>
          <Entypo name={'home'} size={20} color={'#ffffff'} />
        </View>
        <Text style={styles.destinationText}>Spin Home</Text>
      </View>
    </View>
  );
};

export default HomeSearch;
