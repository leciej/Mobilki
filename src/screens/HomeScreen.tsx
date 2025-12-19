import React from 'react';
import { SafeAreaView, Text, StyleSheet } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/AppNavigator';
import { PrimaryButton } from '../components/PrimaryButton';
import { Card } from '../components/Card';
import { getTasks, type Task } from '../features/tasks/queries';

type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;

export function HomeScreen({ navigation }: Props) {
  const tasks: Task[] = getTasks();
  return (
    <SafeAreaView style={styles.container}>
      <Card>
        <Text style={styles.title}>Mobilki 🚀</Text>
        <Text>Pierwszy własny ekran działa</Text>
        {tasks.map(task => (
          <Text key={task.id}>
            {task.completed ? '✅' : '⬜'} {task.title}
          </Text>
        ))}

        <PrimaryButton
          title="Przejdź do szczegółów"
          onPress={() => navigation.navigate('Details')}
        />
      </Card>
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
