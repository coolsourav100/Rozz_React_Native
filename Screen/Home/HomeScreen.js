import React from 'react';
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity } from 'react-native';
import { Box } from '@gluestack-ui/themed';
import { Searchbar } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import JobCard from '../JobDetails/JobCard';
import RecentJobCard from '../JobDetails/RecentJobCard';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useSelector } from 'react-redux';

function generateSimilarColor(hexColor) {
    // Convert the hex color code to RGB values
    let r = parseInt(hexColor.substring(1, 3), 16);
    let g = parseInt(hexColor.substring(3, 5), 16);
    let b = parseInt(hexColor.substring(5, 7), 16);

    // Generate random offsets for each color channel
    let rOffset = Math.floor(Math.random() * 50) - 25;
    let gOffset = Math.floor(Math.random() * 50) - 25;
    let bOffset = Math.floor(Math.random() * 50) - 25;

    // Apply the offsets to the original color values
    r = Math.max(0, Math.min(255, r + rOffset));
    g = Math.max(0, Math.min(255, g + gOffset));
    b = Math.max(0, Math.min(255, b + bOffset));

    // Convert the RGB values back to a hex color code
    const rHex = r.toString(16).padStart(2, '0');
    const gHex = g.toString(16).padStart(2, '0');
    const bHex = b.toString(16).padStart(2, '0');

    // Return the new hex color code
    // console.log(`#${rHex}${gHex}${bHex}`)
    return `#${rHex}${gHex}${bHex}`;
}

const jobsData = [
    {
        id: '1',
        title: 'UI/UX Designer',
        salary: '$50k - $80k',
        location: 'Mountain View, USA',
        postBy: "Sourav",
        description: 'UI/UX designers contribute to the product development process by understanding user needs, defining user flows, creating wireframes and prototypes, designing intuitive interfaces, conducting usability testing, and iterating on designs based on user feedback.'
    },
    {
        id: '2',
        title: 'Product Designer',
        salary: '$90k - $120k',
        location: 'Toronto, Canada',
        postBy: "Priya"
    },
    {
        id: '3',
        title: 'Product Analist',
        salary: '$90k - $120k',
        location: 'Toronto, Canada',
        postBy: "Ankon"
    },
    {
        id: '4',
        title: 'Product Devloper',
        salary: '$90k - $120k',
        location: 'Toronto, Canada',
        postBy: "Patha"
    },
    {
        id: '5',
        title: 'Product Marketing',
        salary: '$90k - $120k',
        location: 'Toronto, Canada',
        postBy: "Priyanka"
    },
    {
        id: '6',
        title: 'Product Marketing',
        salary: '$90k - $120k',
        location: 'Toronto, Canada',
        postBy: "Avvek"
    },
    {
        id: '7',
        title: 'Product Marketing',
        salary: '$90k - $120k',
        location: 'Toronto, Canada',
        postBy: "Subho"
    },
];

const getRandomColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
};

const JobItem = ({ title, salary, location, }) => (
    <View style={{ backgroundColor: getRandomColor(), padding: 10, borderRadius: 8, height: "auto" }} >
        <View style={styles.jobInfo}>
            <Text style={styles.jobTitle}>{title}</Text>
            <Text style={styles.jobSalary}>{salary}</Text>
            <Text style={styles.jobLocation}>{location}</Text>
        </View>
    </View>
);

const HomeScreen = ({ route, navigation }) => {
    const { locationDetails } = useSelector((state) => state.user)
    const handleJobPress = (item) => {
        navigation.navigate('JobDetails', { job: item });
    };

    return (
        <Box style={{ flex: 1, paddingHorizontal: 20, paddingVertical: 5 }}>
            <View style={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
                <View style={{ display: "flex", flexDirection: "row", alignItems: "center", gap: 5 }}>
                    <TouchableOpacity onPress={() => { navigation.navigate('chooselocation') }}>
                        <Ionicons name='location-outline' size={30} /></TouchableOpacity>
                    <View style={{ paddingTop: 10, width: "70%" }}>
                        <Text numberOfLines={1} ellipsizeMode="tail" style={styles.locationHeader}>{locationDetails[0]?.formattedAddress}</Text>
                    </View>
                </View>
                <View style={{ display: "flex", flexDirection: "row", alignItems: "center", gap: 5 }}>
                    <TouchableOpacity onPress={() => navigation.navigate('Notification')}><MaterialIcons name='notifications-none' size={30} /></TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('Profile')}><Image source={require('../../assets/profile.jpg')} style={styles.profileImage} /></TouchableOpacity>
                </View>
            </View>
            <View style={{ marginTop: 4 }}>
                <Searchbar placeholder='Search Job' />
            </View>
            <View style={{ flex: 1.5 }}>
                <Text style={styles.header}>Recent Search</Text>
                <FlatList
                    horizontal={true}
                    data={jobsData}
                    keyExtractor={(item) => item.id}
                    ItemSeparatorComponent={() => <View style={styles.separator} />}
                    showsHorizontalScrollIndicator={false}
                    renderItem={({ item }) => (
                        <TouchableOpacity onPress={() => handleJobPress(item)}>
                            {/* <JobItem
                                title={item.title}
                                salary={item.salary}
                                location={item.location}
                            /> */}
                            <RecentJobCard />
                        </TouchableOpacity>
                    )}
                />
            </View>
            <View style={styles.container}>
                <TouchableOpacity onPress={() => navigation.navigate("AllJobsScreen")}>
                    <Text style={styles.header}>Popular Jobs</Text>
                </TouchableOpacity>
                <FlatList
                    data={jobsData}
                    keyExtractor={(item) => item.id}
                    ItemSeparatorComponent={() => <View style={styles.separator1} />}
                    showsVerticalScrollIndicator={false}
                    renderItem={({ item }) => (
                        <TouchableOpacity onPress={() => handleJobPress(item)}>
                            {/* <JobItem
                                title={item.title}
                                salary={item.salary}
                                location={item.location}
                            /> */}
                            <JobCard title={item.title} salary={item.salary} location={item.location} borderColor={generateSimilarColor('#3b8f43')} />
                        </TouchableOpacity>
                    )}
                />
            </View>
        </Box>
    );
};


const styles = StyleSheet.create({
    container: {
        flex: 4,
        // backgroundColor: '#fff',
    },
    header: {
        fontSize: 24,
        fontWeight: 'bold',
        padding: 20,
    },
    jobItem: {
        flexDirection: 'row',
        padding: 20,
        alignItems: 'center',
    },
    jobIcon: {
        width: 50,
        height: 50,
        marginRight: 20,
    },
    jobInfo: {
        // flex: 1,
    },
    jobTitle: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    jobSalary: {
        fontSize: 16,
        color: '#666',
    },
    jobLocation: {
        fontSize: 14,
        color: '#999',
    },
    separator: {
        width: 20, // This is the spacing between items
    },
    separator1: {
        height: 20, // This is the spacing between items
    },
    locationHeader: {
        fontSize: 16,
        fontWeight: 'bold',
        paddingVertical: 10,
    },
    profileImage: {
        marginTop: 4,
        width: 40,
        height: 40,
        borderRadius: 20,
        borderWidth: 1,
        borderColor: "#3b8f43"
    }
});

export default HomeScreen;