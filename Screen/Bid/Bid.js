import * as React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import AppliedBid from './AppliedBid';
import AcceptBid from './AcceptBid'; // Corrected typo from 'AccpectBid' to 'AcceptBid'
import RejectBid from './RejectBid';

const Bid = () => {
    const [selectedButton, setSelectedButton] = React.useState('Participate');

    return (
        <View style={{ flex: 1, paddingHorizontal: 20 }}>
            <View style={{ display: "flex", flexDirection: "row", justifyContent: "space-around" }}>
                <TouchableOpacity
                    style={selectedButton === 'Participate' ? styles.activeButton : styles.button}
                    onPress={() => setSelectedButton('Participate')}>
                    <Text style={styles.btnText}>Participate</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={selectedButton === 'Accepted' ? styles.activeButton : styles.button}
                    onPress={() => setSelectedButton('Accepted')}>
                    <Text style={styles.btnText}>Accepted</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={selectedButton === 'Rejected' ? styles.activeButton : styles.button}
                    onPress={() => setSelectedButton('Rejected')}>
                    <Text style={styles.btnText}>Rejected</Text>
                </TouchableOpacity>
            </View>
            {selectedButton === 'Participate' && <AppliedBid />}
            {selectedButton === 'Accepted' && <AcceptBid />}
            {selectedButton === 'Rejected' && <RejectBid />}
        </View>
    );
};

const styles = StyleSheet.create({
    button: {
        padding: 10,
        borderColor: "#000",
        borderWidth: 1,
        borderRadius: 12
    },
    activeButton: {
        padding: 10,
        borderColor: "#000",
        borderWidth: 1,
        borderRadius: 12,
        backgroundColor: '#ddd' // Change this color to any color you prefer for the active state
    },
    btnText: {
        fontSize: 16,
        paddingLeft: 20,
        paddingRight: 20
    }
});

export default Bid;