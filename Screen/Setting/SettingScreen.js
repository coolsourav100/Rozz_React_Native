import React from 'react';
import { View, Text, TouchableOpacity, ScrollView, StyleSheet, Image, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useDispatch, useSelector } from "react-redux";
import { loginstatusStore, removeUserDetails, setToken } from '../../Redux/userSlice';


const SettingsScreen = ({ navigation }) => {
    const dispatch = useDispatch()
    const handleLogout = async () => {
        try {
            dispatch(removeUserDetails())
            // await AsyncStorage.clear();
            dispatch(setToken(false))
            navigation.navigate('SignInScreen')
        } catch (error) {
            // If there was an error clearing AsyncStorage, show an alert
            Alert.alert('Error', 'An error occurred while logging out.');
        }
    };

    return (
        <ScrollView style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerTitle}>Setting</Text>
            </View>
            <View style={styles.profileInfo}>
                <Image
                    source={{ uri: 'https://via.placeholder.com/150' }} // Replace with actual image source
                    style={styles.profileImage}
                />
                <Text style={styles.profileName}>Wade Warren</Text>
                <Text style={styles.profileUsername}>@WadeWarren</Text>
            </View>
            <View style={styles.section}>
                <TouchableOpacity onPress={() => navigation.navigate("Profile")} style={styles.sectionItem}>
                    <Text style={styles.sectionText}>Profile</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.sectionItem}>
                    <Text style={styles.sectionText}>Payment Method</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.sectionItem}>
                    <Text style={styles.sectionText}>Change Password</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.sectionItem}>
                    <Text style={styles.sectionText}>Forgot Password</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.sectionItem}>
                    <Text style={styles.sectionText}>Security</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.sectionItem}>
                    <Text style={styles.sectionText}>Language</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.sectionItem}>
                    <Text style={styles.sectionText}>Clear Cache</Text>
                    <Text style={styles.cacheSize}>88 MB</Text>
                </TouchableOpacity>
            </View>
            <TouchableOpacity onPress={handleLogout} style={styles.sectionItem}>
                <Text style={styles.sectionText}>Log Out</Text>
            </TouchableOpacity>
            <View style={styles.aboutSection}>
                <Text style={styles.aboutText}>About</Text>
            </View>
        </ScrollView>
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
        fontSize: 18,
        color: '#000',
        marginRight: 16,
    },
    headerTitle: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    profileInfo: {
        alignItems: 'center',
        padding: 16,
    },
    profileImage: {
        width: 80,
        height: 80,
        borderRadius: 40,
    },
    profileName: {
        fontSize: 18,
        fontWeight: 'bold',
        marginTop: 8,
    },
    profileUsername: {
        fontSize: 16,
        color: 'grey',
    },
    section: {
        marginTop: 16,
    },
    sectionItem: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingVertical: 12,
        paddingHorizontal: 16,
        borderBottomWidth: 1,
        borderBottomColor: '#eaeaea',
    },
    sectionText: {
        fontSize: 16,
    },
    cacheSize: {
        fontSize: 16,
        color: 'grey',
    },
    aboutSection: {
        padding: 16,
    },
    aboutText: {
        fontSize: 16,
        color: 'grey',
    },
});

export default SettingsScreen;
