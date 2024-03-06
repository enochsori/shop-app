import { initializeApp } from 'firebase/app';
import { v4 as uuid } from 'uuid';
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
  onAuthStateChanged,
} from 'firebase/auth';

import { getDatabase, ref, get, set } from 'firebase/database';

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  databaseURL: import.meta.env.VITE_DATABASE_URL,
  projectId: import.meta.env.VITE_PROJECT_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const provider = new GoogleAuthProvider();
const database = getDatabase();

export const login = () => {
  signInWithPopup(auth, provider).catch(console.error);
};

export const logout = () => {
  signOut(auth).catch(console.error);
};

// observer about user login status
export const onUserStateChange = (callback) => {
  // automatically being called when the login status changed
  onAuthStateChanged(auth, async (user) => {
    // 1. check if the user logged in
    // 2. check if the user is admin or not
    // 3. {...user, isAdmin: true|false}
    const updatedUser = user ? await adminUser(user) : null;
    callback(updatedUser);
  });
};

const adminUser = async (user) => {
  return get(ref(database, 'admins')) //
    .then((snapshot) => {
      if (snapshot.exists()) {
        const admins = snapshot.val();
        const isAdmin = admins.includes(user.uid);
        return { ...user, isAdmin };
      }
      return user;
    });
};

export const addNewProduct = async (product, imgURL) => {
  const id = uuid();
  //  upload new  product into the firebase database
  set(ref(database, `products/${id}`), {
    ...product,
    id,
    image: imgURL,
    price: parseInt(product.price),
  });
};

export const getAllProducts = async () => {
  return get(ref(database, 'products')) //
    .then((snapshot) => {
      if (snapshot.exists()) {
        return Object.values(snapshot.val());
      }
      return [];
    });
};
