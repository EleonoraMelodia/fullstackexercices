/*🍰 Esercizio 1
Creare una classe "Veicolo" con proprietà "marca" e "anno di produzione". 
Successivamente, creare una classe "Automobile" che erediti dalla classe "Veicolo" e abbia una proprietà aggiuntiva "modello".


class Veicolo {
  constructor(brand, yearOfProduction) {
    this.brand = brand;
    this.yearOfProduction = yearOfProduction;
  }
}

class Car extends Veicolo {
  constructor(brand, yearOfProduction, model) {
    super(brand, yearOfProduction);
    this.model = model;
  }
}

let car = new Car("JEEP", 2020, "Renegeade");
console.log(car);


🍰 Esercizio 2
Creare una classe "Animale" con proprietà "nome" e un metodo 
"verso" che restituisca il verso dell'animale. Successivamente,
 creare una classe "Cane" che erediti dalla classe "Animale" e abbia una proprietà aggiuntiva "razza".


class Animal {
  constructor(name) {
    this.name = name;
  }
  verso() {
  
      return " ";
    }
  }
class Dog extends Animal {
    constructor (name, razza) {
        super (name);
        this.razza = razza;
    }
    verso(){
        return "bau bau";
    }
    
}

let dog = new Dog("Charlie", "Carlino");
console.log(dog, dog.verso());





Creare una classe "Persona" con proprietà
 "nome" e "cognome". Successivamente, creare una classe
  "Studente" che erediti dalla classe "Persona" e abbia una proprietà aggiuntiva "corsoDiStudi".



class Person {
    constructor (name, surname){
        this.name = name;
        this.surname = surname;
    }
};


class Student extends Person {
    constructor (name, surname, studyCourse){
        super(name, surname);
        this.studyCourse = studyCourse;
    }
}

const eleonora = new Student ("Eleonora", "Melodia", "Fullstack Developer");
console.log(eleonora);


🍰 Esercizio 4
Creare una classe "Forma" con metodo "calcolaArea".
 Successivamente, creare una classe "Rettangolo" che erediti dalla classe "Forma" 
 e abbia proprietà "base" e "altezza" e implementi il metodo "calcolaArea" per calcolare l'area del rettangolo.

class Shape {
    calcArea(){
return 0;
    }
}


class Rectangle extends Shape {
    constructor(width, heigth){
        super ();
        this.width = width;
        this.heigth = heigth;
    }
  calcArea () {
    return this.width * this.heigth;
  }
}

const rectangle = new Rectangle (15, 25);
console.log(rectangle, rectangle.calcArea());

🍰 Esercizio 5
Creare una classe "Veicolo" con metodo "accelera". Successivamente,
 creare una classe "Automobile" che erediti dalla classe "Veicolo"
  e abbia un metodo "suonaClacson" oltre al metodo "accelera".

  class Vehicle {
    speedup () {
        return "woooom!";
    }
  };


  class Car {
    speedup () {
        return "woooom!";
    }

    playTheHorn () {
        return "beee beeep!"
    }
  }
;

const lamborghini = new Car;
console.log(lamborghini.speedup(), lamborghini.playTheHorn());

  /*
🍰 Esercizio 6
Creare una classe "Animale" con metodo "verso". Successivamente, creare una classe
 "Gatto" che erediti dalla classe "Animale" e 
 sovrascriva il metodo "verso" per restituire il verso del gatto.


class Animal {
    verse () {
        return " "
    }
};


class Cat extends Animal{
    verse () {
        return "mialù"
    }
}
;
let malù = new Cat;

console.log(malù.verse());
*/

/*🍰 Esercizio 7
Creare una classe "Persona" con metodo "saluta". Successivamente, creare una classe "Studente" 
che erediti dalla classe "Persona" e sovrascriva il metodo "saluta" per aggiungere il corso di studi nel saluto.


class Person {
    sayHello () {
        return "Hi..."
    }
};

class Student extends Person {
    sayHello () {
        return "Hello, I attend the Fullstack course"
    }
}
;

const frank = new Student;
console.log(frank.sayHello());

/*
🍰 Esercizio 8
Creare una classe "Veicolo" con metodo "avviaMotore". 
Successivamente, creare una classe "Motocicletta" 
che erediti dalla classe "Veicolo" e abbia un metodo 
"guida" oltre al metodo "avviaMotore".

class Vehicle {
    startEngine () {
        return "trototototoo.."
    }
};


class Motobike extends Vehicle {
    startEngine () {
        return "trototototoo.."
    };
    drive () {
        return "drive"
    };

}

const vespa = new Motobike;
console.log(vespa.startEngine(), vespa.drive());

🍰 Esercizio 9
Creare una classe "Forma" con metodo "calcolaArea". Successivamente, creare una classe "Cerchio" che 
erediti dalla classe "Forma" e abbia una proprietà "raggio" e implementi 
il metodo "calcolaArea" per calcolare l'area del cerchio.

Define a class called `Person` that takes
 in three parameters in the constructor
  (`firstName`, `lastName` and `age`). 
  Create the getters and setters methods for each 
  property and a getter method called `fullName` that returns the full name.


class Shape {
    calcArea() {
        return 0;
    }
}

class Cycle extends Shape{
    constructor (radius){
        super ();
        this.radius = radius;
    };
    calcArea() {
     return  this.radius **2 * 3.14;
    } 
}

let cycle = new Cycle (6);
console.log(cycle.calcArea());



Certamente! Ecco un esempio di esercizio simile che coinvolge classi e operazioni diverse:

Esercizio: Gestione di Prodotti

Definisci una serie di classi per gestire prodotti in un negozio online. 
Dovrai creare classi per rappresentare diversi tipi di prodotti, calcolare il prezzo totale dell'ordine e applicare sconti.

Definisci una classe Product con le seguenti proprietà:

name (stringa): Il nome del prodotto.
price (numero): Il prezzo unitario del prodotto.
Definisci tre sottoclassi di Product:

PhysicalProduct: Un prodotto fisico con le proprietà aggiuntive:
weight (numero): Il peso del prodotto in chilogrammi.
DigitalProduct: Un prodotto digitale con le proprietà aggiuntive:
size (numero): La dimensione del prodotto in megabyte.

Membership: Una membership con le proprietà aggiuntive:
duration (numero): La durata della membership in mesi.
/*
Definisci una classe Order con le seguenti proprietà:
products (array di oggetti Product): Gli oggetti prodotto inclusi nell'ordine.
Definisci un metodo calculateTotalPrice che calcoli il prezzo totale dell'ordine sommando i prezzi di tutti i prodotti.

Aggiungi un metodo applyDiscount alla classe Order che accetta un parametro discountPercent
 e applica uno sconto percentuale a tutti i prodotti nell'ordine.


class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }
}

class PhysicalProduct extends Product {
  constructor(name, price, weigth) {
    super(name, price);
    this.weigth = weigth;
  }
}

class DigitalProduct extends Product {
  constructor(name, price, size) {
    super(name, price);
    this.size = size;
  }
}

class Membership extends Product {
  constructor(name, price, duration) {
    super(name, price);
    this.duration = duration;
  }
}

class Order {
  constructor(products) {
    this.products = products;
  }
  calculateTotalePrice() {
    return this.products.reduce((a, b) => a + b.price, 0);
  }

  applyDiscount(discountFactor) {
    const discount = 1 - discountFactor / 100;
    return this.products.forEach((el) => {
      el.price *= discount;
    });
  }
}

let shoes = new PhysicalProduct ("shoes", 100, "2 kg");
let antivirus = new DigitalProduct ("antivirus", 56, "100 mb");
let light = new Membership ("light", 10, "1 month");

let neworder = new Order ([shoes, antivirus, light]);
console.log(neworder.calculateTotalePrice());
neworder.applyDiscount(50);
console.log(neworder.calculateTotalePrice());*/


/*
Definisci una classe Author con le seguenti proprietà:

firstName (stringa): Il nome dell'autore.
lastName (stringa): Il cognome dell'autore.

Definisci una classe Book con le seguenti proprietà:
title (stringa): Il titolo del libro.
author (oggetto Author): L'autore del libro.
publicationYear (numero): L'anno di pubblicazione del libro.

Definisci una classe Library con le seguenti proprietà:
name (stringa): Il nome della libreria.
books (array di oggetti Book): Gli oggetti libro presenti nella libreria.

..

class Author {
    constructor(firstName, lastName){
        this.firstName = firstName;
        this.lastName = lastName;
    }
}

class Book {
    constructor (title, author, publicationYear){
        this.title = title;
        this.author = author;
        this.publicationYear = publicationYear;
    }
}

class Library {
    constructor(name){
        this.name = name;
        this.books = [];
    }
    addNewBook (newbook) {
        this.books.push(newbook)
    }

    findbookByAuthor (author) {
        return this.books.filter (books => books.author === author)
    }
}

const author1 = new Author ("Zelda", "M.");
const author2 = new Author ("Malu", "La Pornostar");
const author3 = new Author ("Richi", "G");
const author4 = new Author ("Ele", "Castorina");

const book1 = new Book ("l'ho combinata di nuovo",author1 , 2023);
const book2 = new Book ("OnlyFans e la mia nuova vita", author2, 2023);
const book3 = new Book ("come tagliare le unghie (male)", author3, 2021);
const book4 = new Book ("torpore all'uscio di casa", author4, 1992);
const book5 = new Book ("100 e + spigoli del divano e come mordicchiarli", author1, 2023);

const mylibrary = new Library ("My Favorite");
mylibrary.addNewBook(book1);
mylibrary.addNewBook(book2);
mylibrary.addNewBook(book3);
mylibrary.addNewBook(book4);

const zeldabooks = mylibrary.findbookByAuthor(author1);
const malupornoriviste = mylibrary.findbookByAuthor(author2);
const richilibripercolorare = mylibrary.findbookByAuthor(author3);
const elesiperdeeperdecose = mylibrary.findbookByAuthor(author4);

console.log(richilibripercolorare);

//Aggiungi un metodo addBook(book) alla classe Library che permetta di aggiungere un nuovo libro alla libreria.

//Aggiungi un metodo findBooksByAuthor(author) alla classe Library che restituisca un array di libri scritti da un autore specifico







/*
class Author {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
}

class Book {
  constructor(title, author, publicationYear) {
    this.title = title;
    this.author = author;
    this.publicationYear = publicationYear;
  }
}

class Library {
  constructor(name) {
    this.name = name;
    this.books = [];
  }

  addBook(book) {
    this.books.push(book);
  }

  findBooksByAuthor(author) {
    return this.books.filter(book => book.author === author);
  }
}

const author1 = new Author("J.K.", "Rowling");
const author2 = new Author("George", "Orwell");

const book1 = new Book("Harry Potter and the Sorcerer's Stone", author1, 1997);
const book2 = new Book("1984", author2, 1949);
const book3 = new Book("Animal Farm", author2, 1945);

const library = new Library("My Library");
library.addBook(book1);
library.addBook(book2);
library.addBook(book3);

const booksByOrwell = library.findBooksByAuthor(author2);
console.log("Books by George Orwell:", booksByOrwell);
In questo esercizio stai creando una semplice libreria con classi per autori, libri e la libreria stessa. Puoi sperimentare aggiungendo nuovi autori e libri e utilizzare i metodi della libreria per trovare libri di autori specifici.



Crea un'applicazione per gestire le transazioni bancarie di diversi clienti. Dovrai definire classi per rappresentare clienti, account bancari e operazioni bancarie. Gli oggetti creati dovrebbero essere in grado di eseguire operazioni come depositi, prelievi e visualizzazione del saldo.

Definisci una classe Customer con le seguenti proprietà:

firstName (stringa): Il nome del cliente.
lastName (stringa): Il cognome del cliente.
Definisci una classe BankAccount con le seguenti proprietà:

accountNumber (stringa o numero): Il numero dell'account.
customer (oggetto Customer): Il cliente associato all'account.
balance (numero): Il saldo dell'account.
Definisci una classe BankTransaction con le seguenti proprietà:

account (oggetto BankAccount): L'account bancario coinvolto nella transazione.
amount (numero): L'importo della transazione.
type (stringa): Il tipo di transazione ("deposit" o "withdrawal").
Aggiungi un metodo execute() alla classe BankTransaction 
che esegua la transazione sul conto bancario corrispondente e aggiorni il saldo.

class Customer {
    constructor(firstName, lastName){
        this.firstName = firstName;
        this.lastName = lastName;
    }
}

class BankAccount{
    constructor(accountNumber, customer, balance){
        this.accountNumber= accountNumber;
        this.customer = customer;
        this.balance = balance;
    }
}

class BankTransaction{
    constructor(accont, amount, type) {
        this.accont = accont;
        this.amount = amount;
        this.type = type;
    }

    execute () {
        if(this.type === "deposit") {
           return this.accont.balance += this.amount;
        }
        else if (this.type === "withdrawal"){
            this.accont.balance -= this.amount
        }
else {return "isufficent found"}
    }
}

const customer1 = new Customer ("Richi", "Tantapuzza");
const customer2 = new Customer ("Eleonora", "Meladaia");
const customer3 = new Customer ("Zelda", "Labellavita");
const customer4 = new Customer("Malu", "Labottana");

const account1 = new BankAccount (123, customer1, "banane");
const account2 = new BankAccount (345, customer2, 1000);
const account3 = new BankAccount (789,customer3, 10000000);
const account4 = new BankAccount (876, customer4, 4000);

const transaction1 = new BankTransaction (account1, 200, "deposit");
const transaction2 = new BankTransaction (account2, 2000, "deposit");

console.log(transaction2.execute());;


/*
Ecco un esempio di come potrebbe apparire il codice:

javascript
Copy code
class Customer {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
}

class BankAccount {
  constructor(accountNumber, customer, balance = 0) {
    this.accountNumber = accountNumber;
    this.customer = customer;
    this.balance = balance;
  }
}

class BankTransaction {
  constructor(account, amount, type) {
    this.account = account;
    this.amount = amount;
    this.type = type;
  }

  execute() {
    if (this.type === "deposit") {
      this.account.balance += this.amount;
    } else if (this.type === "withdrawal") {
      if (this.amount <= this.account.balance) {
        this.account.balance -= this.amount;
      } else {
        console.log("Insufficient funds");
      }
    }
  }
}

const customer = new Customer("John", "Doe");
const account = new BankAccount("12345", customer, 1000);

const depositTransaction = new BankTransaction(account, 500, "deposit");
const withdrawalTransaction = new BankTransaction(account, 200, "withdrawal");

depositTransaction.execute();
withdrawalTransaction.execute();

console.log("Account balance:", account.balance);
In questo esercizio stai creando una semplice gestione di transazioni bancarie con classi per clienti, account bancari e transazioni. Puoi sperimentare creando ulteriori transazioni e verificare come cambiano i saldi degli account dopo l'esecuzione delle transazioni.
*/



















