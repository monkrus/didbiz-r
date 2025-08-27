// app/main/index.tsx
import { Link } from "expo-router";
import { View, Text, StyleSheet, Button } from "react-native";
import { useEffect } from "react";
import { doc, getDoc } from "firebase/firestore";
import { db, auth } from "../lib/firebase";   // ← relative import
import { signOut } from "../lib/auth";         // ← relative import

export default function HomeScreen() {
  useEffect(() => {
    (async () => {
      try {
        const snap = await getDoc(doc(db, "_test", "ok"));
        console.log("✅ Firestore reachable", snap.exists());
      } catch (e) {
        console.log("❌ Firestore error", e);
      }
    })();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Home</Text>
      <Text style={{ marginBottom: 8 }}>UID: {auth.currentUser?.uid ?? "none"}</Text>

      <Link href="/main/my-card" style={styles.link}>My Card</Link>
      <Link href="/main/contacts" style={styles.link}>Contacts</Link>
      <Link href="/main/scan" style={styles.link}>Scan</Link>
      <Link href="/main/share" style={styles.link}>Share</Link>

      <View style={{ height: 16 }} />
      <Button title="Sign out" onPress={() => signOut()} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: "center", justifyContent: "center", gap: 8 },
  title: { fontSize: 22, fontWeight: "600" },
  link: { color: "#007AFF", fontSize: 16, paddingVertical: 4 },
});
