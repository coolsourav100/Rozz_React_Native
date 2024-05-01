import { Box, Divider } from '@gluestack-ui/themed';
import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert, TouchableOpacity, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useDispatch } from "react-redux";
import { addUserDetails, setToken } from '../../Redux/userSlice';



const SignInScreen = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    let dispatch = useDispatch()

    const handleSignIn = async () => {
        try {
            const storedUserData = await AsyncStorage.getItem('userData');
            if (storedUserData) {
                const userData = JSON.parse(storedUserData);
                if (email === userData.email && password === userData.password) {
                    dispatch(addUserDetails(userData))
                    dispatch(setToken(true))
                    console.log('Sign-In successful!');
                    navigation.navigate('chooselocation');
                } else {
                    Alert.alert('Error', 'Invalid email or password.');
                }
            } else {
                Alert.alert('Error', 'No user data found.');
            }
        } catch (error) {
            Alert.alert('Error', 'An error occurred while trying to sign in.');
            console.error(error);
        }
    };

    return (
        <Box style={{ flex: 1, backgroundColor: "#ffffff", paddingHorizontal: 30, }}>
            <Divider orientation="vertical" style={{ height: "10%" }} />
            <View style={{ display: "flex", justifyContent: "flex-start", paddingBottom: 20 }}>
                <Text style={{ color: "#000", fontSize: 40, fontWeight: 600 }}> Welcome Back!</Text>
                <Text style={{ color: "#000", fontSize: 20, fontWeight: 400 }}>    Let's Start</Text>
            </View>

            <Box style={{ paddingTop: 40 }} >
                <View style={{ width: '100%', padding: 10, alignItems: 'center' }}>
                    <TextInput placeholder='Enter  Address' onChangeText={(newValue) => setEmail(newValue)} style={{ backgroundColor: "#f2f2f2", height: 60, width: "100%", borderRadius: 8, padding: 20 }} />
                </View>
                <View style={{ width: '100%', padding: 10, alignItems: 'center' }}>
                    <TextInput placeholder='Enter Password' onChangeText={(newValue) => setPassword(newValue)} style={{ backgroundColor: "#f2f2f2", height: 60, width: "100%", borderRadius: 8, padding: 20 }} />
                </View>
                <View style={{ width: '100%', padding: 15, display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
                    <View>
                        <TouchableOpacity onPress={() => navigation.navigate('ForgetPassword')}><Text style={{ color: "#8f8f8f" }}>Forget Password ?</Text></TouchableOpacity>
                    </View>
                    <View>
                        <TouchableOpacity onPress={() => navigation.navigate('SingInWithMobile')}><Text style={{ color: "#8f8f8f" }}>Sing In With Mobile</Text></TouchableOpacity>
                    </View>
                </View>
                <View style={{ width: '100%', padding: 10, alignItems: 'center' }}>
                    <TouchableOpacity onPress={handleSignIn} style={{
                        backgroundColor: "#3b8f43",
                        borderRadius: 8,
                        width: "100%",
                        height: 60,
                    }}><Text style={{ color: "#ffffff", textAlign: 'center', padding: 16, fontSize: 20, fontWeight: 600 }}>Sign In </Text></TouchableOpacity>
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
                    <TouchableOpacity title="Go to Sign Up" onPress={() => navigation.navigate('SignUpScreen')} >
                        <Text style={{ fontSize: 20, color: "#8f8f8f", }}>New at Here ? <Text style={{ fontWeight: 600, color: "#8c8989" }}>Lets Go</Text></Text>
                    </TouchableOpacity>
                </View>
            </Box>
        </Box >
    );
};
export default SignInScreen;
