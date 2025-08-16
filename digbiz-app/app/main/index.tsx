import { Link } from "expo-router";
import { View, Text } from "react-native";

export default function HomeScreen() {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center", gap: 8 }}>
      <Text style={{ fontSize: 22, fontWeight: "600" }}>Home</Text>
      <Link href="/main/my-card">My Card</Link>
      <Link href="/main/contacts">Contacts</Link>
      <Link href="/main/scan">Scan</Link>
      <Link href="/main/share">Share</Link>
    </View>
  );
}
