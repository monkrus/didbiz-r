import { Link } from "expo-router";
import { View, Text, Button } from "react-native";

export default function LoginScreen() {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center", gap: 12 }}>
      <Text style={{ fontSize: 22, fontWeight: "600" }}>Login</Text>
      {/* Replace this Link with real sign-in later */}
      <Link href="/main" asChild>
        <Button title="Enter app (temp)" />
      </Link>
    </View>
  );
}
