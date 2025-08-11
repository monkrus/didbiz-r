import { Link } from 'expo-router';
import { StyleSheet, Text, View, Pressable } from 'react-native';
import Screen from '../src/components/Screen';

export default function NotFoundScreen() {
  return (
    <Screen>
      <View style={styles.box}>
        <Text style={styles.h1}>404</Text>
        <Text style={styles.p}>This screen doesn’t exist.</Text>

        <Link href="/main" asChild>
          <Pressable style={styles.btn}>
            <Text style={styles.btnText}>Go to Main</Text>
          </Pressable>
        </Link>

        <Link href="/" style={styles.link}>Back to Welcome</Link>
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  box: { gap: 12 },
  h1: { color: '#fff', fontSize: 26, fontWeight: '800' },
  p: { color: '#9CA3AF' },
  btn: { backgroundColor: '#4F46E5', padding: 12, borderRadius: 10, alignItems: 'center' },
  btnText: { color: '#fff', fontWeight: '700' },
  link: { color: '#9CA3AF', textAlign: 'center' }
});

