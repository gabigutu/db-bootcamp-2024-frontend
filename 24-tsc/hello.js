var message = 'Salut, TSC!';
console.log(message);
var name1 = 'Gabi';
var message1 = "Hi! My name is ".concat(name1);
function sum(a, b) {
    if (b === void 0) { b = 1; }
    return a + b;
}
console.log(sum(8));
var Masina = /** @class */ (function () {
    function Masina(make, model) {
        this.make = make;
        this.model = model;
    }
    return Masina;
}());
var dacia = new Masina("Dacia", "Dokker");
console.log(dacia);
