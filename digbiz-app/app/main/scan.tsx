import { Text, StyleSheet } from 'react-native';
import Screen from '../../src/components/Screen';

export default function ScanQR() {
  return (
    <Screen>
      <Text style={styles.h1}>Scan QR</Text>
      <Text style={styles.p}>
        Step 4: request camera permission and scan a QR to fetch a card & save it as a contact.
      </Text>
    </Screen>
  );
}

const styles = StyleSheet.create({
  h1: { color: '#fff', fontSize: 20, fontWeight: '700' },
  p: { color: '#bbb' }
});
