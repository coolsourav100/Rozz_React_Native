import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements';



const JobCard = ({ location, salary, title }) => {
    return (
        <View style={styles.cardContainer}>
            <View style={styles.logoContainer}>
                <Image
                    source={{ uri: 'https://pplx-res.cloudinary.com/image/upload/v1714367236/user_uploads/hcvnycwic/Screenshot_2024-04-29_103700.jpg' }} // Replace with the actual logo URL
                    style={styles.logo}
                />
            </View>
            <View style={styles.infoContainer}>
                <Text style={styles.jobTitle}>{title}</Text>
                <Text style={styles.companyLocation}>Motorola, In San Diego</Text>
                <View style={styles.locationSalaryContainer}>
                    <Icon name="location-on" type="material" size={16} color="#6e6e6e" />
                    <Text style={styles.location}>{location}</Text>
                    <Text style={styles.salary}>{salary}</Text>
                </View>
            </View>
            <TouchableOpacity style={styles.favoriteButton}>
                <Icon name="heart-o" type="font-awesome" size={24} color="#6e6e6e" />
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    cardContainer: {
        flexDirection: 'row',
        backgroundColor: '#fff',
        borderRadius: 6,
        padding: 10,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
        borderWidth: 1, // Lightweight border
        borderColor: "#3b8f43"
    },
    logoContainer: {
        marginRight: 10,
    },
    logo: {
        width: 50,
        height: 50,
        borderRadius: 25,
    },
    infoContainer: {
        flex: 1,
        justifyContent: 'center',
    },
    jobTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#333',
    },
    companyLocation: {
        fontSize: 14,
        color: '#6e6e6e',
    },
    locationSalaryContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 4,
    },
    location: {
        fontSize: 12,
        color: '#6e6e6e',
        marginLeft: 4,
        marginRight: 10,
    },
    salary: {
        fontSize: 14,
        color: '#333',
        fontWeight: 'bold',
    },
    favoriteButton: {
        padding: 8,
    },
});

export default JobCard;