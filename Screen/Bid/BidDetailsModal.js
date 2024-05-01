import React from 'react';
import { Modal, View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const BidDetailsModal = ({ visible, onClose, bid }) => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}
    >
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <Text style={styles.modalItem}>Name: {bid.name}</Text>
          <Text style={styles.modalItem}>Bid Amount: {bid.bidAmount}</Text>
          <Text style={styles.modalItem}>Participation Amount: {bid.participationAmount}</Text>
          <Text style={styles.modalItem}>Number of Participants: {bid.participants}</Text>
          <Text style={styles.modalItem}>Time Remaining: {bid.timeRemainingFormatted}</Text>
          <TouchableOpacity onPress={onClose} style={styles.closeButton}>
            <Text>Close</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    width: '80%',
    alignItems: 'center',
  },
  modalItem: {
    fontSize: 16,
    marginVertical: 5,
  },
  closeButton: {
    marginTop: 20,
    backgroundColor: '#2196F3',
    padding: 10,
    borderRadius: 5,
  },
});

export default BidDetailsModal;
