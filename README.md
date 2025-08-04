# B2B Digital Business Card App

A modern mobile app that allows startups and SMBs to share, manage, and sync digital business cards. Built with React Native, Firebase, and Expo, the app makes networking seamless using QR codes, NFC, and cloud syncing.

## 🚀 Features

- Create and customize digital business cards
- Share via QR code, NFC tap, or email
- Scan and import cards instantly
- Manage contacts with tags, notes, and search
- Cloud sync with Firebase (profile & contacts)
- Team/organization admin tools
- CRM & Google/Outlook integrations
- Secure login with Firebase Authentication
- Analytics on card views and shares

## 📱 Screens (in progress)

- 🧾 Edit Card
- 📤 Share Card (QR/NFC)
- 📷 Scan Contact
- 📇 Contact Manager
- 🛠️ Team Dashboard

## 🧰 Tech Stack

- **Frontend**: React Native + Expo + TypeScript
- **Backend**: Firebase (Auth, Firestore, Storage)
- **Libraries**: `react-native-qrcode-scanner`, `react-native-nfc-manager`, `shadcn/ui`
- **CI/CD**: GitHub Actions, Expo EAS Build
- **Monitoring**: Firebase Crashlytics, Sentry

## 🧪 Dev Scripts

```bash
npm install          # Install dependencies
npx expo start       # Start the development server
npx expo run:ios     # Run on iOS
npx expo run:android # Run on Android
