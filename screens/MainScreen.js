import React, { useState } from 'react';
import { Dimensions, StyleSheet, Text, View, ScrollView, TouchableOpacity, Alert } from 'react-native';

// Helper function to format dates
const formatDate = (date) => {
  const newDate = new Date(date);
  return `${newDate.getDate()}/${newDate.getMonth() + 1}/${newDate.getFullYear()}`;
};

export default function MainScreen({ navigation }) {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: 'Complete React Native Tutorial',
      description: 'Finish up the tutorial to learn more about React Native.',
      dueDate: '2024-11-10',
      isCompleted: false,
    },
    {
      id: 2,
      title: 'Grocery Shopping',
      description: 'Buy groceries for the week.',
      dueDate: '2024-11-12',
      isCompleted: false,
    },
    {
      id: 3,
      title: 'Finish Project Proposal',
      description: 'Finalize the proposal for the new project.',
      dueDate: '2024-11-15',
      isCompleted: false,
    },
  ]);

  const handleCompleteTask = (id) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, isCompleted: !task.isCompleted } : task
      )
    );
    Alert.alert('Task Updated', 'You have updated the task status.');
  };

  const handleAddTask = () => {
    navigation.navigate('AddTask');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Task List</Text>

      <ScrollView style={styles.taskList}>
        {tasks.map((task) => (
          <View
            key={task.id}
            style={[styles.taskCard, task.isCompleted && styles.completedTask]}>
            <Text style={styles.taskTitle}>{task.title}</Text>
            <Text style={styles.taskDescription}>{task.description}</Text>
            <Text style={styles.taskDueDate}>Due: {formatDate(task.dueDate)}</Text>

            {/* Mark task as completed */}
            <TouchableOpacity
              style={styles.completeButton}
              onPress={() => handleCompleteTask(task.id)}>
              <Text style={styles.buttonText}>
                {task.isCompleted ? 'Mark as Incomplete' : 'Mark as Completed'}
              </Text>
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>

      {/* Floating button to add new task */}
      <TouchableOpacity style={styles.addButton} onPress={handleAddTask}>
        <Text style={styles.addButtonText}>+</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 20,
    textAlign: 'center',
  },
  taskList: {
    flex: 1,
  },
  taskCard: {
    backgroundColor: '#f9f9f9',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#ddd',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 2,
  },
  completedTask: {
    backgroundColor: '#e0ffe0',
    borderColor: '#b6fbb6',
  },
  taskTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  taskDescription: {
    fontSize: 14,
    color: '#666',
    marginTop: 5,
  },
  taskDueDate: {
    fontSize: 12,
    color: '#888',
    marginTop: 5,
  },
  completeButton: {
    marginTop: 10,
    backgroundColor: '#4CAF50',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  addButton: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    backgroundColor: '#007bff',
    borderRadius: 30,
    width: 60,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 5,
  },
  addButtonText: {
    fontSize: 30,
    color: '#fff',
    fontWeight: 'bold',
  },
});
