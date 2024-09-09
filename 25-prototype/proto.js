function Masina(make, model) {
    this.make = make;
    this.model = model;
    this.getMakeModel = function() {
        return "Masina este: " + this.make + " " + this.model;
    }
}

function Person(name) {
    this.name = name;
}

var dacia = new Masina("Dacia", "Dokker");
var tesla = new Masina("Tesla", "Model X");
console.log(dacia, tesla);

console.log("Dacia este Masina?", dacia.__proto__ === Masina.prototype);
// console.log(Masina.prototype, dacia.__proto__);

console.log("Dacia este Person?", dacia.__proto__ === Person.prototype);

console.log("Cls Masina este Cls Person?", Masina.prototype === Person.prototype);

console.log("Dacia are acelasi prototip ca Tesla?", dacia.__proto__ === tesla.__proto__);

Masina.prototype.noWheels = 4;
console.log("Cate roti are Dacia? (initial)", dacia.noWheels);
dacia.noWheels = 3;
console.log("Cate roti are Dacia? (dupa modificare)", dacia.noWheels);
console.log("Cate roti are Tesla?", tesla.noWheels);
console.log("Cate roti are prototipul Masina?", Masina.prototype.noWheels);
console.log("Cate roti are prototipul masinii Dacia?", dacia.__proto__.noWheels);

Masina.prototype.soferi = ['Vasilica', 'Gigel', 'Ionel'];
console.log('Care sunt soferii de pe Dacia?', dacia.soferi);
console.log('Care sunt soferii de pe Tesla?', tesla.soferi);

dacia.soferi.push('Dorel');
console.log('Care sunt soferii de pe Dacia?', dacia.soferi);
console.log('Care sunt soferii de pe Tesla?', tesla.soferi);

Masina.prototype.hello = function() {
    return "Hello from prototype function";
}
console.log('Hello Masina', dacia.hello());


function Parent(name) {
    this.name = name;
}
Parent.prototype.getParentName = function() {
    return 'Parent name: ' + this.name;
}

vasile = new Parent("Vasile");
console.log(vasile.getParentName());

Child.prototype = new Parent(vasile.name);

function Child(childName) {
    this.childName = childName;
}
Child.prototype.getChildName = function() {
    return 'Child name: ' + this.childName;
}

copil = new Child("Copil");
console.log(copil.getChildName());
console.log(copil.getParentName());

