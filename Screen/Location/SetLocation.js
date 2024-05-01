import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Dimensions, PermissionsAndroid, Platform, Button, TouchableOpacity, Text } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import * as Location from 'expo-location';

const SetLocation = ({ navigation }) => {
    const [region, setRegion] = useState({
        latitude: 37.78825,
        longitude: -122.4324,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
    });
    const [currentPosition, setCurrentPosition] = useState(null);

    useEffect(() => {
        (async () => {
            let { status } = await Location.requestForegroundPermissionsAsync();
            if (status !== 'granted') {
                return;
            }
            locateCurrentPosition()
        })()

    }, []);

    const locateCurrentPosition = async () => {
        let location = await Location.getCurrentPositionAsync({ accuracy: Location.Accuracy.High });
        const { latitude, longitude } = location.coords;
        const newRegion = {
            latitude,
            longitude,
            latitudeDelta: 0.005,
            longitudeDelta: 0.005
        };
        setCurrentPosition(newRegion);
        setRegion(newRegion);
    }
    const locationHandler = async () => {
        const { latitude, longitude } = currentPosition
        locateCurrentPosition()
        let loc = await Location.reverseGeocodeAsync({ latitude, longitude });
        // console.log(loc, "currentPosition")
        navigation.navigate('DashBoard', { location: loc })

    }


    return (
        <View style={styles.container}>
            <MapView
                style={styles.map}
                region={currentPosition || region}
                showsUserLocation={true}
                onRegionChangeComplete={region => setRegion(region)}
            >
                <Marker coordinate={currentPosition || region} />
            </MapView>
            <TouchableOpacity style={{ backgroundColor: "#6d3aba", borderRadius: 8, position: 'absolute', bottom: 30 }} onPress={locationHandler}><Text style={{ color: "#ffffff", padding: 10 }}>Set My Location</Text></TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
        position: 'relative'
    },
    map: {
        ...StyleSheet.absoluteFillObject,
    },
});

export default SetLocation;
