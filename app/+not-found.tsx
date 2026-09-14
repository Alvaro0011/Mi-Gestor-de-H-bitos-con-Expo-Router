import { Link } from 'expo-router';
import { StyleSheet, Text, View } from 'react-native';

export default function NotFoundScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>404 · Pantalla no encontrada</Text>
      <Link href="/" style={styles.link}>Volver al inicio</Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', gap: 16 },
  title: { fontSize: 21, fontWeight: '700' },
  link: { fontSize: 16, color: '#2563eb' }
});
