import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, Alert } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import Icon from 'react-native-vector-icons/MaterialIcons';


const PostDetails = ({ navigation }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [jobPost, setJobPost] = useState({
        title: 'Jr. Game Designer',
        company: 'Axie Infinity',
        location: 'Remote',
        salaryRange: '$1100 - $12000/Month',
        description: 'Looking for a creative game designer...',
        imageUri: null,
    });

    const handleEditField = (field, value) => {
        setJobPost({ ...jobPost, [field]: value });
    };

    const handleDeletePost = () => {
        // Confirm before deleting
        Alert.alert('Delete Post', 'Are you sure you want to delete this post?', [
            { text: 'Cancel', style: 'cancel' },
            { text: 'Delete', onPress: () => console.log('Post deleted') },
        ]);
    };

    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });

        if (!result.cancelled) {
            setJobPost({ ...jobPost, imageUri: result.uri });
        }
    };
    const toggleEdit = () => {
        setIsEditing(!isEditing);
    };

    const saveEdit = () => {
        // Save the edited job post details
        console.log('Job post details saved:', jobPost);
        setIsEditing(false);
    }

    return (
        <View style={styles.container}>
            <View style={{ alignItems: "center", paddingBottom: 20 }}>
                <Text style={{ fontSize: 24, fontWeight: 600 }}> Post Details</Text>
            </View>
            <View style={{ position: "absolute", top: 10, left: 30 }}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Icon name="arrow-back-ios" size={40} />
                </TouchableOpacity>
            </View>
            <TouchableOpacity onPress={pickImage}>
                <View style={styles.imageContainer}>
                    {jobPost.imageUri ? (
                        <Image source={{ uri: jobPost.imageUri }} style={styles.image} />
                    ) : (
                        <Text style={styles.imagePlaceholder}>Upload Image</Text>
                    )}
                </View>
            </TouchableOpacity>
            <TextInput
                style={styles.input}
                value={jobPost.title}
                onChangeText={(text) => handleEditField('title', text)}
                editable={isEditing}
            />
            <TextInput
                style={styles.input}
                value={jobPost.company}
                onChangeText={(text) => handleEditField('company', text)}
                editable={isEditing}
            />
            <TextInput
                style={styles.input}
                value={jobPost.location}
                onChangeText={(text) => handleEditField('location', text)}
                editable={isEditing}
            />
            <TextInput
                style={styles.input}
                value={jobPost.salaryRange}
                onChangeText={(text) => handleEditField('salaryRange', text)}
                editable={isEditing}
            />
            <TextInput
                style={styles.input}
                value={jobPost.description}
                onChangeText={(text) => handleEditField('description', text)}
                editable={isEditing}
                multiline
            />
            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.button} onPress={handleDeletePost}>
                    <Text style={styles.buttonText}>Delete Post</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button1} onPress={isEditing ? saveEdit : toggleEdit}>
                    <Text style={styles.buttonText}>{isEditing ? 'Save Edit' : 'Edit Post'}</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#fff',
        position: "relative"
    },
    imageContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#e1e4e8',
        height: 200,
        borderRadius: 8,
        marginBottom: 20,
    },
    image: {
        width: '100%',
        height: '100%',
        borderRadius: 8,
    },
    imagePlaceholder: {
        color: '#adb5bd',
        fontSize: 18,
    },
    input: {
        backgroundColor: '#f7f7f7',
        padding: 15,
        borderRadius: 8,
        marginBottom: 10,
        fontSize: 16,
    },
    button: {
        backgroundColor: '#dc3545',
        padding: 15,
        borderRadius: 8,
        alignItems: 'center',
        marginTop: 10,
        width: "50%"
    },
    button1: {
        backgroundColor: '#3b8f43',
        padding: 15,
        borderRadius: 8,
        alignItems: 'center',
        marginTop: 10,
        width: "50%"
    },
    buttonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',

    },
    buttonContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 10,
        gap: 10
    },
});

export default PostDetails;