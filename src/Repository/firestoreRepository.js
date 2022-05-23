// init firebase


// var post = function(collection, data) 
// {

// };

// var get = function(collection1, collection2, arg1, arg2, arg2) 
// {
//     if(!collection2) {

//     }

//     if(!arg1) {

//     }

//     if(!arg2) {

//     }

//     if(!arg3) {

//     }

// };

// const ref = db.collection('users').collection('someList');

// ref.where('createdAt', '>=', today);

// const westCoastCities = citiesRef.where('regions', 'array-contains', 'west_coast').get();




// "@firebase/firestore": "^3.4.7",
// "firebase": "^9.6.10",

// import { initializeApp } from "firebase/app";
// import {
//   getFirestore,
//   collection,
//   getDocs,
//   setDoc,
//   addDoc,
// } from "firebase/firestore/lite";
// import firebase from "firebase/app";


// hej: [],
// hej2: [],
// hej3: [],
// code: 'public List<Person> Persons { get; set; }',
// cat: {
//   name: "",
//   age: 0,
// },
//   per: {
//   name: "",
//   age: 0,
// },
//   pers: {
//   name: "",
//   age: 0,
// },






// // initialize firebase
//  var firebaseConfig = {
//     apiKey: "AIzaSyBYMMbL-qQrocIQPmEr7RYDezzENJ2ETJs",
//     authDomain: "kodox-69420.firebaseapp.com",
//     projectId: "kodox-69420",
//     storageBucket: "kodox-69420.appspot.com",
//     messagingSenderId: "617864968504",
//     appId: "1:617864968504:web:f54fb47b23212b8161e9cd",
//   };

//   const app = initializeApp(firebaseConfig);

//   const db = getFirestore(app);

//   const Categories = collection(db, "Categories");
//   const Persons = collection(db, "Persons");
//   const persons = collection(db, "persons");

  //  await addDoc(citiesCol, { name: "Ola-konny", age: 1 });

//   await getDocs(Categories).then((s) => {
//     for (let i = 0; i < s.docs.length; i++) {
//       this.cat.age = s.docs[i].data().age;
//       this.cat.name = s.docs[i].data().name;
//       this.hej.push(this.cat);
//     }
//   });

//      await getDocs(Persons).then((s) => {
//     for (let i = 0; i < s.docs.length; i++) {
//       this.pers.age = s.docs[i].data().age;
//       this.pers.name = s.docs[i].data().name;
//       this.hej2.push(this.pers);
//     }
//   });

//      await getDocs(persons).then((s) => {
//     for (let i = 0; i < s.docs.length; i++) {
//       this.per.age = s.docs[i].data().age;
//       this.per.name = s.docs[i].data().name;
//       this.hej3.push(this.per);
//     }
  //});


