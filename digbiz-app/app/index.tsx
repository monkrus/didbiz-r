import { Link } from 'expo-router';
import { Text, View, StyleSheet, Pressable } from 'react-native';
import Screen from '../src/components/Screen';

export default function Welcome() {
  return (
    <Screen>
      <View style={styles.hero}>
        <Text style={styles.title}>Digital Card Exchange</Text>
        <Text style={styles.subtitle}>
          B2B mobile app for startups — share your contact card via QR and save scanned contacts.
        </Text>

        <Link href="/main" asChild>
          <Pressable style={styles.cta}>
            <Text style={styles.ctaText}>Enter App</Text>
          </Pressable>
        </Link>
      </View>
      <Text style={styles.hint}>
        (Auth, Firestore, QR, and Scanner come next. This step just verifies your environment.)
      </Text>
    </Screen>
  );
}

const styles = StyleSheet.create({
  hero: { flex: 1, justifyContent: 'center', gap: 16 },
  title: { color: '#fff', fontSize: 28, fontWeight: '800' },
  subtitle: { color: '#bbb', fontSize: 16, lineHeight: 22 },
  cta: { backgroundColor: '#4F46E5', paddingVertical: 14, borderRadius: 12, alignItems: 'center' },
  ctaText: { color: '#fff', fontSize: 16, fontWeight: '700' },
  hint: { color: '#888', textAlign: 'center', marginBottom: 24 }
});
