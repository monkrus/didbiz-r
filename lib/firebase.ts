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

const firebaseConfig =
  (Constants.expoConfig?.extra?.firebase as FirebaseExtra) ??
  (Constants.manifest2?.extra?.firebase as FirebaseExtra);

if (!firebaseConfig?.apiKey || !firebaseConfig?.projectId || !firebaseConfig?.appId) {
  throw new Error("Firebase config missing. Check .env and app.config.ts");
}

const app = getApps().length ? getApps()[0] : initializeApp(firebaseConfig);

// Start with default auth
let auth = getAuth(app);

// On native, enable persistence using RN storage (handles v10–v12)
if (Platform.OS !== "web") {
  try {
    // lazy-require to avoid web bundling issues
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const { default: AsyncStorage } = require("@react-native-async-storage/async-storage");

    let getReactNativePersistence: ((storage: unknown) => unknown) | undefined;

    try {
      // Firebase v12+
      // eslint-disable-next-line @typescript-eslint/no-var-requires
      getReactNativePersistence =
        require("firebase/auth/react-native").getReactNativePersistence;
    } catch {
      try {
        // Older versions (v9–v11)
        // eslint-disable-next-line @typescript-eslint/no-var-requires
        getReactNativePersistence =
          require("firebase/auth").getReactNativePersistence;
      } catch {
        // ignore
      }
    }

    if (getReactNativePersistence) {
      
      auth = initializeAuth(app, {
        persistence: getReactNativePersistence(AsyncStorage) as any,
      });
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
