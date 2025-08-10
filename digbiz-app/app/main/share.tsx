import { Text, StyleSheet } from 'react-native';
import Screen from '../../src/components/Screen';

export default function ShareQR() {
  return (
    <Screen>
      <Text style={styles.h1}>Share (QR)</Text>
      <Text style={styles.p}>
        Step 4: generate a QR containing your card id (or a short link) via react-native-qrcode-svg.
      </Text>
    </Screen>
  );
}

const styles = StyleSheet.create({
  h1: { color: '#fff', fontSize: 20, fontWeight: '700' },
  p: { color: '#bbb' }
});
