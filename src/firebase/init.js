import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyBKhZnj0ys0ZWysGEQASytgkAaLJ2xZiOw',
  authDomain: 'invioce-ad8d2.firebaseapp.com',
  projectId: 'invioce-ad8d2',
  storageBucket: 'invioce-ad8d2.appspot.com',
  messagingSenderId: '27463501949',
  appId: '1:27463501949:web:83a7e93f11194a818f0914'
}

initializeApp(firebaseConfig)

const db = getFirestore()
export { db }
