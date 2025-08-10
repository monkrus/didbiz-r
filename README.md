# Digital Business Card App — Modern B2B (Expo + Firebase)

## A production‑ready MVP. Built with Expo + React Native + Expo Router + Firebase (Auth + Firestore + Storage), React Native Paper for UI, and QR code sharing. Cards stay up‑to‑date (sync via Firestore), are trackable (view analytics), and shareable via deep link + QR.

# 1. Create a new Expo Router project
npx create-expo-app@latest digbiz-app -t expo-router --npm
cd digbiz-app

# 2. Install deps
npm i firebase react-native-paper react-native-qrcode-svg zod
npm i -D @types/react-native-qrcode-svg

# 3. Expo modules we use are in the SDK already; ensure typescript
npx expo install expo-linking expo-constants expo-device

# 4. Start
npm run start



