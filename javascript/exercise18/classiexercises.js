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

*/


