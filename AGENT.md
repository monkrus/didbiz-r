# AGENT INSTRUCTION GUIDE: B2B DIGITAL BUSINESS CARD APP

## 🧠 Project Purpose

Build a cross-platform mobile app that allows startups and SMB professionals to share, manage, and sync digital business cards. The app enhances networking efficiency through QR/NFC sharing, CRM integrations, and smart contact management.

---

## 🗂️ Project Stages

### 1. Ideation & Planning
- Define the value for startups and business professionals
- Map out user stories and primary use cases
- Finalize MVP requirements and feature prioritization

### 2. Prototyping
- Wireframes and interactive prototypes created (Figma)
- Feedback loop with early users to refine flows

### 3. UI/UX Design
- Develop high-fidelity designs, branding elements, color palettes, layouts
- Ensure accessibility and consistent navigation

### 4. Development (Agile Sprints)
- Implement frontend in React Native (TypeScript + Expo)
- Use Firebase (Firestore + Auth) for backend
- Core features coded in phases

### 5. Testing
- Unit tests (Jest)
- Integration tests
- Manual QA on Android/iOS devices

### 6. Deployment
- Publish to App Store and Play Store
- Include screenshots, demo video, SEO-rich description

### 7. Maintenance
- Monitor crashes, feedback
- Release updates for bugs, features, security

---

## 📱 Core Features

### ✅ Contact Sharing
- Share card via QR, email, link, NFC
- “Tap to Share” and QR auto-scan supported

### ✅ QR Code Scanning
- Scan peers’ QR and import their card
- Uses camera for instant contact retrieval

### ✅ Card Creation & Editing
- Users can add full contact info, images, branding
- Real-time editable with template options

### ✅ Digital Contact Management
- Organize, tag, search, and filter collected contacts
- Add notes, follow-up reminders

### ✅ Profile Sync & Backup
- Cross-device syncing via Firebase or Google Contacts
- Data is persisted and backed up automatically

---

## 🚀 Advanced / Recommended Features

- **CRM Integration**: HubSpot, Salesforce
- **Analytics Dashboard**: Share/views tracking, trends
- **NFC Tap Support**: Optional NFC tag read/write
- **Social Integration**: LinkedIn, Outlook, Google
- **Team & Admin Panel**: Role-based management, company card templates
- **SSO & Directory Sync**: OAuth, SCIM, SAML
- **Paper Card Scanner (OCR)**: Tesseract or ML Kit OCR for real-world cards
- **White-labeling**: Custom domains, branded links
- **Apple/Google Wallet Card**: Optional sharing via native wallet apps

---

## 💰 Monetization Model

| Tier        | Price     | Features                                                                 |
|-------------|-----------|--------------------------------------------------------------------------|
| Free        | $0        | Basic card, QR share, email signature                                    |
| Pro         | $5–8/mo   | Unlimited cards, custom designs, analytics, sync                         |
| Team        | $6–10/mo  | Team tools, CRM/SSO integration, admin dashboard                         |
| Enterprise  | Custom    | White-label, SCIM, SLA, custom domain, security compliance               |

- Optional add-ons: NFC plastic cards, branded widgets, custom domains
- Monetization based on subscription tiers + white-label licensing

---

## 🛠️ Tech Stack

### Frontend
- React Native + Expo
- TypeScript
- shadcn/ui (for component styling)

### Backend
- Firebase Authentication
- Firebase Firestore (NoSQL)
- Firebase Functions (optional)
- Optional: Express.js or NestJS for future API expansion

### Libraries
- `react-native-camera`
- `react-native-qrcode-scanner`
- `react-native-nfc-manager`
- OCR: `tesseract.js` or Google ML Kit

### DevOps
- CI/CD: GitHub Actions or Bitrise
- Analytics: Firebase Analytics
- Monitoring: Sentry, Crashlytics

---

## 🔐 Security & Compliance

- TLS 1.2+, AES-256 for data protection
- OAuth2 + MFA support
- SSO (Google, Microsoft, Okta)
- Role-based access control
- GDPR & CCPA compliance
- SOC2 readiness
- Privacy policy with export/delete features

---

## 📣 Marketing & Growth

### Launch Strategy
- Beta program with co-working spaces and startup incubators
- Gather testimonials, fix bugs, iterate

### App Store Optimization (ASO)
- Keywords: “digital business card”, “QR networking app”
- Screenshots, engaging title, demo video

### Outreach
- LinkedIn campaigns targeting marketing/sales teams
- Attend/sponsor networking events and meetups

### Content Marketing
- Publish LinkedIn/Medium articles on digital networking trends
- SEO blog posts and video tutorials

### Partnerships
- CRM tools, Eventbrite/Meetup, coworking spaces
- Offer bundles or integration-based discounts

---

## 🧩 Agent Tasks (Codex)

- [ ] Setup project structure in React Native with Expo
- [ ] Implement card creation screen and save to Firestore
- [ ] Add QR generation + scan feature
- [ ] Implement contact import system (QR > Firestore)
- [ ] Add editable profile with real-time sync
- [ ] Setup sharing via OS share sheet, NFC (optional)
- [ ] Build contact list manager with tags, notes
- [ ] Add Firebase Auth login/signup flow
- [ ] Create admin dashboard prototype for teams
- [ ] Setup basic analytics tracking (views, shares)
- [ ] Implement OCR-based paper card scan (optional)
- [ ] Support multi-device sync, cloud backup

---

## 📎 Resources & References

- [BrowserStack Dev Lifecycle Guide](https://www.browserstack.com/guide/mobile-app-development-lifecycle)
- [HiHello Pricing](https://www.hihello.com/pricing)
- [KADO Networks](https://www.kadonetworks.com/)
- [Wave Connect](https://wavecnct.com/)
- [Blinq Pricing](https://blinq.me/pricing)
- [Uniqode Blog](https://www.uniqode.com/blog/digital-business-card-basics/are-digital-business-cards-safe)
- [Cross-Platform Frameworks Guide](https://pixelplex.io/blog/cross-app-development-frameworks/)

---

> **Codex Notes:** Follow agile methodology, comment all code, log progress after each component. Prioritize MVP first, then expand based on roadmap. Keep code secure and modular.
