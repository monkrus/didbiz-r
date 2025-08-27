// app/auth/login.tsx
import React, { useEffect, useRef, useState } from "react";
import { View, Text, TextInput, Button, Alert } from "react-native";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema, type LoginInput } from "../../lib/validators/auth";
import { signInEmail, mapAuthError } from "../../lib/auth";
import { auth } from "../../lib/firebase";
import { onAuthStateChanged } from "firebase/auth";
import { Link, useRouter } from "expo-router";

export default function Login() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [checking, setChecking] = useState(true);
  const navigated = useRef(false);

  // If already signed in, leave immediately. Also listen for sign-in completion.
  useEffect(() => {
    // Fast path: current user already set (e.g., coming back)
    if (auth.currentUser && !navigated.current) {
      navigated.current = true;
      router.replace("/main");
      return;
    }

    const unsub = onAuthStateChanged(auth, (u) => {
      if (u && !navigated.current) {
        navigated.current = true;
        router.replace("/main");
      }
      setChecking(false);
    });
    return unsub;
  }, [router]);

  const { control, handleSubmit } = useForm<LoginInput>({
    resolver: zodResolver(loginSchema),
    defaultValues: { email: "", password: "" },
  });

  const onSubmit = handleSubmit(async ({ email, password }) => {
    try {
      setLoading(true);
      // No manual navigation here — the observer above will redirect on success
      await signInEmail(email, password);
    } catch (e: any) {
      Alert.alert("Sign in failed", mapAuthError(e?.code));
    } finally {
      setLoading(false);
    }
  });

  // Optional: keep the screen minimal while we check auth state once
  if (checking) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Checking session…</Text>
      </View>
    );
  }

  // If the observer already navigated, this won't render anyway.
  return (
    <View style={{ flex: 1, padding: 20, gap: 12, justifyContent: "center" }}>
      <Text style={{ fontSize: 22, fontWeight: "700", textAlign: "center" }}>Sign in</Text>

      <Controller
        control={control}
        name="email"
        render={({ field, fieldState }) => (
          <>
            <TextInput
              placeholder="Email"
              autoCapitalize="none"
              keyboardType="email-address"
              value={field.value}
              onChangeText={field.onChange}
              style={{ borderWidth: 1, borderColor: fieldState.error ? "crimson" : "#ccc", padding: 10, borderRadius: 8 }}
            />
            {fieldState.error && <Text style={{ color: "crimson" }}>{fieldState.error.message}</Text>}
          </>
        )}
      />

      <Controller
        control={control}
        name="password"
        render={({ field, fieldState }) => (
          <>
            <TextInput
              placeholder="Password"
              secureTextEntry
              value={field.value}
              onChangeText={field.onChange}
              style={{ borderWidth: 1, borderColor: fieldState.error ? "crimson" : "#ccc", padding: 10, borderRadius: 8 }}
            />
            {fieldState.error && <Text style={{ color: "crimson" }}>{fieldState.error.message}</Text>}
          </>
        )}
      />

      <Button title={loading ? "Signing in…" : "Sign in"} onPress={onSubmit} disabled={loading} />

      <View style={{ height: 8 }} />
      <Link href="/auth/signup">Create account</Link>
    </View>
  );
}
