import { initializeApp } from 'firebase/app';
import { getFirestore, connectFirestoreEmulator } from 'firebase/firestore';
import { getAuth, connectAuthEmulator } from 'firebase/auth';
import { getStorage, connectStorageEmulator } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyDprgIXq3bTM11Qus18zkDI3mQ9N_D_fKw",
  authDomain: "app-max-c0a2a.firebaseapp.com",
  projectId: "app-max-c0a2a",
  storageBucket: "app-max-c0a2a.firebasestorage.app",
  messagingSenderId: "314172594069",
  appId: "1:314172594069:web:c49021843788fb7b41c89c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase services
export const db = getFirestore(app);
export const auth = getAuth(app);
export const storage = getStorage(app);

// Enable offline persistence
import { enableNetwork, disableNetwork } from 'firebase/firestore';

export const enableOfflineMode = () => disableNetwork(db);
export const enableOnlineMode = () => enableNetwork(db);

export default app;