import { Text, StyleSheet } from 'react-native';
import Screen from '../../src/components/Screen';

export default function MyCard() {
  return (
    <Screen>
      <Text style={styles.h1}>My Card</Text>
      <Text style={styles.p}>
        In Step 3, this will show your live card from Firestore (or a local draft if offline).
      </Text>
    </Screen>
  );
}

const styles = StyleSheet.create({
  h1: { color: '#fff', fontSize: 20, fontWeight: '700' },
  p: { color: '#bbb' }
});
