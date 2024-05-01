import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements';

const RecentJobCard = () => {
    return (
        <View style={styles.cardContainer}>
            <View style={styles.textContainer}>
                <Text style={styles.companyName}>Axie Infinity</Text>
                <Text style={styles.jobTitle}>Jr. Game Designer</Text>
                <Text style={styles.salaryRange}>$1100 - $12000/Month</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    cardContainer: {
        flexDirection: 'row',
        backgroundColor: '#FFFFFF',
        borderRadius: 8,
        paddingTop: 25,
        paddingBottom: 25,
        alignItems: 'center',
        justifyContent: 'space-between',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
        marginVertical: 8,
    },
    companyLogo: {
        width: 48,
        height: 48,
        borderRadius: 12,
    },
    textContainer: {
        flex: 1,
        paddingHorizontal: 12,
        justifyContent: 'center',
    },
    companyName: {
        fontSize: 14,
        fontWeight: '600',
        color: '#333',
    },
    jobTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#333',
        marginVertical: 4,
    },
    salaryRange: {
        fontSize: 14,
        color: '#333',
        fontWeight: '600',
    },
    tagContainer: {
        flexDirection: 'row',
        marginTop: 8,
    },
    tag: {
        backgroundColor: '#E8E8E8',
        borderRadius: 12,
        paddingVertical: 4,
        paddingHorizontal: 8,
        fontSize: 12,
        color: '#333',
        marginRight: 8,
    },
    heartIcon: {
        padding: 8,
    },
});

export default RecentJobCard;