import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Box, Divider } from '@gluestack-ui/themed';

const ResetPassword = ({ navigation }) => {
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleSetPassword = () => {
        if (newPassword === confirmPassword) {
            // Implement password update logic here
            console.log('Password successfully updated');
            navigation.navigate('Login'); // Assuming 'Login' is the screen to navigate after password reset
        } else {
            console.log('Passwords do not match');
            // Optionally show an alert or error message
        }
    };

    return (
        <Box style={{ flex: 1, backgroundColor: "#ffffff", paddingHorizontal: 30 }}>
            <View style={{ padding: 10, paddingBottom: 30 }}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Icon name="arrow-back-ios" size={40} />
                </TouchableOpacity>
            </View>
            <Divider orientation="vertical" style={{ height: "10%" }} />
            <View style={{ display: "flex", justifyContent: "center", paddingBottom: 20 }}>
                <Text style={{ color: "#000", fontSize: 30, fontWeight: "600", textAlign: "center" }}>Reset Password</Text>
                <Text style={{ color: "#000", fontSize: 18, fontWeight: "400", textAlign: "center" }}>Enter your new password below</Text>
            </View>

            <Box style={{ paddingTop: 40 }}>
                <View style={{ width: '100%', padding: 10, alignItems: 'center' }}>
                    <TextInput
                        placeholder='New Password'
                        secureTextEntry={true}
                        style={styles.textInput}
                        onChangeText={setNewPassword}
                        value={newPassword}
                    />
                </View>
                <Divider orientation="vertical" style={{ height: "20%" }} />
                <View style={{ width: '100%', padding: 10, alignItems: 'center' }}>
                    <TextInput
                        placeholder='Confirm New Password'
                        secureTextEntry={true}
                        style={styles.textInput}
                        onChangeText={setConfirmPassword}
                        value={confirmPassword}
                    />
                </View>
                <View style={{ width: '100%', padding: 10, alignItems: 'center' }}>
                    <TouchableOpacity onPress={handleSetPassword} style={styles.button}>
                        <Text style={styles.buttonText}>Set Password</Text>
                    </TouchableOpacity>
                </View>
            </Box>
        </Box>
    );
};

const styles = StyleSheet.create({
    textInput: {
        backgroundColor: "#f2f2f2",
        height: 60,
        width: "100%",
        borderRadius: 8,
        padding: 20
    },
    button: {
        backgroundColor: "#3b8f43",
        borderRadius: 8,
        width: "100%",
        height: 60,
    },
    buttonText: {
        color: "#ffffff",
        textAlign: 'center',
        padding: 16,
        fontSize: 20,
        fontWeight: "600"
    }
});

export default ResetPassword;
