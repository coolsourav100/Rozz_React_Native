import { Divider } from '@gluestack-ui/themed';
import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import Icon from 'react-native-vector-icons/MaterialIcons';
import * as Location from 'expo-location';
import { useDispatch, useSelector } from "react-redux";
import { addLocation } from "../../Redux/userSlice"




const Chooselocation = ({ navigation }) => {
    const [region, setRegion] = useState({
        latitude: 37.78825,
        longitude: -122.4324,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
    });
    const [markerPosition, setMarkerPosition] = useState(region);
    const [searchText, setSearchText] = useState('');
    const [currentLocation, setCurrentLocation] = useState('')
    const [position, setPosition] = useState(null)
    const { userDetails } = useSelector((state) => state.user);
    const dispatch = useDispatch();

    useEffect(() => {
        (async () => {
            let { status } = await Location.requestForegroundPermissionsAsync();
            if (status !== 'granted') {
                return;
            }
            locateCurrentPosition();
        })();
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
        let loc = await Location.reverseGeocodeAsync(newRegion);
        setCurrentLocation(loc[0]?.formattedAddress)
        setMarkerPosition(newRegion);
        setRegion(newRegion);
    };

    const onMarkerDragEnd = async (e) => {
        const newCoordinate = e.nativeEvent.coordinate;
        setMarkerPosition(newCoordinate);
        setPosition(newCoordinate)
        let loc = await Location.reverseGeocodeAsync(newCoordinate);
        setCurrentLocation(loc[0]?.formattedAddress)
    };
    const textHandler = async (newValue) => {

        setSearchText(newValue)
        onSearchLocation(newValue)

    }
    const onSearchLocation = async (dataText) => {
        let results = await Location.geocodeAsync(dataText);
        if (results.length > 0) {
            const newRegion = {
                latitude: results[0].latitude,
                longitude: results[0].longitude,
                latitudeDelta: 0.005,
                longitudeDelta: 0.005
            };
            setMarkerPosition(newRegion);
            setRegion(newRegion);
            setPosition(newRegion)
            let loc = await Location.reverseGeocodeAsync(newRegion);
            setCurrentLocation(loc[0]?.formattedAddress)

            // dispatch(addLocation(loc));
            // navigation.navigate(userDetails?.role === "Employee" ? 'MyTabs' : 'MyPostTab');
        }
    };

    const locationHandler = async () => {
        locateCurrentPosition()
        let loc = await Location.reverseGeocodeAsync(region);
        dispatch(addLocation(loc));
        navigation.navigate(userDetails?.role === "Employee" ? 'MyTabs' : 'MyPostTab');
    };
    const setLocationHandler = async () => {
        let loc = await Location.reverseGeocodeAsync(position);
        dispatch(addLocation(loc));
        navigation.navigate(userDetails?.role === "Employee" ? 'MyTabs' : 'MyPostTab');
    }

    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
                <Icon name="arrow-back-ios" size={24} />
            </TouchableOpacity>
            <Divider orientation="vertical" style={{ height: "5%" }} />
            <View style={{ paddingVertical: 10 }}>
                <Text style={{ color: "#000", fontSize: 30, fontWeight: 600 }}>Choose your location</Text>
                <Text tyle={{ color: "#000", fontSize: 20, fontWeight: 400 }}>
                    Come on, find jobs around you. Select a location below to get started.
                </Text>
            </View>
            <TextInput
                style={styles.searchInput}
                placeholder="Search location"
                value={searchText}
                onChangeText={textHandler}
            // onSubmitEditing={onSearchLocation}
            />

            <TouchableOpacity style={styles.setLocationButton} onPress={setLocationHandler}>
                <Text style={styles.setLocationText}>Set Location on Map</Text>
            </TouchableOpacity>
            <Text numberOfLines={3} ellipsizeMode="tail" style={styles.currentLocationText}>{currentLocation}</Text>
            <MapView
                style={styles.map}
                region={region}
                onRegionChangeComplete={setRegion}
            >
                <Marker
                    coordinate={markerPosition}
                    draggable
                    onDragEnd={onMarkerDragEnd}
                />
            </MapView>
            <TouchableOpacity style={styles.useLocationButton} onPress={locationHandler}>
                <Text style={styles.useLocationText}>Use Current Location</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
        paddingHorizontal: 30,
    },
    backButton: {
        marginTop: 10,
        marginLeft: 10,
    },
    title: {
        fontSize: 22,
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 20,
    },
    subtitle: {
        fontSize: 16,
        textAlign: 'center',
        marginTop: 10,
    },
    searchInput: {
        backgroundColor: "#f2f2f2",
        borderRadius: 16,
        padding: 10,
        marginTop: 20,
        fontSize: 16,
    },
    setLocationButton: {
        borderWidth: 1,
        borderColor: "#3b8f43",
        borderRadius: 16,
        marginTop: 15,
        alignItems: 'center',
        padding: 10,
    },
    setLocationText: {
        fontSize: 16,
    },
    currentLocationText: {
        marginTop: 20,
        marginBottom: 10,
        fontSize: 12,
        fontWeight: '600',
    },
    map: {
        height: "40%",
        marginBottom: 20,
    },
    useLocationButton: {
        backgroundColor: '#3b8f43',
        borderRadius: 25,
        padding: 15,
        alignItems: 'center',
        marginTop: 60
    },
    useLocationText: {
        color: '#ffffff',
        fontSize: 16,
        fontWeight: 'bold',
    },
});

export default Chooselocation;
