import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { Platform } from 'react-native';
import { AuthProvider } from '../src/lib/auth';

export default function RootLayout() {
  return (
    <AuthProvider>
      <StatusBar style={Platform.OS === 'android' ? 'light' : 'dark'} />
      <Stack
        screenOptions={{
          headerStyle: { backgroundColor: '#111' },
          headerTintColor: '#fff',
          headerTitleStyle: { fontWeight: '600' },
          contentStyle: { backgroundColor: '#0B0B0B' }
        }}
      />
    </AuthProvider>
  );
}
