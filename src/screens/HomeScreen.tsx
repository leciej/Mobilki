import React from 'react';
import { SafeAreaView, Text, StyleSheet } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/AppNavigator';
import { PrimaryButton } from '../components/PrimaryButton';
import { Card } from '../components/Card';
import { getTasks, type Task } from '../features/tasks/queries';
import { addTask } from '../features/tasks/commands';

type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;

export function HomeScreen() {
  const [tasks, setTasks] = React.useState<Task[]>(getTasks());

  const handleAddTask = () => {
    addTask('Nowy task');
    setTasks(getTasks());
  };

  return (
    <SafeAreaView>
      {tasks.map(task => (
        <Text key={task.id}>
          {task.completed ? '✅' : '⬜'} {task.title}
        </Text>
      ))}

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
