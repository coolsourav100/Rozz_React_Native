import { Box, Divider } from '@gluestack-ui/themed';
import { Alert } from 'react-native';
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, ScrollView, Modal, FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import AsyncStorage from '@react-native-async-storage/async-storage';


const roles = ['Employee', 'Employer'];

const SignUpScreen = ({ navigation }) => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [role, setRole] = useState('Employee');
    const [isPickerVisible, setPickerVisible] = useState(false);

    const handleSignUp = async () => {
        if (!firstName || !lastName || !email || !password) {
            Alert.alert('Error', 'Please fill in all fields.');
            return;
        }
        const emailRegex = /\S+@\S+\.\S+/;
        if (!emailRegex.test(email)) {
            Alert.alert('Error', 'Please enter a valid email address.');
            return;
        }
        if (password.length < 6) {
            Alert.alert('Error', 'Password should be at least 6 characters long.');
            return;
        }
        const userData = {
            firstName: firstName,
            lastName: lastName,
            email: email,
            password: password,
            role: role
        };
        try {
            await AsyncStorage.setItem('userData', JSON.stringify(userData));
            navigation.navigate('SignInScreen');
        } catch (error) {
            console.log(error)
            Alert.alert('Error', 'Failed to save user data.');
        }
    };

    const showPicker = () => {
        setPickerVisible(true);
    };

    const selectRole = (selectedRole) => {
        setRole(selectedRole);
        setPickerVisible(false);
    };
    return (
        <Box style={{ flex: 1, backgroundColor: "#ffffff", paddingHorizontal: 30, }}>
            <View style={{ padding: 10, paddingBottom: 30 }}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Icon name="arrow-back-ios" size={40} />
                </TouchableOpacity>
            </View>
            <View style={{ display: "flex", justifyContent: "flex-start", paddingBottom: 20 }}>
                <Text style={{ color: "#000", fontSize: 40, fontWeight: 600 }}> Register With Us</Text>
                <Text style={{ color: "#000", fontSize: 20, fontWeight: 400 }}>    Fill your details</Text>
            </View>

            <Box style={{ paddingTop: 40 }} >
                <View style={{ width: '100%', padding: 10, alignItems: 'center' }}>
                    <TextInput placeholder='Fist Name' onChangeText={(newValue) => setFirstName(newValue)} style={{ backgroundColor: "#f2f2f2", height: 60, width: "100%", borderRadius: 8, padding: 20 }} />
                </View>
                <View style={{ width: '100%', padding: 10, alignItems: 'center' }}>
                    <TextInput placeholder='Last Name' onChangeText={(newValue) => setLastName(newValue)} style={{ backgroundColor: "#f2f2f2", height: 60, width: "100%", borderRadius: 8, padding: 20 }} />
                </View>
                <View style={{ width: '100%', padding: 10, alignItems: 'center' }}>
                    <TextInput placeholder='Enter  Address' onChangeText={(newValue) => setEmail(newValue)} style={{ backgroundColor: "#f2f2f2", height: 60, width: "100%", borderRadius: 8, padding: 20 }} />
                </View>
                <View style={{ width: '100%', padding: 10, alignItems: 'center' }}>
                    <TextInput placeholder='Enter Password' onChangeText={(newValue) => setPassword(newValue)} style={{ backgroundColor: "#f2f2f2", height: 60, width: "100%", borderRadius: 8, padding: 20 }} />
                </View>
                <TouchableOpacity style={{ width: '100%', padding: 10, alignItems: 'center', position: "relative" }} onPress={showPicker}>
                    <Text style={{ backgroundColor: "#f2f2f2", height: 60, width: "100%", borderRadius: 8, padding: 20 }}>{role}</Text>
                    <Icon name="arrow-drop-down" size={24} style={{ position: "absolute", right: 20, bottom: 30 }} />
                </TouchableOpacity>
                <Modal visible={isPickerVisible} transparent={true} animationType="slide">
                    <TouchableOpacity style={styles.modalOverlay} onPress={() => setPickerVisible(false)}>
                        <View style={styles.modalContent}>
                            <FlatList
                                data={roles}
                                keyExtractor={(item) => item}
                                renderItem={({ item }) => (
                                    <TouchableOpacity style={styles.modalItem} onPress={() => selectRole(item)}>
                                        <Text style={styles.modalItemText}>{item}</Text>
                                    </TouchableOpacity>
                                )}
                            />
                        </View>
                    </TouchableOpacity>
                </Modal>
                <View style={{ width: '100%', padding: 10, alignItems: 'center' }}>
                    <TouchableOpacity onPress={handleSignUp} style={{
                        backgroundColor: "#3b8f43",
                        borderRadius: 8,
                        width: "100%",
                        height: 60,
                    }}><Text style={{ color: "#ffffff", textAlign: 'center', padding: 16, fontSize: 20, fontWeight: 600 }}>Sign Up </Text></TouchableOpacity>
                </View>
                <View>
                    <Text style={{ padding: 20, fontSize: 20, color: "#8f8f8f", textAlign: "center" }}>--- Or Continue With ---</Text>
                </View>
                <View style={{ display: "flex", flexDirection: "row", justifyContent: "center", gap: 30, paddingVertical: 20 }}>
                    <View>
                        <TouchableOpacity style={{
                            backgroundColor: "#f2f2f2",
                            height: 60,
                            width: 60,
                            alignItems: "center",
                            padding: 10,
                            borderRadius: 12
                        }} >
                            < Image style={{ height: "100%", width: "100%", }} source={require('../../assets/google-icon.png')} />
                        </TouchableOpacity>
                    </View>
                    <View>
                        <TouchableOpacity style={{
                            backgroundColor: "#3F51B5",
                            height: 60,
                            width: 60,
                            alignItems: "center",
                            padding: 10,
                            borderRadius: 12
                        }} >
                            < Image style={{ height: "100%", width: "100%", }} source={require('../../assets/facebook-icon.png')} />
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={{ paddingVertical: 10, alignItems: "center" }}>
                    <TouchableOpacity title="Go to Sign Up" onPress={() => navigation.navigate('SignInScreen')} >
                        <Text style={{ fontSize: 20, color: "#8f8f8f", }}> Already With Us ? <Text style={{ fontWeight: 600, color: "#8c8989" }}>Sing In</Text></Text>
                    </TouchableOpacity>
                </View>
            </Box>
        </Box >
    );
};
export default SignUpScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
        paddingHorizontal: 30,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 10,
    },
    headerTitle: {
        fontSize: 40,
        fontWeight: '600',
        color: '#000',
        paddingLeft: 10,
    },
    dropdown: {
        flexDirection: 'row',
        backgroundColor: '#f2f2f2',
        height: 60,
        borderRadius: 8,
        paddingHorizontal: 20,
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 20,
    },
    dropdownText: {
        fontSize: 16,
    },
    modalOverlay: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0.5)',
    },
    modalContent: {
        backgroundColor: 'white',
        width: '80%',
        borderRadius: 8,
    },
    modalItem: {
        padding: 20,
        alignItems: 'center',
    },
    modalItemText: {
        fontSize: 18,
    },
})
