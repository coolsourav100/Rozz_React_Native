import React, { useState } from 'react';
import { View, TextInput, StyleSheet, FlatList, Text, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements';

const AllJobsScreen = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [showFilters, setShowFilters] = useState(false);
    const [filters, setFilters] = useState(['Location', 'Salary', 'Type']);

    const handleSearch = text => {
        setSearchQuery(text);
        // Add search functionality here
    };

    const toggleFilters = () => {
        setShowFilters(!showFilters);
    };

    const renderFilter = ({ item }) => (
        <TouchableOpacity style={styles.filterItem}>
            <Text>{item}</Text>
        </TouchableOpacity>
    );

    return (
        <View style={styles.container}>
            <View style={styles.searchContainer}>
                <TextInput
                    style={styles.searchInput}
                    placeholder="Search jobs..."
                    onChangeText={handleSearch}
                    value={searchQuery}
                />
                <Icon
                    name='filter'
                    type='font-awesome'
                    onPress={toggleFilters}
                />
            </View>
            {showFilters && (
                <FlatList
                    data={filters}
                    renderItem={renderFilter}
                    keyExtractor={item => item}
                />
            )}
            {/* List of jobs can be rendered here using another FlatList or similar component */}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
    },
    searchContainer: {
        flexDirection: 'row',
        padding: 10,
        alignItems: 'center',
    },
    searchInput: {
        flex: 1,
        borderColor: '#ccc',
        borderWidth: 1,
        marginRight: 10,
        borderRadius: 5,
        paddingLeft: 10,
    },
    filterItem: {
        padding: 10,
        backgroundColor: '#f0f0f0',
        marginTop: 5,
    },
});

export default AllJobsScreen;