import { Text, StyleSheet } from 'react-native';
import Screen from '../../src/components/Screen';

export default function EditCard() {
  return (
    <Screen>
      <Text style={styles.h1}>Edit Card</Text>
      <Text style={styles.p}>
        In Step 3, we’ll build a validated form (zod) and sync to Firestore.
      </Text>
    </Screen>
  );
}

const styles = StyleSheet.create({
  h1: { color: '#fff', fontSize: 20, fontWeight: '700' },
  p: { color: '#bbb' }
});
