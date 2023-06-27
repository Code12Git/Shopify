import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyAhiu-mjuNI-1dnLXIX_AMMeEEd-mzNDik",
  authDomain: "shop-a1a54.firebaseapp.com",
  projectId: "shop-a1a54",
  storageBucket: "shop-a1a54.appspot.com",
  messagingSenderId: "943818551129",
  appId: "1:943818551129:web:4f605dbedba20ab82f6648",
  measurementId: "G-69H43WZ414",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;
