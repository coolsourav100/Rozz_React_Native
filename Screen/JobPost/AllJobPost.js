import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';

// Dummy data for posts
const postsData = [
    {
        id: 1,
        title: "Need Plumber",
        description: "My Sink has been broken, need to be fixed",
        bidAmount: "500",
        bidTiming: "2 hr",
        image: ["https://images.unsplash.com/photo-1593642634367-d91a135587b5",] // Example image from Unsplash
    },
    {
        id: 2,
        title: "New Product Launch",
        description: "Check out our latest product release!",
        bidAmount: "500",
        bidTiming: "2023-05-01T12:00:00Z",
        image: ["https://images.unsplash.com/photo-1593642634367-d91a135587b5",] // Example image from Unsplash
    },
    {
        id: 3,
        title: "Exclusive Discount Sale",
        description: "Don't miss our limited-time discount event!",
        bidAmount: "250",
        bidTiming: "2023-05-02T15:00:00Z",
        image: ["https://images.unsplash.com/photo-1593642634367-d91a135587b5",] // Example image from Unsplash
    },
    {
        id: 4,
        title: "Graphic Design Internship",
        description: "Seeking a creative and talented graphic designer to join our team for a 6-month internship.",
        bidAmount: "1200",
        bidTiming: "Monthly",
        image: ["https://images.unsplash.com/photo-1593642634367-d91a135587b5",] // Example image from Unsplash
    },
    {
        id: 5,
        title: "Web Developer Position",
        description: "Growing startup looking to hire a full-stack web developer with experience in React and Node.js.",
        bidAmount: "4500",
        bidTiming: "Monthly",
        image: ["https://images.unsplash.com/photo-1498050108023-c5249f4df085",] // Example image from Unsplash
    }
];

// PostCard component to display each post
const PostCard = ({ post }) => {
    const navigation = useNavigation();

    const renderImage = () => {
        if (post.image && post.image.length > 0) {
            if (post.image.length > 2) {
                return (
                    <View>
                        <Image source={post.image[1]} style={styles.image} />
                        <Text style={styles.moreImagesText}>+{post.image.length - 2} more</Text>
                    </View>
                );
            } else {
                return <Image source={post?.image[0]} style={styles.image} />;
            }
        }
        return null;
    };

    return (
        <TouchableOpacity onPress={() => navigation.navigate('PostDetails')}>
            <View style={styles.card}>
                <Text style={styles.title}>{post.title}</Text>
                <Text style={styles.description}>{post.description}</Text>
                <Text style={styles.bidAmount}>{post.bidAmount}</Text>
                <Text style={styles.bidTiming}>{post.bidTiming}</Text>
                {renderImage()}
                <Text style={styles.views}>{post.views} views</Text>
            </View>
        </TouchableOpacity>
    );
};

// AllPostsScreen component to display the list of posts
const AllJobPost = () => {

    return (
        <View style={styles.container}>
            <View style={{ position: "relative" }}>
                <View style={styles.header}>
                    <Text style={styles.headerTitle}>All Posts</Text>
                    <TouchableOpacity style={{ position: "absolute", right: 20, top: 15 }} onPress={() => navigation.navigate('AddPost')}>
                        <Ionicons name="add-circle-outline" size={44} color="#000" />
                    </TouchableOpacity>
                </View>
            </View>

            <FlatList
                data={postsData}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => <PostCard post={item} />}
            />
        </View>
    );
};

// Styles for the components
const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 20,
        position: "relative"
    },
    header: {
        display: "flex",
        flexDirection: 'row',
        justifyContent: "center",
        padding: 16,
    },
    headerTitle: {
        fontSize: 24,
        fontWeight: 'bold',

    },
    card: {
        backgroundColor: '#fff',
        padding: 16,
        marginVertical: 8,
        marginHorizontal: 16,
        borderRadius: 8,
        // Add shadow and other styles as needed to match your design
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    description: {
        fontSize: 14,
        color: '#333',
    },
    bidAmount: {
        fontSize: 16,
        color: '#666',
    },
    bidTiming: {
        fontSize: 14,
        color: '#999',
    },
    image: {
        width: '30%',
        height: 100,
        borderWidth: 1,
        borderColor: "#000000",
        resizeMode: 'cover'
    },
    // ... other styles you may need
});

export default AllJobPost;