# Agent Instruction Guide: B2B Digital Business Card App

## 🧠 Purpose

Your mission as an agent (developer or AI assistant) is to build a cross-platform mobile app that enables professionals to share, manage and synchronize digital business cards. The app must provide a modern networking experience and incorporate advanced features such as lead capture, CRM integrations, analytics, security and optional augmented reality, all while maintaining high performance and compliance with industry standards.

## 🎯 Objectives

- Deliver a secure, user-friendly mobile application built with React Native, Expo and Firebase.
- Implement multi-channel sharing (QR codes, NFC, Apple/Google Wallet, SMS/email).
- Provide powerful contact management and analytics, including AI reminders, tags and notes.
- Ensure enterprise-grade security, including encryption, SSO/MFA and role-based access.
- Develop optional advanced features such as AR overlays and OCR scanning.
- Follow agile methodology with iterative sprints and continuous feedback.

## 📋 Key Tasks

### 1. Setup & Architecture

- Initialize a TypeScript Expo project using the latest React Native (0.73+) and Expo SDK 51+.
- Configure state management (e.g., Zustand or Redux Toolkit) and set up navigation with expo-router.
- Set up Firebase (Auth, Firestore, Storage). Securely manage environment variables.
- Replace deprecated libraries: use expo-camera (CameraView) for barcode scanning and react-native-nfc-manager for NFC.
- Integrate UI frameworks (shadcn/ui, optional NativeWind) and define consistent themes.

### 2. Core Feature Implementation

**Authentication:** Support email/password, Google/Apple logins and optional MFA. Implement secure session handling.

**Card creation/editing:** Allow users to input contact details, upload images and choose templates; persist to Firestore.

**Sharing mechanisms:** Generate QR codes; implement NFC write/read; enable link sharing via SMS/email; export cards to Apple/Google Wallet.

**Scanning & import:** Use CameraView.onBarcodeScanned to import other cards; deduplicate and allow editing before saving.

**Contact management:** Provide lists with search, tags, notes and AI-powered reminders; support export to CSV/VCF and sync across devices.

**Analytics:** Track events (views, shares, scans) and display dashboards; support lead-capture forms linked to CRMs.

### 3. Advanced & Enterprise Features

**Admin dashboard:** Role-based management, team templates and centralized access controls.

**Security enhancements:**
- Enforce AES-256 encryption at rest and TLS 1.2+ in transit
- Implement SSO/MFA
- Add card-level protections with passwords/expiration
- Integrate phishing detection

**CRM & calendar integration:** Build connectors for HubSpot, Salesforce and others; allow exporting contacts and logging interactions.

**Augmented reality:** Explore AR features to display 3D logos or demos using Viro React or Expo AR modules.

### 4. Testing & Quality Assurance

- Write unit tests with Jest and React Native Testing Library.
- Use Detox or Maestro for end-to-end testing across Android and iOS devices.
- Conduct security testing, including encryption validation and penetration tests. Address vulnerabilities promptly.
- Ensure accessibility compliance (screen-reader support, contrast ratios, etc.).

### 5. Deployment & Operations

- Configure CI/CD pipelines with GitHub Actions and EAS Build. Include linting, testing and build stages.
- Prepare App Store/Play Store metadata, screenshots and demo videos.
- Use TestFlight and Google Play internal testing for beta releases; collect feedback.
- After launch, monitor with Firebase Crashlytics and Sentry; iterate based on analytics.

### 6. Post-Launch & Growth

- Prioritize feature improvements based on user feedback and analytics.
- Maintain security compliance (GDPR, HIPAA, SOC 2). Regularly update dependencies and perform audits.
- Support marketing efforts: produce blog posts on digital networking trends and emphasize sustainability (digital cards save trees and reduce waste).
- Work on monetization strategies: Free, Pro, Team and Enterprise tiers; optional physical NFC cards and white-label licenses.

## ✅ Best Practices

- **Write clean, modular code:** Use TypeScript for type safety and write well-commented code.
- **Version control:** Commit early and often. Open pull requests for each task, with detailed descriptions and reference to related issues.
- **Security first:** Never hard-code secrets; use environment variables. Validate and sanitize user input.
- **Stay updated:** Monitor dependencies for deprecations (e.g., scanning libraries) and replace them promptly.
- **Iterative development:** Embrace iterative feedback. Demo progress at the end of each sprint and incorporate stakeholder input.

## 🔗 Resources

**Digital business card trends:** Articles highlighting AR, AI contact management and multi-channel sharing.

**Competitor analysis:** Wave Connect's feature list (multi-channel share, lead capture, analytics, SOC 2 security).

**Security guidelines:** Industry standards for encryption, access controls, phishing detection and compliance requirements.

---

Use this document as your north star while developing the B2B Digital Business Card App. Build iteratively, focus on security and user experience, and deliver a product that meets the needs of modern professionals.
