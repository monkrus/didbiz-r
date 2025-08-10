import { Stack } from 'expo-router';

export default function RootLayout() {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
      }}
    >
      {/* Define routes via file names. See app/index.tsx, app/share.tsx, etc. */}
    </Stack>
  );
}
