import React from 'react';
import {StatusBar, StyleSheet, View} from 'react-native';
import AppBar from './src/components/AppBar';
import TodoContainer from './src/components/TodoContainer';

const App = () => {
  return (
    <>
      <StatusBar backgroundColor="#f0e32b" barStyle="dark-content" />
      <View style={styles.container}>
        <AppBar />

        <TodoContainer />
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
