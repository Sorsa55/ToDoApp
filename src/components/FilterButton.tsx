import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

type Filter = 'all' | 'active' | 'completed';

interface Props {
    current: Filter;
    setFilter: (filter: Filter) => void;
}

export default function FilterButton({ current, setFilter }: Props) {
    return (
        <View style={styles.container}>
            {['all', 'active', 'completed'].map((filter =>
                <TouchableOpacity
                key={filter}
                onPress={() => setFilter(filter as Filter)}
                style={[
                    styles.button,
                    current === filter && styles.activeButton,
                ]}>
                    <Text style={styles.text}>{filter}</Text>
                </TouchableOpacity>
            ))}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        padding: 12,
    },
    button: { 
        padding: 8,
    },
    activeButton: {
        borderBottomWidth: 2,
    },
    text: {
        fontSize: 16,
    },
});
