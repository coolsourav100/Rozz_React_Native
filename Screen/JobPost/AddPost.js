import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView, Image } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

const AddPost = () => {
    const [formData, setFormData] = useState({
        bidName: '',
        bidDescription: '',
        bidLocation: '',
        bidAmount: '',
        bidEndTime: '',
        images: [],
    });

    const handleInputChange = (name, value) => {
        setFormData({ ...formData, [name]: value });
    };

    const handleImageUpload = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsMultipleSelection: true,
            quality: 1,
        });

        if (!result.cancelled) {
            setFormData({ ...formData, images: [...formData.images, result.uri] });
        }
    };

    const handleSubmit = () => {
        // Submit form data
        console.log(formData);
    };

    return (
        <ScrollView style={styles.container}>
            <Text style={styles.header}>Add Jobs</Text>
            <TextInput
                style={styles.input}
                placeholder="Bid Name"
                onChangeText={(value) => handleInputChange('bidName', value)}
            />
            <TextInput
                style={styles.input}
                placeholder="Bid Description"
                onChangeText={(value) => handleInputChange('bidDescription', value)}
            />
            <TextInput
                style={styles.input}
                placeholder="Bid Location"
                onChangeText={(value) => handleInputChange('bidLocation', value)}
            />
            <TextInput
                style={styles.input}
                placeholder="Bid Amount"
                keyboardType="numeric"
                onChangeText={(value) => handleInputChange('bidAmount', value)}
            />
            <TextInput
                style={styles.input}
                placeholder="Bid End Time"
                onChangeText={(value) => handleInputChange('bidEndTime', value)}
            />
            <TouchableOpacity style={styles.button} onPress={handleImageUpload}>
                <Text style={styles.buttonText}>Upload Images</Text>
            </TouchableOpacity>
            <View style={styles.imagePreviewContainer}>
                {formData.images.map((image, index) => (
                    <Image key={index} source={{ uri: image }} style={styles.imagePreview} />
                ))}
            </View>
            <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
                <Text style={styles.submitButtonText}>Submit</Text>
            </TouchableOpacity>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f7f7f7',
        padding: 20,
    },
    header: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        color: '#333',
    },
    input: {
        backgroundColor: '#fff',
        marginBottom: 15,
        padding: 15,
        borderRadius: 5,
        fontSize: 16,
    },
    button: {
        backgroundColor: '#2196F3',
        padding: 15,
        borderRadius: 5,
        alignItems: 'center',
        marginBottom: 15,
    },
    buttonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },
    imagePreviewContainer: {
        flexDirection: 'row',
        marginBottom: 15,
    },
    imagePreview: {
        width: 70,
        height: 70,
        marginRight: 10,
    },
    submitButton: {
        backgroundColor: '#4CAF50',
        padding: 15,
        borderRadius: 5,
        alignItems: 'center',
    },
    submitButtonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },
});

export default AddPost;