import React, { useState } from 'react';
import { View, Text, Image, TextInput, TouchableOpacity, StyleSheet,Pressable, ScrollView } from 'react-native';
import { Switch } from 'react-native-paper';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const Profile = () => {
    const [isSwitchOn, setIsSwitchOn] = useState(false);
    const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn);

    return (
        <ScrollView style={styles.container}>
            <View style={styles.header}>
                <Image source={require('../../assets/profile.jpg')} style={styles.profileImage} />
                <Pressable onPress={() => console.log('Edit Icon Pressed')}>
                    <MaterialIcons name="edit" size={24} color="#6200ee" style={styles.editIcon} />
                </Pressable>
                {/* Other header elements */}
            </View>
            <View style={styles.inputContainer}>
                <Text style={styles.label}>First Name</Text>
                <TextInput style={styles.text} value="Andy" placeholder='First Name' />
                <Text style={styles.label}>Last Name</Text>
                <TextInput style={styles.text} value="Deo" placeholder='Last Name' />
                <Text style={styles.label}>Email</Text>
                <TextInput style={styles.text} value="Andylexian23@gmail.com" placeholder='example@x.com' />
                <Text style={styles.label}>Date of Birth</Text>
                <TextInput style={styles.text} value="24 February 1996" />
                <Text style={styles.label}>Gender</Text>
                <TextInput style={styles.text} value='Male' />
                <Text style={styles.label}>Location</Text>
                <TextInput style={styles.text} value="Mumbai" multiline />
                <Text style={styles.label}>Mobile Number</Text>
                <TextInput style={styles.text} value="Mumbai" multiline />
            </View>
            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Save Changes</Text>
            </TouchableOpacity>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    header: {
        alignItems: 'center',
        padding: 20,
        position:"relative"
    },
    profileImage: {
        width: 100,
        height: 100,
        borderRadius: 50,
        borderColor: "#6200ee",
        borderWidth: 1
    },
    inputContainer: {
        paddingHorizontal: 20,
        gap: 10
    },
    label: {
        fontSize: 16,
        color: '#000',
        paddingTop: 10,
    },
    input: {
        fontSize: 16,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
        paddingVertical: 5,
    },
    genderContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingVertical: 10,
    },
    genderText: {
        fontSize: 16,
        color: '#000',
    },
    button: {
        backgroundColor: "#3b8f43",
        height: 60,
        padding: 10,
        margin: 20,
        borderRadius: 5,
        alignItems: 'center',
    },
    buttonText: {
        color: '#fff',
        fontSize: 18,
        padding:8
    },
    text: {
        backgroundColor: "#f2f2f2",
        height: 60,
        width: "100%",
        borderRadius: 8,
        padding: 20
    },
    editIcon: {
        position:"absolute",
        top:-55,
        left:38,
        color:"#000"
    },
});

export default Profile;
