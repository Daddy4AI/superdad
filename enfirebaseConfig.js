import { initializeApp } from 'https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js';
import { getFirestore, initializeFirestore, persistentLocalCache } from 'https://www.gstatic.com/firebasejs/11.0.1/firebase-firestore.js';

// Firebase 配置
export const firebaseConfig = {
  apiKey: "AIzaSyDyZR6WO8VegrUFpBg6wZBjp1A9DC5Af5M",
  authDomain: "superdad1-4d119.firebaseapp.com",
  projectId: "superdad1-4d119",
  storageBucket: "superdad1-4d119.firebasestorage.app",
  messagingSenderId: "606843485334",
  appId: "1:606843485334:web:4d4e05c1ddcb40beb516b7"
};
};

// 初始化 Firebase
const app = initializeApp(firebaseConfig);

// 初始化 Firestore with caching enabled
export const db = initializeFirestore(app, {
    cache: persistentLocalCache()
});
