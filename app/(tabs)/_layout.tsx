import { Tabs } from 'expo-router';
import { Text } from 'react-native';

function TabIcon({ symbol, focused }: { symbol: string; focused: boolean }) {
  return <Text style={{ fontSize: 19, opacity: focused ? 1 : 0.55 }}>{symbol}</Text>;
}

export default function TabsLayout() {
  return (
    <Tabs screenOptions={{ headerShown: false, tabBarActiveTintColor: '#2DE2C5', tabBarInactiveTintColor: '#7F9AAF', tabBarStyle: { backgroundColor: '#0D2235', borderTopColor: '#1C3A50', height: 66, paddingTop: 8 }, tabBarLabelStyle: { fontSize: 12, fontWeight: '700' } }}>
      <Tabs.Screen name="index" options={{ title: 'Hoy', tabBarIcon: ({ focused }) => <TabIcon symbol="✓" focused={focused} /> }} />
      <Tabs.Screen name="progreso" options={{ title: 'Progreso', tabBarIcon: ({ focused }) => <TabIcon symbol="↗" focused={focused} /> }} />
      <Tabs.Screen name="perfil" options={{ title: 'Perfil', tabBarIcon: ({ focused }) => <TabIcon symbol="●" focused={focused} /> }} />
    </Tabs>
  );
}
