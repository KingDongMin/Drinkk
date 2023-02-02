// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged  } from "firebase/auth";


const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: "drinkk-125a4.firebaseapp.com",
  databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
  projectId: "drinkk-125a4",
  storageBucket: "drinkk-125a4.appspot.com",
  messagingSenderId: "1097211243193",
  appId: "1:1097211243193:web:7f502161f1e31cc8acc968",
  measurementId: "G-2DB4VDY8D1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();
const auth = getAuth(app);

export async function googleLogin(){
//     return signInWithPopup(auth, provider)
//   .then((result) => {
//     const user = result.user;
//     return checkAdmin(user);
//   }).catch((error) => {
//   });
  signInWithPopup(auth, provider);
}


export async function googleLogout(){
    return signOut(auth).then(() => {
        // Sign-out successful.
        return null;
      }).catch((error) => {
        // An error happened
        console.log("로그아웃 실패"+error)
      });
}

function checkAdmin(user){
    const adminUid = process.env.REACT_APP_FIREBASE_ADMIN_UID;
    if(user.uid === adminUid){
        const adminUser = {...user, isAdmin:true};
        return adminUser;
    }
    return user;
}


export function onAuthState(callback){
    onAuthStateChanged(auth, (user) => {
        if (user) {
            const checkUser = checkAdmin(user);
            console.log(checkUser)
            callback(checkUser);
        } else {
          // User is signed out
          // ...
            console.log('현재 로그인 null')
            return null;
        }
    });

}

