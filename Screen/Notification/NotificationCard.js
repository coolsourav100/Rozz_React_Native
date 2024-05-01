import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Swipeable } from 'react-native-gesture-handler';
import { Icon } from 'react-native-elements';

const useRandomColor = () => {
    const generateColor = () => {
        const red = Math.floor(Math.random() * 256);
        const green = Math.floor(Math.random() * 256);
        const blue = Math.floor(Math.random() * 256);
        return `rgb(${red}, ${green}, ${blue})`;
    };

    return generateColor;
};

const NotificationCard = ({ item, onRemove }) => {
    const getRandomColor = useRandomColor();
    const backgroundColor = getRandomColor();

    const renderRightActions = () => (
        <TouchableOpacity onPress={() => onRemove(item.id)} style={styles.deleteBox}>
            <Text style={styles.deleteText}>Remove</Text>
        </TouchableOpacity>
    );

    return (
        <Swipeable renderRightActions={renderRightActions}>
            <View style={styles.card}>
                <Icon
                    name="circle"
                    type="font-awesome"
                    size={10}
                    color="#3b8f43"
                    containerStyle={styles.iconContainer}
                />
                <View style={styles.textContainer}>
                    <Text style={styles.title}>{item.title}</Text>
                    <Text style={styles.time}>{item.time}</Text>
                </View>
                <Icon name="dots-vertical" type="material-community" color="#6e6e6e" />
            </View>
        </Swipeable>
    );
};

const styles = StyleSheet.create({
    card: {
        flexDirection: 'row',
        paddingVertical: 16,
        paddingHorizontal: 20,
        backgroundColor: '#FFFFFF',
        borderBottomWidth: 1,
        borderBottomColor: '#E0E0E0',
        alignItems: 'center',
        marginVertical: 8,
        borderRadius: 8
    },
    iconContainer: {
        width: 40,
        height: 40,
        borderRadius: 20,
        backgroundColor: '#EBF0FF',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 16,
    },
    textContainer: {
        flex: 1,
    },
    title: {
        fontSize: 16,
        color: '#333333',
    },
    time: {
        fontSize: 12,
        color: '#6e6e6e',
        marginTop: 4,
    },
    moreButton: {
        padding: 8,
    },
    deleteBox: {
        backgroundColor: 'red',
        justifyContent: 'center',
        alignItems: 'center',
        width: 100,
        height: '70%',
        marginTop: 13
    },
    deleteText: {
        color: '#fff',
        fontWeight: 'bold',
    },
});

export default NotificationCard;
