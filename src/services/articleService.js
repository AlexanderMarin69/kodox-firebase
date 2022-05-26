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
const articleCollection = collection(db, "articles");
const articleCodeBlocksCollection = collection(db, "articleCodeBlocks");
const articleTextsCollection = collection(db, "articleTexts");

// when functioning somewhat, do user

export default {
    async getArticleById(articleId) {
        var returnArticleObject = {
            codeBlocks: [],
            texts: [],
            id: '',
            description: '',
            title: '',
            tags: [],
        };

        await getDocs
            (articleTextsCollection).then((result) => {
                for (let i = 0; i < result.docs.length; i++) {
                    var newCategory = {
                        articleId: '',
                        editor: null,
                        id: 0,
                        sortOrder: 0,
                        text: '',
                        type: '',
                    };

                    newCategory.articleId = result.docs[i].data().articleId;
                    newCategory.id = result.docs[i].data().id;
                    newCategory.sortOrder = result.docs[i].data().sortOrder;
                    newCategory.text = result.docs[i].data().text;
                    newCategory.type = result.docs[i].data().type;

                    returnArticleObject.texts.push(newCategory);
                }
            });



        await getDocs
            (articleCodeBlocksCollection).then((result) => {
                for (let i = 0; i < result.docs.length; i++) {
                    var newcodeBlock = {
                        articleId: '',
                        code: '',
                        id: 0,
                        lang: '',
                        sortOrder: 0,
                        type: '',
                    };

                    newcodeBlock.articleId = result.docs[i].data().articleId;
                    newcodeBlock.code = result.docs[i].data().code;
                    newcodeBlock.id = result.docs[i].data().id;
                    newcodeBlock.lang = result.docs[i].data().lang;
                    newcodeBlock.sortOrder = result.docs[i].data().sortOrder;
                    newcodeBlock.type = result.docs[i].data().type;

                    returnArticleObject.codeBlocks.push(newcodeBlock);
                }
            });

        await getDocs
            (articleCollection).then((result) => {
                var article = result.docs.find(x => x.id === articleId);

                returnArticleObject.id = article.id;
                console.log(returnArticleObject.id);
                returnArticleObject.description = article.data().description;
                returnArticleObject.title = article.data().title;
                returnArticleObject.tags = article.data().tags;
            });

        return returnArticleObject;
    },

    async saveNewArticle(payload) {
        var articleToSave = {
            description: payload.description,
            title: payload.title,
            tags: payload.tags,
            categoryId: payload.categoryId,
        };

        var theCreatedArticle = await addDoc(articleCollection, articleToSave);


        for (var i = 0; i < payload.texts.length; i++) {
            var newText = {
                id: payload.texts[i].id,
                articleId: theCreatedArticle.id,
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
                articleId: theCreatedArticle.id,
                type: payload.codeBlocks[i].type,
                sortOrder: payload.codeBlocks[i].sortOrder,
                code: payload.codeBlocks[i].code,
                lang: payload.codeBlocks[i].lang
            };

            await addDoc(articleCodeBlocksCollection, newCodeBlock);
        }
    },

    async getArticles() {
        var articles = [];

        await getDocs(articleCollection).then((result) => {

            for (let i = 0; i < result.docs.length; i++) {
                var newArticle = {
                    id: '',
                    title: '',
                    description: '',
                    createdBy: '',
                };

                newArticle.id = result.docs[i].id;
                newArticle.title = result.docs[i].data().title;
                newArticle.categoryId = result.docs[i].data().categoryId;
                newArticle.description = result.docs[i].data().description;
                newArticle.createdBy = result.docs[i].data().createdBy;

                articles.push(newArticle);
            }

        });

        return articles;
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