import { Stack } from 'expo-router';
import { HabitsProvider } from '../src/context/HabitsContext';

export default function RootLayout() {
  return (
    <HabitsProvider>
      <Stack screenOptions={{ headerStyle: { backgroundColor: '#0D2235' }, headerTintColor: '#F5FBFF', headerTitleStyle: { fontWeight: '800' }, contentStyle: { backgroundColor: '#081A2B' } }}>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="habitos/[id]" options={{ title: 'Detalle del hábito' }} />
        <Stack.Screen
          name="modal"
          options={{ presentation: 'modal', title: 'Nuevo hábito' }}
        />
      </Stack>
    </HabitsProvider>
  );
}
