"use strict";

//const ref = db.collection('users').collection('someList');

//ref.where('createdAt', '>=', today);



//const westCoastCities = citiesRef.where('regions', 'array-contains',
//    'west_coast').get();

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
const articleCodeBlocksCollection = collection(db, "ArticleCodeBlocks");
const articleTextsCollection = collection(db, "ArticleTexts");

// when functioning somewhat, do user

export default {
    async getTest() {
        // get by id
        // get codeBlocks by articleId
        // get texts by articleId

        // create obejct with article, codeBlocks, texts
        // send them to view
        // in view put them in corresponding variable
        // decouple them in view........

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

    async save(payload) {
        console.log('posted');

        console.log(payload);

        // they get article Id
        for (var i = 0; i < payload.texts.length; i++) {
            var newText = {
                id: payload.texts[i].id,
                articleId: payload.id,
                type: payload.texts[i].type,
                sortOrder: payload.texts[i].sortOrder,
                text: payload.texts[i].text,
                editor: null,
            };
            await addDoc(articleTextsCollection, newText);
        }
        for (var i = 0; i < payload.codeBlocks.length; i++) {

            var newCodeBlock = {
                id: payload.codeBlocks[i].id,
                articleId: payload.id,
                type: payload.codeBlocks[i].type,
                sortOrder: payload.codeBlocks[i].sortOrder,
                code: payload.codeBlocks[i].code,
                lang: payload.codeBlocks[i].lang
            };

            await addDoc(articleCodeBlocksCollection, newCodeBlock);
        }



        //TODO:
        // user/codeBlocks
        // user/texts





        // TODO: decouople in createView CodeBlocks And Texts from article so that they dont get saved on article below
        // make different views for edit and create
        //payload.codeBlocks = [];
        //payload.texts = [];

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