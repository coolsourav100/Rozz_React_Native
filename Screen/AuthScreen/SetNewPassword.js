import { Box, Divider } from '@gluestack-ui/themed';
import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity, Image } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';


const SetNewPassword = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSignIn = () => {
        // console.log('Sign-In details:', email, password);
        navigation.navigate('SignInScreen');
    };

    return (
        <Box style={{ flex: 1, backgroundColor: "#ffffff", paddingHorizontal: 30, }}>
            <View style={{ padding: 10, paddingBottom: 30 }}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Icon name="arrow-back-ios" size={40} />
                </TouchableOpacity>
            </View>
            <Divider orientation="vertical" style={{ height: "10%" }} />
            <View style={{ display: "flex", justifyContent: "center", paddingBottom: 20 }}>
                <Text style={{ color: "#000", fontSize: 30, fontWeight: 600, textAlign: "center" }}> Set New Password</Text>
                <Text style={{ color: "#000", fontSize: 18, fontWeight: 400, textAlign: "center" }}> Enter new password</Text>
            </View>

            <Box style={{ paddingTop: 40 }} >
                <View style={{ width: '100%', padding: 10, alignItems: 'center' }}>
                    <TextInput placeholder='new password' style={{ backgroundColor: "#f2f2f2", height: 60, width: "100%", borderRadius: 8, padding: 20 }} />
                </View>
                <View style={{ width: '100%', padding: 10, alignItems: 'center' }}>
                    <TextInput placeholder='confirm new password' style={{ backgroundColor: "#f2f2f2", height: 60, width: "100%", borderRadius: 8, padding: 20 }} />
                </View>
                <Divider orientation="vertical" style={{ height: "20%" }} />

                <View style={{ width: '100%', padding: 10, alignItems: 'center' }}>
                    <TouchableOpacity onPress={handleSignIn} style={{
                        backgroundColor: "#3b8f43",
                        borderRadius: 8,
                        width: "100%",
                        height: 60,
                    }}><Text style={{ color: "#ffffff", textAlign: 'center', padding: 16, fontSize: 20, fontWeight: 600 }}>Set Password</Text></TouchableOpacity>
                </View>


            </Box>
        </Box >
    );
};
export default SetNewPassword;
