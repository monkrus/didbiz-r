// src/lib/firebase.ts
import { initializeApp, getApps } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

function required<T extends string | undefined>(val: T, name: string): string {
  if (!val) throw new Error(`Missing env: ${name}`);
  return val;
}

const firebaseConfig = {
  apiKey: required(process.env.EXPO_PUBLIC_FIREBASE_API_KEY, 'EXPO_PUBLIC_FIREBASE_API_KEY'),
  authDomain: required(process.env.EXPO_PUBLIC_FIREBASE_AUTH_DOMAIN, 'EXPO_PUBLIC_FIREBASE_AUTH_DOMAIN'),
  projectId: required(process.env.EXPO_PUBLIC_FIREBASE_PROJECT_ID, 'EXPO_PUBLIC_FIREBASE_PROJECT_ID'),
  storageBucket: required(process.env.EXPO_PUBLIC_FIREBASE_STORAGE_BUCKET, 'EXPO_PUBLIC_FIREBASE_STORAGE_BUCKET'),
  messagingSenderId: required(process.env.EXPO_PUBLIC_FIREBASE_MESSAGING_SENDER_ID, 'EXPO_PUBLIC_FIREBASE_MESSAGING_SENDER_ID'),
  appId: required(process.env.EXPO_PUBLIC_FIREBASE_APP_ID, 'EXPO_PUBLIC_FIREBASE_APP_ID'),
};

// Avoid re-initializing in dev/hot-reload
const app = getApps()[0] ?? initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
