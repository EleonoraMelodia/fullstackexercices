//🍰 Esercizio 1 Definire una funzione che accetta un callback e lo richiama:

// function giveMeCallback ( callback ) {
//  callback ()
// };

// function imCalling () {
// console.log("hello world") ;
// };

// (giveMeCallback(imCalling));

// :(

// // 🍰 Esercizio 2
// // Definire una funzione che accetta un valore e un callback, e richiama il callback passando il valore come argomento:

// function callingBack ( val, callback) {
//     callback(val)
// };

// function mycallback(val1) {
// console.log(val1)
// }
// ;

// callingBack( "hello world", mycallback);

// 🍰 Esercizio 3
// Simulare una chiamata asincrona utilizzando un setTimeout e un callback:

// function asyncronous(callback) {
//   setTimeout(() => {
//     callback("I'm always late");
//   }, 2000);
// }

// function myCallback(val) {
//   console.log(`I'm Eleonora, and ${val}`);
// }

// asyncronous(myCallback);

// function chiamataAsincrona(callback) {
//     setTimeout(function () {
//       callback("Risposta dalla chiamata asincrona");
//     }, 2000);
//   }

//   function mioCallback(risposta) {
//     console.log("Risposta ricevuta:", risposta);
//   }

//   chiamataAsincrona(mioCallback);

// 🍰 Esercizio 4
// Definire una funzione che accetta un array e un callback, e richiama il callback per ogni elemento dell'array:

// function callForEachElement (array, callback) {
//     array.forEach(element => { callback (element)

//     });
// };

// function mycallback (val) {
// //     console.log(`${val} OH MAMA TETEMA`);
// // }
// // ;
// // callForEachElement(["que problema fai", "me mata la curiosidad","de ver lo que hay atras"], mycallback)

// // 🍰 Esercizio 5
// // Utilizzare un callback per ordinare un array di oggetti:

// const people = [{
//     name : "Luca",
//     age : 23,
//     hobby : "Hip hop"
// },
// {
//     name : "Chris",
//     age : 33,
//     hobby : "Pole Dance"
// },
// {
//     name : "Morgan",
//     age : 39,
//     hobby : "Modern"
// }
// ]

// // const sorted = people.sort((a, b) => a.age - b.age, 0);
// // console.log(sorted);

// // or
// function sorting (a, b) {
//     return a - b ;
// }

// people.sort(sorting);
// console.log(people);

// 🍰 Esercizio 6
// // Utilizzare un callback per filtrare gli elementi di un array:
// const arr = [1,4,6,7,2];
// function filterMyArr (el) {
//     if(el > 5 ) {
//         return el
//     }
// };

// console.log(arr.filter(filterMyArr));

// // 🍰 Esercizio 7
// // Utilizzare un callback per calcolare la somma degli elementi di un array:
// const arr = [2,4,6,2,3];
// function letSum (a, b) {
//   return  a + b;

// }

// const result = arr.reduce(letSum);
// console.log(result);

// 🍰 Esercizio 8
// Utilizzare un callback per mappare gli elementi di un array a nuovi valori:

// let arr = ["Gigi Finizio", "Gigi D'Alessio", "Gigi d'Agostino"];
// function mapMyGigis (el) {
//   return ` GRANDEE ${el}!`
//     }

// let mapped = arr.map(mapMyGigis);
// console.log(mapped);

// 🍰 Esercizio 9
// Utilizzare un callback per eseguire un'azione su ogni carattere di una stringa:

// const string = "vir o mar quant'è bell";

// function stampaCarattere(carattere) {
//   console.log(carattere);
// }

// Array.from(string).forEach(stampaCarattere);

// 🍰 Esercizio 10
// // Utilizzare un callback per simulare la gestione degli errori in una finta chiamata asincrona:*/

// function errorManagement (callbackSuccess, callbackError) {
// const result = Math.random() < 0.5;
// if (result){
//   callbackSuccess ("called successfully")
// }
// else{
//  callbackError("your call failed")
// }
// };

// function callbackSuccess (success) {
//   console.log(success)

// };

// function callbackError (error) {
//   console.log(error)
// };

// errorManagement (callbackSuccess, callbackError);

// Tracce
// 🍰 Esercizio 1
// Eseguire una funzione ogni secondo utilizzando setInterval:
// setInterval (function (){
//     console.log("every FuC*ng second");
// }, 1000)

// 🍰 Esercizio 2
// Creare un timer che conta fino a 10 utilizzando setInterval:
// let counter = 1;

// let countSeconds = setInterval(() => {
//   console.log(counter);
//   if(counter === 10) {
//   clearInterval(countSeconds)
//   };
//   counter++;
// }, 1000);

// 🍰 Esercizio 3
// Cambiare il colore di un elemento del DOM ogni 2 secondi utilizzando setInterval:

// const element = document.getElementById("element");
// const interval = setInterval (()=>{
//     element.style.color = element.style.color === 'red' ? 'blue' : 'red';
// },2000)

// 🍰 Esercizio 4
// Simulare un countdown da 5 a 0 utilizzando setInterval:
// let counter = 5;
// let countdown = setInterval (() => {
// console.log(counter);
// if(counter === 0) {
//     clearInterval(countdown);
//     console.log("Happy new Year!!!");
// }

// counter--;

// }, 1000)

// 🍰 Esercizio 5
// Creare una presentazione di slide che cambiano automaticamente ogni 3 secondi utilizzando setInterval:

// 🍰 Esercizio 6
// Creare un pulsante che aumenta di 1 ogni volta che viene cliccato utilizzando setInterval:
// 🍰 Esercizio 7
// Creare un effetto di animazione che sposta un elemento gradualmente orizzontalmente utilizzando setInterval:
// 🍰 Esercizio 8
// Creare un timer che mostra il tempo trascorso dall'inizio in secondi utilizzando setInterval:

// let time = 0;

// setInterval (() => {
//   time++;
//   console.log(`tempo trascorso ${time} s`);
// }, 1000)

// 🍰 Esercizio 9
// Creare un cronometro che registra il tempo trascorso e lo mostra in formato "mm:ss" utilizzando setInterval:

// let seconds = 0;
// let minutes = 0;

// setInterval (()=> {
//     seconds++;
//     if(seconds === 60){
//         minutes++;
//         seconds=0;
//     }
// console.log(`is ${minutes.toString().padStart(2, "0")} and ${seconds.toString().padStart(2, "0")} o' clock!`);
// })

// 🍰 Esercizio 10
// Cambiare lo sfondo della pagina ogni 5 secondi utilizzando setInterval:

// 🍰 Esercizio 1
// Eseguire una funzione dopo 3 secondi utilizzando setTimeout:

// setTimeout(() => {
// console.log("after three seconds");
// }, 3000);

// 🍰 Esercizio 2
// Creare un timer che mostra un messaggio dopo un certo numero di secondi utilizzando setTimeout:
// let time = 3;

// setTimeout (() => {
//     console.log(`sono passati ${time} secondi `);
// }, 1000 * time);

// let num = 1;

// function myPromise (number) {
//    return new Promise ((resolve, reject) => {
//     if(number > 10 ) {resolve ("number is greater than 10")}
//     reject ("the number is not admitted")
// });
// }
// myPromise(12)
// .then((result) => console.log(result))
// .catch((err) => console.error(err))

const isBlack = true;

function promiseOne() {
  return new Promise((resolve, reject) => {
    if (isBlack) {
      resolve(Math.random());
    }
    reject("error");
  });
};

function promiseTwo (num) {
return new Promise ((resolve, reject)=>{
    if(num > 0.5) {resolve('all ok')}
    reject('error num. 5')
})
};


promiseOne()
.then(promiseTwo)
.then((result) => console.log("secondo then" + " " + result))
.catch((error) => console.error(error))

