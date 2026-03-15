
import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function Header() {
    return (
        <View style={styles.header}>
            <Text style={styles.title}>ToDo App</Text>
        </View>
    );
}

const styles = StyleSheet.create({
  header: {
    paddingTop: 18,
    paddingBottom: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomWidth: 1,
    marginBottom: 16,
    backgroundColor: '#07113d',
    borderColor: '#d3d2d6',
  },

  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#c7c7ca',
  },
});