import { ReactNode } from 'react';
import { SafeAreaView, View, StyleSheet } from 'react-native';

export default function Screen({ children }: { children: ReactNode }) {
  return (
    <SafeAreaView style={styles.safe}>
      <View style={styles.container}>{children}</View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: '#0B0B0B' },
  container: { flex: 1, padding: 16, gap: 16 }
});
