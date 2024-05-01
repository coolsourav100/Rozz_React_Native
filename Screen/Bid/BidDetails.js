import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView, Button } from 'react-native';

const BidDetails = ({ route }) => {
  // Assuming you're using React Navigation and passing the bid details through the route params
  const { bid } = route.params;

  return (
    <ScrollView style={styles.container}>
      <View style={styles.profileContainer}>
        <Image source={{ uri: bid.profilePicture }} style={styles.profileImage} />
        <View style={styles.profileTextContainer}>
          <Text style={styles.name}>{bid.name}</Text>
          <Text style={styles.rating}>Rating: {bid.rating}</Text>
        </View>
      </View>
      <Text style={styles.description}>{bid.description}</Text>
      <Image source={{ uri: bid.photo }} style={styles.photo} />
      <Text style={styles.detail}>Duration: {bid.duration}</Text>
      <Text style={styles.detail}>Bid Amount: {bid.amount}</Text>
      <Text style={styles.detail}>Applicants: {bid.applicants}</Text>
      <View style={styles.buttonContainer}>
        <Button title="Participate" onPress={() => console.log('Participate pressed')} />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  profileContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },
  profileImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  profileTextContainer: {
    marginLeft: 10,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  rating: {
    fontSize: 16,
  },
  description: {
    fontSize: 16,
    padding: 10,
  },
  photo: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
  },
  detail: {
    fontSize: 16,
    padding: 10,
  },
  buttonContainer: {
    margin: 20,
  },
});

export default BidDetails;
