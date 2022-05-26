"use strict";

import { initializeApp } from "firebase/app";
import {
    getFirestore,
    collection,
    getDocs,
    setDoc,
    addDoc,
} from "firebase/firestore/lite";


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
const libraryCollection = collection(db, "library");

export default {
    async createCategory(payload) {
        await addDoc(libraryCollection, payload);
    },

    async getCategories(payload) {
        var res = [];

        await getDocs(libraryCollection).then((result) => {

            for (let i = 0; i < result.docs.length; i++) {
                var newCat = {
                    id: '',
                    title: '',
                    description: '',
                    createdBy: '',
                };

                newCat.id = result.docs[i].id;
                newCat.title = result.docs[i].data().title;
                newCat.description = result.docs[i].data().description;
                newCat.createdBy = result.docs[i].data().createdBy;

                res.push(newCat);
            }

        });

        return res;
    },
}