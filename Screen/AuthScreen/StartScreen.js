import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';

const StartScreen = ({ navigation }) => {
    return (
        <ScrollView contentContainerStyle={styles.container}>
            <View style={styles.personContainer}>
                <Image
                    source={require('./../../assets/rojja.png')} // Replace with your local image
                    style={styles.personImage}
                />
            </View>
            <View style={{ position: "absolute", bottom: 220 }}>
                <Text style={{ color: "#ffffff", fontSize: 24, fontWeight: 'bold', paddingTop: 10, paddingEnd: 20, paddingStart: 20, paddingBottom: 10 }}>Empowering Every Day</Text>
            </View>
            <View style={{ position: "absolute", bottom: 100 }}>
                <TouchableOpacity onPress={() => navigation.navigate('SignInScreen')} style={{ backgroundColor: "#971823", borderRadius: 12, }}><Text style={{ color: "#ffffff", fontSize: 20, fontWeight: 'bold', paddingTop: 10, paddingEnd: 20, paddingStart: 20, paddingBottom: 10 }}>Get Started</Text></TouchableOpacity>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#BF1729',
        position: "relative"
    },
    personContainer: {
        width: "100%",
        height: "100%"
    },
    personImage: {
        width: "100%", // Adjust size as needed
        height: "100%", // Adjust size as needed
        resizeMode: 'contain',
    },
    iconsContainer: {
        // Add styles for the icons container
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        width: '100%',
        marginTop: 20,
    },
    iconImage: {
        width: 50, // Adjust size as needed
        height: 50, // Adjust size as needed
        resizeMode: 'contain',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginTop: 20,
        color: "#ffffff"
    },
    // Add other styles as needed
});

export default StartScreen;