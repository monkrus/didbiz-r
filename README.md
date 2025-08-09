# B2B Digital Business Card App

A modern mobile app that enables startups and small/medium businesses to create, share and manage digital business cards. Digital cards are always up-to-date, trackable and rich with content while also being eco-friendly and cost-effective.

This project is built with React Native, Expo and Firebase and follows an agile development process.

## 🚀 Features

**Create and customize cards** – Add personal details, company logo, photos and branding; choose from templates and update in real time.

**Multi-channel sharing** – Share via QR code or NFC tap, and export to Apple Wallet / Google Wallet, SMS or email.

**Lead capture & attachments** – Embed customizable lead-capture forms that feed directly into your CRM, and attach videos or files.

**Contact scanning & import** – Scan QR codes to import other cards instantly; batch scan paper cards using OCR (optional).

**Smart contact management** – Organize contacts with tags, notes and AI-powered reminders; automatic updates ensure details stay current.

**Analytics dashboard** – Track views, shares and conversion metrics; export reports for teams and clients.

**Team & admin tools** – Create company-wide templates, assign roles, revoke access and monitor usage; role-based access control and SOC 2-type security.

**Security & compliance** – Use AES-256 encryption at rest and TLS 1.2+ in transit, support SSO/MFA, implement phishing detection and adhere to GDPR/HIPAA/SOC 2 standards.

**Optional AR & interactive content** – Display 3D logos or product demos through augmented-reality overlays.

## 🧰 Tech Stack

**Frontend:** React Native (0.73+) with Expo SDK 51+, TypeScript and expo-router for routing.

**Camera & scanning:** expo-camera (CameraView) for QR/barcode scanning (the old expo-barcode-scanner is deprecated); react-native-nfc-manager for NFC read/write.

**UI:** shadcn/ui with optional NativeWind for Tailwind-style utilities.

**Backend:** Firebase (Authentication, Firestore, Storage, Functions). Optional backend API built with Express or NestJS for custom endpoints.

**DevOps:** GitHub Actions + Expo EAS for CI/CD; Jest and Detox/Maestro for testing; Firebase Analytics, Crashlytics and Sentry for monitoring.

## 🧾 Installation

**Prerequisites:** Node 16+, Yarn or npm, and the Expo CLI (`npm install -g expo-cli`). Create a Firebase project and gather your API keys.

### Clone the repository:

```bash
git clone https://github.com/your-org/digital-card-app.git
cd digital-card-app
```

### Install dependencies:

```bash
yarn install
# or
npm install
```

### Configure Firebase:

Create a `firebaseConfig.ts` file with your Firebase configuration and initialize Firebase (see Expo's Firebase guide for details). Add environment variables (API keys, Auth domain, etc.) to a `.env` file and load them using `expo-constants` or `react-native-dotenv`.

### Run locally:

```bash
expo start
```

Use the Expo Go app or a simulator/emulator to preview the app.

### Build for production:

Use Expo EAS:

```bash
eas build --platform ios
eas build --platform android
```

Follow Expo's prompts to configure app-store credentials.

## 📦 Usage

**Create your card:** Sign up with email or SSO (Google/Apple). Fill out personal and company details, upload images and choose a template. The app generates a QR code and NFC data for sharing.

**Share:** Open the "Share" screen to display your QR code, tap an NFC tag or send a link via SMS/email. Add the card to Apple/Google Wallet for offline sharing.

**Scan & import:** Use the camera to scan another user's QR code; review and save the contact. For paper cards, optionally enable OCR scanning (requires additional setup).

**Manage contacts:** View, tag and search your contacts. Add notes or follow-up reminders. Export contacts to your CRM or as VCF/CSV.

**Dashboard & analytics:** For team plans, admins can view analytics on card views and shares, manage user roles and configure company-wide templates.

## 🔐 Security & Compliance

Our app adopts industry-standard security measures:

- **Encryption:** Data is encrypted using AES-256 at rest and TLS 1.2+ in transit.
- **Authentication & Access:** Supports SSO (Google, Microsoft, Okta) and multi-factor authentication; implements role-based access controls.
- **Centralized management:** Admins can revoke access and monitor usage, preventing unauthorized sharing or duplication.
- **Card-level protection:** Cards can be password-protected and set to expire.
- **Phishing detection:** Built-in scanning detects malicious links and anomalous activity.
- **Compliance:** Designed for GDPR, CCPA and HIPAA compliance, with SOC 2 Type II aligned practices.

## 💰 Pricing & Monetization

**Free:** Basic card with QR/NFC share and limited templates.

**Pro ($5–8/month):** Unlimited cards, custom designs, analytics and basic CRM integration.

**Team ($6–10/user/month):** Admin dashboard, lead-capture forms and SSO integration.

**Enterprise (Custom):** White-label branding, SCIM/SAML SSO, custom domains and enhanced security. Add-ons include physical NFC cards and branded widgets.

## 🛠 Roadmap

Refer to `AGENT.md` for a detailed development plan. Key milestones include:

- Setup & architecture — React Native/Expo, Firebase and CI/CD.
- Core features — Authentication, card creation, sharing & scanning, contact management and sync.
- Advanced capabilities — Admin dashboard, analytics & CRM integration, AR modules and AI-powered reminders.
- Testing, deployment and marketing.

## 🤝 Contributing

Contributions are welcome! Please open issues for bugs or feature requests and submit pull requests targeting the `dev` branch. Follow the coding standards defined in the project's ESLint configuration and include unit tests for new functionality.

## 📄 License

This project is licensed under the MIT License. See LICENSE for details.
