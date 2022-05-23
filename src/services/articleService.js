"use strict";

import { initializeApp } from "firebase/app";
import {
    getFirestore,
    collection,
    getDocs,
    setDoc,
    addDoc,
} from "firebase/firestore/lite";
import firebase from "firebase/app";


// initialize firebase
var firebaseConfig = {
    apiKey: "AIzaSyBYMMbL-qQrocIQPmEr7RYDezzENJ2ETJs",
    authDomain: "kodox-69420.firebaseapp.com",
    projectId: "kodox-69420",
    storageBucket: "kodox-69420.appspot.com",
    messagingSenderId: "617864968504",
    appId: "1:617864968504:web:f54fb47b23212b8161e9cd",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const articleCollection = collection(db, "Articles");





//article: {
//    title: '',
//    description: '',
//    tags: ['Docs', 'JS'],
//    codeBlockIds: [1, 3, 5],
//    textIds: [2, 4, 6],
//}

// intermediate table för codeBlocks och texts
// sen hämta by id, sätt alla codeblocks och texts i article
// sen returnera hela articlen i article-view

// but no, article has no references, codeBlocks has articleId and text has article id
// only thins is codeBlocks should be under collection {userId}/CodeBlocks/<item> - to fasten the search







export default {
    async getTest() {
        console.log('downloaded');

        var test = null;
        await getDocs(articleCollection).then((article) => {
            //for (let i = 0; i < article.docs.length; i++) {
            //    console.log(article.docs[i].data());
            //    console.log(article.docs[i].data().codeBlocks);
            //}
            test = article;
        });

        return test.docs[0].data();
    },

    async test(payload) {
        console.log('posted');

        await addDoc(articleCollection, payload);

        //const Persons = collection(db, "Persons");
        //const persons = collection(db, "persons");



        //await getDocs(Persons).then((s) => {
        //    //for (let i = 0; i < s.docs.length; i++) {
        //    //    this.pers.age = s.docs[i].data().age;
        //    //    this.pers.name = s.docs[i].data().name;
        //    //    this.hej2.push(this.pers);
        //    //}
        //});

        //await getDocs(persons).then((s) => {
        //    //for (let i = 0; i < s.docs.length; i++) {
        //    //    this.per.age = s.docs[i].data().age;
        //    //    this.per.name = s.docs[i].data().name;
        //    //    this.hej3.push(this.per);
        //    //}
        //});










        //const ref = db.collection('users').collection('someList');

        //ref.where('createdAt', '>=', today);

        //const westCoastCities = citiesRef.where('regions', 'array-contains', 'west_coast').get();

    },

}



















    //bulkRemoveUserGateMapping: (vm) => {
        //return axios.get('/api/' + baseControllerAddress + "GetRoles/")
        //    .then(result => {
        //        return result.data;
        //    }).catch(function (error) {
        //        alert(error);
        //    });

    //    return axios.put('/api/' + baseControllerAddress + "bulkRemoveUserGateMapping/", vm)
    //        .then(result => {
    //            return result.data;
    //        }).catch(function (error) {
    //            alert(error);
    //        });
    //},
    //resetInAppAuthenticationCode: (id) => {
    //    return axios.post('/api/' + baseControllerAddress + "resetInAppAuthenticationCode" + "/" + id)
    //        .then(result => {
    //            return result.data;
    //        });
    //},