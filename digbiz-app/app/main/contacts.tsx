import { Text, StyleSheet } from 'react-native';
import Screen from '../../src/components/Screen';

export default function Contacts() {
  return (
    <Screen>
      <Text style={styles.h1}>Contacts</Text>
      <Text style={styles.p}>
        Step 5: list contacts from Firestore with local cache (AsyncStorage) for offline.
      </Text>
    </Screen>
  );
}

const styles = StyleSheet.create({
  h1: { color: '#fff', fontSize: 20, fontWeight: '700' },
  p: { color: '#bbb' }
});
