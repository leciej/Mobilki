import React from 'react';
import { SafeAreaView, Text, StyleSheet } from 'react-native';
import { TextInput } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/AppNavigator';
import { PrimaryButton } from '../components/PrimaryButton';
import { Card } from '../components/Card';
import { getTasks, type Task } from '../features/tasks/queries';
import { addTask } from '../features/tasks/commands';

type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;

export function HomeScreen() {
  const [tasks, setTasks] = React.useState<Task[]>(getTasks());
  const [title, setTitle] = React.useState('');

  const handleAddTask = () => {
    addTask(title);
    setTasks(getTasks());
    setTitle('');
  };

  return (
  <SafeAreaView style={styles.container}>
    <Text>TEST – HOME DZIAŁA</Text>

    {tasks.map(task => (
      <Text key={task.id}>
        {task.completed ? '✅' : '⬜'} {task.title}
      </Text>
    ))}

    <TextInput
      value={title}
      onChangeText={setTitle}
      placeholder="Wpisz treść taska"
      style={{
        borderWidth: 1,
        borderColor: '#ccc',
        padding: 8,
        marginVertical: 8,
      }}
    />

    <PrimaryButton title="Dodaj task" onPress={handleAddTask} />
  </SafeAreaView>
);
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    marginBottom: 8,
    fontWeight: '600',
  },
});
