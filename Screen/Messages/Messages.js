import React from 'react';
import { View, Text, FlatList, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { Searchbar } from 'react-native-paper';


// Mock data to represent the chat list
const chatData = [
    {
        id: 1,
        name: 'Victoria Avila',
        message: "That's great, I look forward to hearing ba...",
        // profilePic: require('./path-to-victoria-avatar.jpg'),
        time: '11:20 am',
        unread: true,
    },
    {
        id: 2,
        name: 'Victoria Avila',
        message: "That's great, I look forward to hearing ba...",
        // profilePic: require('./path-to-victoria-avatar.jpg'),
        time: '11:20 am',
        unread: true,
    },
    {
        id: 3,
        name: 'Victoria Avila',
        message: "That's great, I look forward to hearing ba...",
        // profilePic: require('./path-to-victoria-avatar.jpg'),
        time: '11:20 am',
        unread: true,
    },
    {
        id: 4,
        name: 'Victoria Avila',
        message: "That's great, I look forward to hearing ba...",
        // profilePic: require('./path-to-victoria-avatar.jpg'),
        time: '11:20 am',
        unread: true,
    },
    {
        id: 5,
        name: 'Victoria Avila',
        message: "That's great, I look forward to hearing ba...",
        // profilePic: require('./path-to-victoria-avatar.jpg'),
        time: '11:20 am',
        unread: false,
    },
    {
        id: 6,
        name: 'Victoria Avila',
        message: "That's great, I look forward to hearing ba...",
        // profilePic: require('./path-to-victoria-avatar.jpg'),
        time: '11:20 am',
        unread: true,
    },

];

const ChatItem = ({ name, message, profilePic, time, unread }) => {
    return (
        <>
            <Image source={profilePic} style={styles.profilePic} />
            <View style={styles.chatInfo}>
                <Text style={styles.chatName}>{name}</Text>
                <Text style={styles.chatMessage}>{message}</Text>
            </View>
            <View style={styles.chatTimeContainer}>
                <Text style={styles.chatTime}>{time}</Text>
                {unread && <View style={styles.unreadBadge} />}
            </View>
        </>
    );
};

const Messages = ({ navigation }) => {
    const chatHandler = () => {
        navigation.navigate('Conversation')
    }
    return (
        <View style={styles.container}>
            <Searchbar placeholder='Search' />

            <FlatList
                data={chatData}
                keyExtractor={item => item.id}
                renderItem={({ item }) => (
                    <TouchableOpacity onPress={chatHandler}>
                        <ChatItem
                            name={item.name}
                            message={item.message}
                            profilePic={item.profilePic}
                            time={item.time}
                            unread={item.unread}
                        />
                    </TouchableOpacity>
                )}
            />
        </View>
    );
};



const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        paddingHorizontal: 20,
        paddingHorizontal: 10
    },
    chatItem: {
        flexDirection: 'row',
        padding: 10,
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: '#f0f0f0',
    },
    profilePic: {
        width: 50,
        height: 50,
        borderRadius: 25,
    },
    chatInfo: {
        flex: 1,
        justifyContent: 'center',
        paddingHorizontal: 10,
    },
    chatName: {
        fontWeight: 'bold',
    },
    chatMessage: {
        color: 'grey',
    },
    chatTimeContainer: {
        alignItems: 'flex-end',
    },
    chatTime: {
        color: 'grey',
    },
    unreadBadge: {
        marginTop: 4,
        width: 8,
        height: 8,
        borderRadius: 4,
        backgroundColor: 'red',
    },
});

export default Messages;