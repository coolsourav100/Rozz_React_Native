import React, { useEffect } from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity, TextInput, Button } from 'react-native';
import { Rating } from 'react-native-ratings';
import Feather from 'react-native-vector-icons/Feather';
import Octicons from 'react-native-vector-icons/Octicons';
import Tts from 'react-native-tts';

// function speak(text) {
//     const utterance = new SpeechSynthesisUtterance(text);
//     speechSynthesis.speak(utterance);
//     utterance.onend = function (event) {
//         const blob = new Blob([event.audioData], { type: 'audio/wav' });
//         const audioURL = URL.createObjectURL(blob);
//         // Now you can use audioURL as the source for an audio element or download link
//     };
// }

// CircularLogo component with random background color
const CircularLogo = ({ letter }) => {
    const getRandomColor = () => {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    };

    const backgroundColor = getRandomColor();

    return (
        <View style={[styles.circularLogo, { backgroundColor }]}>
            <Text style={styles.letter}>{letter.toUpperCase()}</Text>
        </View>
    );
};

const JobDetails = ({ route, navigation }) => {
    const { job } = route.params;
    // useEffect(() => {
    //     Tts.getInitStatus().then(() => {
    //         // TTS is initialized and ready to use
    //     }, (err) => {
    //         if (err.code === 'no_engine') {
    //             Tts.requestInstallEngine();
    //         }
    //     });
    // }, []);

    // const onAudioIconPress = () => {
    //     Tts.speak(job?.description);
    // };
    // const onAudioIconPress = () => {
    //     try {
    //         speak(job?.description)
    //         SoundPlayer.playSoundFile('description', 'mp3');
    //     } catch (e) {
    //         console.log('Cannot play the sound file', e);
    //     }
    // };

    return (
        <ScrollView style={styles.container}>
            <Text style={styles.soldByText}>Post By</Text>
            <View style={styles.cardContainer}>
                <CircularLogo letter={job?.postBy?.charAt(0)} />
                <View style={styles.textContainer}>
                    <Text style={styles.nameText}>{job?.postBy}</Text>
                    <Rating
                        type='star'
                        ratingCount={5}
                        imageSize={16}
                        readonly
                        startingValue={4}
                        style={styles.rating}
                    />
                    <Text style={styles.memberStatusText}>Longtime member</Text>
                </View>
                <View style={styles.iconContainer}>
                    <TouchableOpacity onPress={() => navigation.navigate('Messages')}>
                        <Feather name="message-circle" size={30} />
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.cardContainerJob}>
                <Text style={styles.jobTitle}>{job?.title}</Text>
                <View style={styles.descriptionContainer}>
                    <Text style={styles.jobDescription}>{job?.description}</Text>
                    <TouchableOpacity style={styles.audioIcon} >
                        <Octicons name='unmute' size={30} />
                    </TouchableOpacity>
                </View>
                {/* {imageUrl && <Image source={{ uri: imageUrl }} style={styles.jobImage} />} */}
                <Text style={styles.maxBid}>Maximum Bid: </Text>
                <View style={styles.bidContainer}>
                    <TextInput
                        style={styles.bidInput}
                        placeholder="Enter your bid"
                        // value={bidAmount}
                        // onChangeText={setBidAmount}
                        keyboardType="numeric"
                    />
                    <Button title="Submit" onPress={() => console.log('Bid submitted:', bidAmount)} />
                </View>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingHorizontal: 20
    },
    header: {
        paddingVertical: 20,
        paddingHorizontal: 20,
    },
    postByText: {
        fontSize: 18,
        paddingBottom: 10,
    },
    postByContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    circularLogo: {
        width: 50,
        height: 50,
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 10,
    },
    letter: {
        color: '#fff',
        fontSize: 24,
        fontWeight: 'bold',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    section: {
        padding: 20,
    },
    sectionTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    sectionContent: {
        fontSize: 16,
        color: '#555',
        marginBottom: 10,
    },
    galleryImage: {
        width: '100%',
        height: 200,
        resizeMode: 'cover',
        borderRadius: 10,
        marginBottom: 10,
    },
    cardContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#fff',
        padding: 10,
        borderRadius: 6,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
    },
    profileImage: {
        width: 50, // Adjust the size as needed
        height: 50, // Adjust the size as needed
        borderRadius: 25, // Half the width/height to make it circular
        marginRight: 10,
    },
    textContainer: {
        flex: 1,
        position: "relative"

    },
    soldByText: {
        fontSize: 16,
        padding: 10,
        color: '#333',
        fontWeight: 'bold',
    },
    nameText: {
        fontSize: 20,
        color: '#333',
        fontWeight: 'bold',
    },
    memberStatusText: {
        fontSize: 12,
        color: '#666',
    },
    iconContainer: {
        flexDirection: 'row',
        justifyContent: "flex-end",
    },
    rating: {
        // position: "absolute",

        left: -120,
        padding: 10
    },
    cardContainerJob: {
        backgroundColor: '#fff',
        padding: 20,
        // borderRadius: 8,
        // shadowColor: '#000',
        // shadowOffset: { width: 0, height: 2 },
        // shadowOpacity: 0.1,
        // shadowRadius: 4,
        // elevation: 3,
        margin: 10,
    },
    jobTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    descriptionContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
    },
    jobDescription: {
        flex: 1,
        fontSize: 14,
    },
    audioIcon: {
        marginLeft: 10,
    },
    icon: {
        width: 24,
        height: 24,
    },
    jobImage: {
        width: '100%',
        height: 200,
        borderRadius: 4,
        marginBottom: 10,
    },
    maxBid: {
        fontSize: 16,
        marginBottom: 10,
    },
    bidContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    bidInput: {
        flex: 1,
        borderColor: '#ccc',
        borderWidth: 1,
        padding: 10,
        marginRight: 10,
        borderRadius: 4,
    },
});

export default JobDetails;
