import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, FlatList } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import Icon from 'react-native-vector-icons/MaterialIcons';

const LocationSelectionScreen = ({ navigation }) => {
    const [searchQuery, setSearchQuery] = useState('');

    // Dummy data for popular locations
    const popularLocations = [
        { id: '1', name: 'Los Angeles', distance: '3.21 KM' },
        { id: '2', name: 'San Francisco', distance: '2.24 KM' },
        { id: '3', name: 'New York', distance: '2.84 KM' },
    ];

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
                    <Icon name="arrow-back" size={24} color="#000" />
                </TouchableOpacity>
                <Text style={styles.headerTitle}>Choose Location</Text>
            </View>
            <TextInput
                style={styles.searchInput}
                placeholder="Search location"
                value={searchQuery}
                onChangeText={setSearchQuery}
            />
            <MapView
                style={styles.map}
                initialRegion={{
                    latitude: 37.78825,
                    longitude: -122.4324,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                }}
            >
                <Marker
                    coordinate={{
                        latitude: 37.78825,
                        longitude: -122.4324,
                    }}
                />
            </MapView>
            <FlatList
                data={popularLocations}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <TouchableOpacity style={styles.locationItem}>
                        <Icon name="location-on" size={20} color="#000" />
                        <View style={styles.locationTextContainer}>
                            <Text style={styles.locationName}>{item.name}</Text>
                            <Text style={styles.locationDistance}>{item.distance}</Text>
                        </View>
                    </TouchableOpacity>
                )}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 16,
    },
    backButton: {
        marginRight: 16,
    },
    headerTitle: {
        fontWeight: 'bold',
        fontSize: 20,
    },
    searchInput: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        borderRadius: 20,
        borderColor: '#ddd',
    },
    map: {
        height: 200,
        marginVertical: 8,
    },
    locationItem: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 12,
        paddingHorizontal: 16,
    },
    locationTextContainer: {
        marginLeft: 8,
    },
    locationName: {
        fontWeight: 'bold',
    },
    locationDistance: {
        color: '#666',
    },
});

export default LocationSelectionScreen;
