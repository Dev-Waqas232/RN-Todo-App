import React from 'react';
import {StatusBar, StyleSheet, Text, View} from 'react-native';

const App = () => {
  return (
    <>
      <StatusBar backgroundColor="yellow" barStyle="dark-content" />
      <View style={styles.container}>
        <Text style={styles.text}>Hello World!</Text>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  text: {
    textAlign: 'center',
  },
});

export default App;
