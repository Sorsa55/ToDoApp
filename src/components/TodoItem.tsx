import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { ToDo } from '../types/Todo';

interface Props {
    todo: ToDo;
    onToggle: () => void;
    onDelete: () => void;
}

export default function TodoItem({ todo, onToggle, onDelete }: Props) {
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={onToggle}>
                <Text style={[styles.text, todo.completed && styles.completed]}>
                    {todo.title}
                </Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={onDelete}>
                <Text style={styles.delete}>Delete</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 12,
        borderBottomWidth: 1,
    },
    text: {
        fontSize: 18,
    },
    completed: {
        textDecorationLine: 'line-through',
        color: 'gray',
    },
    delete: {
        color: 'red',
    },
});