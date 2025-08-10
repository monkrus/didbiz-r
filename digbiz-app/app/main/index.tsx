import { Link } from 'expo-router';
import { Text, View, StyleSheet } from 'react-native';
import Screen from '../../src/components/Screen';

export default function MainHome() {
  return (
    <Screen>
      <Text style={styles.h1}>Main</Text>
      <View style={styles.grid}>
        <Link style={styles.card} href="/main/card"><Text style={styles.cardText}>My Card</Text></Link>
        <Link style={styles.card} href="/main/edit"><Text style={styles.cardText}>Edit Card</Text></Link>
        <Link style={styles.card} href="/main/share"><Text style={styles.cardText}>Share (QR)</Text></Link>
        <Link style={styles.card} href="/main/scan"><Text style={styles.cardText}>Scan QR</Text></Link>
        <Link style={styles.card} href="/main/contacts"><Text style={styles.cardText}>Contacts</Text></Link>
      </View>
      <Text style={styles.note}>
        These screens are stubs now. In Step 2–3 we’ll wire Firebase Auth + Firestore and real logic.
      </Text>
    </Screen>
  );
}

const styles = StyleSheet.create({
  h1: { color: '#fff', fontSize: 22, fontWeight: '700' },
  grid: { flexDirection: 'row', flexWrap: 'wrap', gap: 12 },
  card: { backgroundColor: '#1F2937', padding: 16, borderRadius: 12, minWidth: '46%' },
  cardText: { color: '#fff', fontWeight: '600' },
  note: { color: '#888', marginTop: 12 }
});
