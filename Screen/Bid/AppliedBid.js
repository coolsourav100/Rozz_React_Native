import React, { useState } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import BidDetailsModal from './BidDetailsModal'; // Ensure this path is correct

const AppliedBid = () => {
  // Sample data
  const bids = [
    {
      id: '1',
      name: 'Bid 1',
      bidAmount: 600,
      participationAmount: 50,
      details: "Open work",
      participants: 10,
      timeRemaining: 3600 // Example time remaining in seconds
    },
    {
      id: '2',
      name: 'Bid 2',
      bidAmount: 1200,
      participationAmount: 75,
      details: "Open work",
      participants: 8,
      timeRemaining: 7200 // Example time remaining in seconds
    },
    // Add more bids as needed
  ];

  // State for selected bid and modal visibility
  const [selectedBid, setSelectedBid] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);

  // Function to open the modal with the selected bid
  const openModal = (bid) => {
    setSelectedBid({
      ...bid,
      timeRemainingFormatted: formatTime(bid.timeRemaining),
    });
    setModalVisible(true);
  };

  // Function to close the modal
  const closeModal = () => {
    setModalVisible(false);
  };

  // Format the time remaining in seconds into H:M:S
  const formatTime = (seconds) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secondsLeft = seconds % 60;
    return `${hours}h ${minutes}m ${secondsLeft}s`;
  };

  // Render each bid card
  const renderItem = ({ item }) => (
    <View style={styles.card}>
      <TouchableOpacity onPress={() => openModal(item)}>
        <Text style={styles.bid}>{item.name}</Text>
        <Text style={styles.details}>{item.details}</Text>
        <Text style={styles.bidAmount}>Bid Amount: ₹{item.bidAmount}</Text>
        <Text style={styles.bidAmount}>Participation Amount: ₹{item.participationAmount}</Text>
        <Text style={styles.bidAmount}>Number of Participants: {item.participants}</Text>
        <Text style={styles.status}>Status: Pending</Text>
        <Text style={styles.status}>Remaining Time: {formatTime(item.timeRemaining)}</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={bids}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
      {selectedBid && (
        <BidDetailsModal
          visible={modalVisible}
          onClose={closeModal}
          bid={selectedBid}
        />
      )}
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

export default AppliedBid;
