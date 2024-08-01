/* eslint-disable prettier/prettier */
import React from 'react';
import {StyleSheet, View, Text, Platform} from 'react-native';

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
    backgroundColor: '#f0e32b',
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
      },
      android: {
        elevation: 5,
      },
    }),
  },
  title: {
    fontWeight: '800',
    fontSize: 20,
  },
});
