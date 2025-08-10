export type BusinessCard = {
  uid: string;            // owner user id
  fullName: string;
  title?: string;
  company?: string;
  email?: string;
  phone?: string;
  website?: string;
  location?: string;
  bio?: string;
  avatarUrl?: string;
  updatedAt: number;      // epoch ms
};

export type Contact = {
  id: string;             // doc id in Firestore (later)
  fromUid?: string;       // whose card this came from (optional)
  card: BusinessCard;
  addedAt: number;
};
