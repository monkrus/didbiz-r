// lib/firebase.ts
import { Platform } from "react-native";
import Constants from "expo-constants";
import { initializeApp, getApps } from "firebase/app";
import { getAuth, initializeAuth, User } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

type FirebaseExtra = {
  apiKey: string;
  authDomain?: string;
  projectId: string;
  storageBucket?: string;
  messagingSenderId?: string;
  appId: string;
  measurementId?: string;
};

// 1) Prefer values injected by app.config.ts -> extra.firebase
// 2) Fallback to raw process.env (useful if Constants is undefined on web)
const fromExtra =
  (Constants.expoConfig?.extra?.firebase as Partial<FirebaseExtra>) ??
  (Constants.manifest2?.extra?.firebase as Partial<FirebaseExtra>) ??
  {};

const fromEnv: Partial<FirebaseExtra> = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID,
  measurementId: process.env.FIREBASE_MEASUREMENT_ID,
};

const firebaseConfig = {
  ...fromEnv,
  ...fromExtra, // extra overrides env if present
} as FirebaseExtra;

// TEMP sanity log (remove after it works)
console.log("Firebase cfg:", {
  apiKeyStart: firebaseConfig?.apiKey?.slice(0, 6),
  projectId: firebaseConfig?.projectId,
  storageBucket: firebaseConfig?.storageBucket,
});

if (!firebaseConfig?.apiKey || !firebaseConfig?.projectId || !firebaseConfig?.appId) {
  throw new Error("Firebase config missing. Check .env (in digbiz-app/) and app.config.ts");
}

// Single app instance
const app = getApps().length ? getApps()[0] : initializeApp(firebaseConfig);

// Start with default auth; add native persistence on iOS/Android
let auth = getAuth(app);
if (Platform.OS !== "web") {
  try {
    // lazy‑require so web bundling doesn’t choke
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const { default: AsyncStorage } = require("@react-native-async-storage/async-storage");
    // Try v12 path first, then older fallback
    let getReactNativePersistence: ((s: unknown) => unknown) | undefined;
    try {
      // eslint-disable-next-line @typescript-eslint/no-var-requires
      getReactNativePersistence = require("firebase/auth/react-native").getReactNativePersistence;
    } catch {
      try {
        // eslint-disable-next-line @typescript-eslint/no-var-requires
        getReactNativePersistence = require("firebase/auth").getReactNativePersistence;
      } catch {}
    }
    if (getReactNativePersistence) {
      // @ts-expect-error runtime function type
      auth = initializeAuth(app, { persistence: getReactNativePersistence(AsyncStorage) });
    } else {
      auth = initializeAuth(app, { persistence: undefined as unknown as never });
    }
  } catch (e) {
    console.log("Auth native persistence init skipped:", e);
  }
}

const db = getFirestore(app);
const storage = getStorage(app);

export const getCurrentUser = (): Promise<User | null> =>
  new Promise((resolve) => {
    const unsub = auth.onAuthStateChanged((u) => {
      resolve(u);
      unsub();
    });
  });

export { app, auth, db, storage };
