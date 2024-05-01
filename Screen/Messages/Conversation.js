import React from 'react';
import { View, Text, ScrollView, Image, StyleSheet, TextInput, TouchableOpacity } from 'react-native';

// Mock data for the chat conversation
const chatMessages = [
    {
        id: '1',
        text: "Hi Abiola, any progress on the project? We need a link for standup.",
        isIncoming: true,
        time: '1 day ago',
    },
    // ... other chat messages
];

const ChatMessage = ({ text, isIncoming, time }) => {
    return (
        <View style={[styles.chatMessage, isIncoming ? styles.incomingMessage : styles.outgoingMessage]}>
            <Text style={styles.messageText}>{text}</Text>
            <Text style={styles.messageTime}>{time}</Text>
        </View>
    );
};

const Conversation = () => {
    return (
        <ScrollView>
            {chatMessages.map(message => (
                <ChatMessage
                    key={message.id}
                    text={message.text}
                    isIncoming={message.isIncoming}
                    time={message.time}
                />
            ))}
        </ScrollView>
    );
};

// Styles for the chat conversation
const styles = StyleSheet.create({
    chatMessage: {
        marginVertical: 5,
        padding: 10,
        borderRadius: 10,
        maxWidth: '80%',
    },
    incomingMessage: {
        backgroundColor: '#f0f0f0',
        alignSelf: 'flex-start',
    },
    outgoingMessage: {
        backgroundColor: '#ff7e67',
        alignSelf: 'flex-end',
    },
    messageText: {
        color: 'black',
    },
    messageTime: {
        color: 'grey',
        fontSize: 10,
        alignSelf: 'flex-end',
    },
});



export default Conversation

