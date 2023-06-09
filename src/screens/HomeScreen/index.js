import PropTypes from "prop-types"
import React from "react";
import { View, Dimensions } from "react-native";

import HomeMap from '../../components/HomeScreen/HomeMap';
import CovidMessage from '../../components/HomeScreen/CovidMessage';
import HomeSearch from '../../components/HomeScreen/HomeSearch';

import cars from '../../assets/data/vehicles';

const HomeScreen = ({ initLocation }) => {
    return (
        <View>
            <View style={{ height: Dimensions.get('window').height - 404 }}>
                <HomeMap cars={cars} initLocation={initLocation} />
            </View>

            {/*  Covid Message*/}
            <CovidMessage />

            {/*  Bottom Comp*/}
            <HomeSearch />
        </View>
    );
};

HomeScreen.propTypes = {
    initLocation: PropTypes.shape({
        latitude: PropTypes.number.isRequired,
        longitude: PropTypes.number.isRequired
    }).isRequired
}

export default HomeScreen;
