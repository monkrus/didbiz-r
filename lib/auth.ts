// lib/auth.ts
import { auth } from "./firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut as fbSignOut,
  onAuthStateChanged,
  User,
} from "firebase/auth";

export async function signUpEmail(email: string, password: string) {
  const cred = await createUserWithEmailAndPassword(auth, email.trim(), password);
  return cred.user;
}

export async function signInEmail(email: string, password: string) {
  const cred = await signInWithEmailAndPassword(auth, email.trim(), password);
  return cred.user;
}

export async function signOut() {
  await fbSignOut(auth);
}

export function observeUser(cb: (u: User | null) => void) {
  return onAuthStateChanged(auth, cb);
}

// 🔹 friendly error mapper
export function mapAuthError(code?: string) {
  switch (code) {
    case "auth/email-already-in-use":
      return "That email is already registered";
    case "auth/invalid-email":
      return "Invalid email address";
    case "auth/weak-password":
      return "Password is too weak";
    case "auth/user-not-found":
    case "auth/wrong-password":
      return "Invalid email or password";
    default:
      return "Something went wrong. Please try again.";
  }
}
