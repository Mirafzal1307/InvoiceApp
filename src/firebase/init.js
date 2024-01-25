// Import the functions you need from the SDKs you need
import { getAnalytics } from 'firebase/analytics'

import { initializeApp } from 'firebase/app'
import {
  addDoc,
  collection,
  doc,
  getDoc,
  getDocs,
  getFirestore,
  setDoc
} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBKhZnj0ys0ZWysGEQASytgkAaLJ2xZiOw',
  authDomain: 'invioce-ad8d2.firebaseapp.com',
  projectId: 'invioce-ad8d2',
  storageBucket: 'invioce-ad8d2.appspot.com',
  messagingSenderId: '27463501949',
  appId: '1:27463501949:web:83a7e93f11194a818f0914'
}

let data = []
let alldata = []

// Initialize Firebase
export const app = initializeApp(firebaseConfig)
export const analytics = getAnalytics(app)

export const getData = async () => {
  try {
    const firestore = getFirestore(app);
    const collection = collection(firestore, 'users')

    // alldata.length = 0

    const querySnapshot = await getDocs(collection)

    querySnapshot.forEach((data) => {
      alldata.push(data.data())
    })
    console.log(alldata, 'all data')
  } catch (error) {
    console.log('Error has occured!', error)
  }
}
