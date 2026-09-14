import { Link, useRouter } from 'expo-router';
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { useHabits } from '../../src/context/HabitsContext';

export default function TodayScreen() {
  const router = useRouter();
  const { habits } = useHabits();

  return (
    <ScrollView contentContainerStyle={styles.container} showsVerticalScrollIndicator={false}>
      <View style={styles.header}>
        <View>
          <Text style={styles.eyebrow}>TU RUTINA DE HOY</Text>
          <Text style={styles.title}>Mis hábitos</Text>
          <Text style={styles.description}>Cada elección cuenta.</Text>
        </View>
        <View style={styles.counter}>
          <Text style={styles.counterNumber}>{habits.length}</Text>
          <Text style={styles.counterText}>hábitos</Text>
        </View>
      </View>

      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>Para hoy</Text>
        <Text style={styles.sectionSubtitle}>{habits.length} pendientes</Text>
      </View>

      {habits.map((habit) => (
        <View style={styles.card} key={habit.id}>
          <View style={styles.iconContainer}><Text style={styles.icon}>{habit.icon}</Text></View>
          <View style={styles.habitInfo}>
            <Text style={styles.habitName} numberOfLines={1}>{habit.name}</Text>
            <Text style={styles.goal}>{habit.goal}</Text>
          </View>
          <Pressable
            style={({ pressed }) => [styles.detailButton, pressed && styles.buttonPressed]}
            onPress={() => router.push({ pathname: '/habitos/[id]', params: { id: habit.id } })}
          >
            <Text style={styles.detailText}>Ver</Text>
            <Text style={styles.arrow}>{'\u2192'}</Text>
          </Pressable>
        </View>
      ))}

      <Link href="/modal" asChild>
        <Pressable style={({ pressed }) => [styles.createButton, pressed && styles.buttonPressed]}>
          <View style={styles.plusCircle}><Text style={styles.plus}>+</Text></View>
          <View><Text style={styles.createTitle}>Crear nuevo hábito</Text><Text style={styles.createSubtitle}>Añade una meta a tu rutina</Text></View>
        </Pressable>
      </Link>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flexGrow: 1, alignItems: 'center', gap: 12, padding: 24, paddingTop: 34, backgroundColor: '#081A2B' },
  header: { width: '100%', maxWidth: 920, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 },
  eyebrow: { color: '#2DE2C5', fontSize: 11, fontWeight: '800', letterSpacing: 1.2 },
  title: { marginTop: 6, color: '#F5FBFF', fontSize: 32, fontWeight: '800' },
  description: { marginTop: 5, color: '#9CB2C5', fontSize: 15 },
  counter: { width: 58, height: 58, borderRadius: 18, backgroundColor: '#146B78', alignItems: 'center', justifyContent: 'center' },
  counterNumber: { color: '#FFFFFF', fontSize: 21, fontWeight: '800' },
  counterText: { color: '#C5F8F0', fontSize: 10, fontWeight: '700' },
  sectionHeader: { width: '100%', maxWidth: 920, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 4, marginBottom: 2 },
  sectionTitle: { color: '#F5FBFF', fontSize: 20, fontWeight: '800' },
  sectionSubtitle: { color: '#7F9AAF', fontSize: 13, fontWeight: '600' },
  card: { width: '100%', maxWidth: 920, minHeight: 68, padding: 12, borderRadius: 18, backgroundColor: '#102B40', borderWidth: 1, borderColor: '#1B3D54', flexDirection: 'row', alignItems: 'center' },
  iconContainer: { width: 40, height: 40, borderRadius: 13, backgroundColor: '#163A51', alignItems: 'center', justifyContent: 'center', marginRight: 12 },
  icon: { fontSize: 20 },
  habitInfo: { flex: 1, minWidth: 0 },
  habitName: { color: '#F5FBFF', fontSize: 16, fontWeight: '800' },
  goal: { marginTop: 3, color: '#8FA9BC', fontSize: 12 },
  detailButton: { flexDirection: 'row', alignItems: 'center', gap: 4, paddingHorizontal: 12, paddingVertical: 10, borderRadius: 12, backgroundColor: '#146B78', marginLeft: 10 },
  detailText: { color: '#E5FFFB', fontSize: 12, fontWeight: '800' },
  arrow: { color: '#2DE2C5', fontSize: 15, fontWeight: '800' },
  createButton: { width: '100%', maxWidth: 920, marginTop: 10, padding: 16, borderRadius: 18, backgroundColor: '#1A4058', flexDirection: 'row', alignItems: 'center' },
  plusCircle: { width: 40, height: 40, borderRadius: 13, backgroundColor: '#2DE2C5', alignItems: 'center', justifyContent: 'center', marginRight: 12 },
  plus: { color: '#082033', fontSize: 25, fontWeight: '500', marginTop: -2 },
  createTitle: { color: '#FFFFFF', fontSize: 15, fontWeight: '800' },
  createSubtitle: { color: '#A9C1D2', fontSize: 12, marginTop: 3 },
  buttonPressed: { opacity: 0.72, transform: [{ scale: 0.98 }] }
});
