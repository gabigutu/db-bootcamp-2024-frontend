let message: String = 'Salut, TSC!'
console.log(message);

let name1 = 'Gabi';
let message1 = `Hi! My name is ${name1}`;

function sum(a, b = 1) { return a + b; }
console.log(sum(8));

class Masina {
    make: String;
    model: String;

    constructor(make: String, model: String) {
        this.make = make;
        this.model = model;
    }
}
let dacia: Masina = new Masina("Dacia", "Dokker");
console.log(dacia);

