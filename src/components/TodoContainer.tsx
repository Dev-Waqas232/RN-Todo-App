/* eslint-disable prettier/prettier */
import React from 'react';
import {View, StyleSheet, FlatList} from 'react-native';
import TodoTile from './TodoTile';

const TodoContainer = () => {
  const DATA = [
    {id: 1, title: 'First Task', isCompleted: false},
    {id: 2, title: 'Second Task', isCompleted: true},
    {id: 3, title: 'Third Task', isCompleted: false},
    {id: 4, title: '4th Task', isCompleted: false},
    {id: 5, title: '5th Task', isCompleted: true},
  ];

  return (
    <View style={styles.todoContainer}>
      <FlatList
        style={styles.todoList}
        data={DATA}
        renderItem={({item}) => (
          <TodoTile
            id={item.id}
            isCompleted={item.isCompleted}
            title={item.title}
          />
        )}
      />
    </View>
  );
};

export default TodoContainer;

const styles = StyleSheet.create({
  todoContainer: {
    backgroundColor: 'yellow',
    flex: 1,
  },
  todoList: {
    marginTop: 16,
  },
});
