export type Task = {
  id: string;
  title: string;
  completed: boolean;
};

const TASKS: Task[] = [
  { id: '1', title: 'Zrobić projekt RN', completed: false },
  { id: '2', title: 'Zrozumieć CQRS', completed: true },
];

export function getTasks(): Task[] {
  return TASKS;
}
