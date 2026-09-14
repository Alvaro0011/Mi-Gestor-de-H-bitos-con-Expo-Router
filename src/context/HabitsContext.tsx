import { createContext, PropsWithChildren, useContext, useState } from 'react';

export type Habit = {
  id: string;
  icon: string;
  name: string;
  goal: string;
};

type HabitsContextValue = {
  habits: Habit[];
  addHabit: (name: string) => void;
  getHabitById: (id: string) => Habit | undefined;
};

const initialHabits: Habit[] = [
  { id: '42', icon: '📖', name: 'Leer 20 minutos', goal: '20 min diarios' },
  { id: '2', icon: '💧', name: 'Tomar agua', goal: '8 vasos' },
  { id: '3', icon: '🏃', name: 'Caminar', goal: '30 min diarios' },
  { id: '4', icon: '💻', name: 'Practicar programación', goal: '1 hora diaria' },
  { id: '5', icon: '🧘', name: 'Meditar', goal: '10 min diarios' },
  { id: '6', icon: '📚', name: 'Estudiar', goal: '2 horas diarias' }
];

const HabitsContext = createContext<HabitsContextValue | null>(null);

export function HabitsProvider({ children }: PropsWithChildren) {
  const [habits, setHabits] = useState(initialHabits);

  const addHabit = (name: string) => {
    setHabits((currentHabits) => [
      ...currentHabits,
      {
        id: String(Date.now()),
        icon: '✨',
        name,
        goal: 'Nueva meta'
      }
    ]);
  };

  const getHabitById = (id: string) =>
    habits.find((habit) => habit.id === id);

  return (
    <HabitsContext.Provider value={{ habits, addHabit, getHabitById }}>
      {children}
    </HabitsContext.Provider>
  );
}

export function useHabits() {
  const context = useContext(HabitsContext);

  if (!context) {
    throw new Error('useHabits debe usarse dentro de HabitsProvider');
  }

  return context;
}
