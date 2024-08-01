/* eslint-disable prettier/prettier */
import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

export default function AppBar() {
  return (
    <View style={styles.appBarContainer}>
      <Text style={styles.title}>TODO APP</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  appBarContainer: {
    height: '10%',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    backgroundColor: '#fad414',
  },
  title: {
    fontWeight: '800',
    fontSize: 20,
  },
});
