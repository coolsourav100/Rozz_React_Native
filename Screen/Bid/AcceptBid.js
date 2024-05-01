import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

const AcceptedBid = () => {
  // Sample data
  const cards = [
    {
      id: '1',
      bid: "Work for 1 day 600 rupees",
      details: "The description of work",
      bidAmount: 550,
      status: "Pending"
    },
    {
      id: '2',
      bid: "Work for 2 days 1200 rupees",
      details: "The description of work",
      bidAmount: 1100,
      status: "Pending"
    },
    // Add more cards as needed
  ];

  // Render each card
  const renderItem = ({ item }) => (
    <View style={styles.card}>
      <Text style={styles.bid}>{item.bid}</Text>
      <Text style={styles.details}>{item.details}</Text>
      <Text style={styles.bidAmount}>Bid Amount: ₹{item.bidAmount}</Text>
      <Text style={styles.status}>Status: {item.status}</Text>
    </View>
  );

  return (
    <FlatList
      data={cards}
      renderItem={renderItem}
      keyExtractor={item => item.id}
    />
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 10,
    borderRadius: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
  },
  bid: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  details: {
    fontSize: 16,
    color: '#666',
    marginTop: 5,
  },
  bidAmount: {
    fontSize: 16,
    color: '#333',
    marginTop: 5,
  },
  status: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'blue',
    marginTop: 5,
  }
});

export default AcceptedBid;
