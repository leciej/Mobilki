import type { Task } from '../queries';

let tasks: Task[] = [
  { id: '1', title: 'Zrobić projekt RN', completed: false },
  { id: '2', title: 'Zrozumieć CQRS', completed: true },
];

export function addTask(title: string): void {
  const newTask: Task = {
    id: Date.now().toString(),
    title,
    completed: false,
  };

  tasks = [...tasks, newTask];
}

export function getTasksSnapshot(): Task[] {
  return tasks;
}
