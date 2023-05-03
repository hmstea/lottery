// Import the functions you need from the SDKs you need
import {initializeApp} from "firebase/app";
import {getFirestore, doc, setDoc, collection, query, where, getDocs,or } from "firebase/firestore";
import {SetOptions} from "@firebase/firestore";
import {data} from "./data";
import {getRandomInt} from "../util";
//import { getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: process.env.REACT_APP_FB_API_KEY,
    authDomain: process.env.REACT_APP_FB_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_FB_PROJECT_ID,
    storageBucket: process.env.REACT_APP_FB_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_FB_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_FB_APP_ID
};
//ezZD5m5a54WV1WjDiIOto17XVrf1
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

//const auth = getAuth(app);
type DRWNUMBER = {
    drwNo1: number;
    drwNo2: number;
    drwNo3: number;
    drwNo4: number;
    drwNo5: number;
    drwNo6: number;

}
type DRWTYPE = DRWNUMBER & {
    bnusNo: number;
    drwNo: number;
    drwNoDate: string;
    firstAccumamnt:number;
    firstPrzwnerCo: number;
    firstWinamnt: number;
    returnValue: string;
    totSellamnt: number;
}

const dataRef = collection(db, "data");


export async function saveData() {

// (1 -(data.slice(-12).filter((d)=>d.includes(i)).length / (12*6))) / 45 ,


   /*
    totSellamnt: 누적금액
    returnValue: 실행결과
    drwNoDate: 추첨 일자
    firstWinamnt: 1등 당첨금
    firstPrzwnerCo: 1등 당첨 인원
    bnusNo:보너스 번호
    drwNo: 회차
    drwtNo1~6: 당첨번호 숫자
    */

    //await signInWithEmailAndPassword(auth, process.env.REACT_APP_EMAIL!, process.env.REACT_APP_PW!);
    //기초 데이터
   /* for (let i = 1; i < 1066; i++) {
        fetch(`/common.do?method=getLottoNumber&drwNo=${i}`)
            .then((res):Promise<DRWTYPE>=> {
                return res.json();
            })
            .then(async  data => {
                console.log(data);

                const q = query(dataRef, where("drwNoDate", "==", data.drwNoDate));

                const querySnapshot = await getDocs(q);

                if(querySnapshot.size === 0){
                    setDoc(doc(db, "/data",data.drwNoDate),data).catch(_=>{
                        console.log(_)
                    });
                }

            });
    }
*/
    /*for(let n =1 ; n<46 ;n++){
        const q = query(dataRef, or(
            where("drwtNo1", "==", n),
            where("drwtNo2", "==", n),
            where("drwtNo3", "==", n),
            where("drwtNo4", "==", n),
            where("drwtNo5", "==", n),
            where("drwtNo6", "==", n),
        ));

        const querySnapshot = await getDocs(q);
        console.log(`${n} = ${querySnapshot.size}`)


        setDoc(doc(db, "numbers",`0000`),{[n]: querySnapshot.size},  {merge: true })
            .catch(_=>{
            console.log(_)
        });
    }
*/

    /*
        await setDoc(doc(db, "/data","1234"),{
            "bnusNo":1,
            "drwNo" : 1,
            "drwNoDate" : "1234",
            "drwtNo1" : 1,
            "drwtNo2" : 1,
            "drwtNo3" : 1,
            "drwtNo4" : 1,
            "drwtNo5" : 1,
            "drwtNo6" : 1,
        }).catch(_=>{
            console.log(_)
        }) ;*/
    //await signOut(auth);

}
