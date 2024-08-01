import React from 'react';
import {StatusBar, StyleSheet, Text, View} from 'react-native';
import AppBar from './src/components/AppBar';

const App = () => {
  return (
    <>
      <StatusBar backgroundColor="#fad414" barStyle="dark-content" />
      <View style={styles.container}>
        <AppBar />

        <View>
          <Text>Todo Content List</Text>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
