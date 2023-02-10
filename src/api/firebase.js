// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged  } from "firebase/auth";
import { getDatabase, ref, set, get} from "firebase/database";
import {v4 as uuid} from 'uuid'

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
const dataBase = getDatabase(app);

export async function googleLogin(){
    signInWithPopup(auth, provider).catch(error=> console.log(`Login error : ${error}`));
}

export async function googleLogout(){
    signOut(auth).catch(error=>console.log(`Logout error : ${error}`))
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
            callback(checkUser);
            return;
        }
        callback(user);
        return;
    })
}

export async function addProduct({imgURL, datas:{title, price, description, option }}){
    const uid = uuid();
    return set(ref(dataBase, `products/${uid}`),{
        id:uid,
        title: title,
        imgURL: imgURL,
        price : price,
        description : description,
        option: option
    }).then(res=>res).catch(error=>{console.log(`ERROR :: addProduct : ${error}`)})
}

export async function getProdcuts(){
    return get(ref(dataBase, `products`)).then(snapshot=>{
        if(snapshot.exists()){
            return Object.values(snapshot.val());
        }
        return null;
    })//
    .catch(error=>{
        console.log(error)
    })
}

export async function addCart({uid, product, option}){
    console.log(`addCart 호출 : ${uid} ${product} ${option}`)
    return set(ref(dataBase, `cart/${uid}/${product.id}`),{
        id: product.id,
        title: product.title,
        price: product.price,
        imgURL : product.imgURL,
        option : option,
        count: 1
    }).then(()=>{
        return '장바구니에 추가되었습니다.'
    }).catch((error)=>{
        console.log(error)
    })
}

export async function getCart(uid){
    return get(ref(dataBase, `cart/${uid}`)).then(snapshot=>{
        if(snapshot.exists()){
            return Object.values(snapshot.val());
        }
        return null;
    }).catch(error=>console.log(error));
    
}