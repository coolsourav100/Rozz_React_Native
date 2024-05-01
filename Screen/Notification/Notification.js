import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { Swipeable, GestureHandlerRootView } from 'react-native-gesture-handler';
import NotificationCard from './NotificationCard';
import AntDesign from 'react-native-vector-icons/AntDesign';


// const NotificationCard = ({ item, onRemove }) => {
//     const renderRightActions = () => (
//         <TouchableOpacity onPress={() => onRemove(item.id)} style={styles.deleteBox}>
//             <Text style={styles.deleteText}>Remove</Text>
//         </TouchableOpacity>
//     );

//     return (
//         <Swipeable renderRightActions={renderRightActions}>
//             <View style={styles.card}>
//                 <Text style={styles.cardText}>{item.title}</Text>
//             </View>
//         </Swipeable>
//     );
// };

const Notification = () => {
    const [notifications, setNotifications] = useState([
        { id: '1', title: 'Your order has been shipped' },
        { id: '2', title: 'Your item has been delivered' },
    ]);

    const handleRemove = (id) => {
        setNotifications(currentNotifications =>
            currentNotifications.filter(notification => notification.id !== id)
        );
    };

    return (
        <View style={{ flex: 1, position: "relative", paddingHorizontal: 20 }}>
            <View style={{ alignItems: "center", padding: 10 }}>
                <Text style={{ fontSize: 24, fontWeight: 600 }}>Notification</Text>
                <AntDesign name="filter" size={24} style={{ position: "absolute", right: 20, bottom: 10 }} />
            </View>
            <GestureHandlerRootView style={{ flex: 1 }}>
                <FlatList
                    data={notifications}
                    keyExtractor={item => item.id}
                    renderItem={({ item }) => (
                        <NotificationCard item={item} onRemove={handleRemove} />
                    )}
                    style={styles.container}
                />
            </GestureHandlerRootView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    card: {
        backgroundColor: '#fff',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
        borderRadius: 5,
    },
    cardText: {
        fontSize: 16,
    },
    deleteBox: {
        backgroundColor: 'red',
        justifyContent: 'center',
        alignItems: 'center',
        width: 100,
        height: '100%',
    },
    deleteText: {
        color: '#fff',
        fontWeight: 'bold',
    },
});

export default Notification;
