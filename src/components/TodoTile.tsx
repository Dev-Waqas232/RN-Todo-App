/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

type TodoTileProps = {
  title: string;
  id: number;
  isCompleted: boolean;
};

const TodoTile = ({id, isCompleted, title}: TodoTileProps) => {
  return (
    <View style={styles.todoTile}>
      <Text style={isCompleted ? styles.todoTileCompleted : styles.todoTitle}>
        {title}
      </Text>
    </View>
  );
};

export default TodoTile;

const styles = StyleSheet.create({
  todoTile: {
    width: '80%',
    paddingVertical: 24,
    marginHorizontal: 'auto',
    backgroundColor: '#f0e32b',
    marginBottom: 16,
    borderRadius: 12,
    paddingHorizontal: 16,
  },
  todoTitle: {
    fontStyle: 'italic',
    fontSize: 18,
  },
  todoTileCompleted: {
    fontStyle: 'italic',
    fontSize: 18,
    textDecorationLine: 'line-through',
  },
});
