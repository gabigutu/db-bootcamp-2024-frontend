console.log('test');
var x = 10;
console.log(x);
console.log(typeof x);
var y = 98.2;
console.log(y, typeof y);
x = 'Salut, JS!';
console.log(x, typeof x);
x = true;
console.log(x, typeof x);
console.log(typeof typeof x);
console.log(typeof typeof y);

// console.log(z);
var t;
console.log(t); // undefined
console.log(typeof t); // 'undefined'
console.log(typeof typeof t); // string

var elems = ["Vasile", "Ion", 98, true];
console.log(elems, elems[1], typeof elems)

var brothers = ['Alexandra', 'Popescu', "Ionel"]
var vasilica = {
    name: 'Vasilica',
    'age': 89,
    "alive": true,
    'nephews': ['Adi', 'Gigi'],
    brothers,
    noBrothers: brothers.length
};
console.log(vasilica);

p = 4;
console.log(p, typeof p);

if (true) {
    var student = 'Nume student';
}
console.log(student);

if (true) {
    let masina = 'Dacia';
}
// console.log(masina); // not defined

const nota = 9;
// nota = 8;

// ecmascript

const numarStr = '987';
const numarNumber = 987;
console.log(numarStr == numarNumber);
console.log(numarStr === numarNumber);
console.log(numarStr == numarNumber && typeof numarStr === typeof numarNumber);

let a1 = 90;
if ((a1 = 80) && true) {
}
console.log(a1); // 80
if (false && (a1 = 70)) {
}
console.log(a1); // 80

console.log('age' in vasilica);
console.log('altceva' in vasilica);
// console.log(test in vasilica); // test is not defined
let numeCheie = 'age';
console.log(numeCheie in vasilica);
console.log(vasilica.brothers);
console.log(vasilica['brothers']);

// var elems = ["Vasile", "Ion", 98, true];
console.log(elems[1]);

for (elem of elems) {
    console.log('Elems is: ' + elem);
}

// for (value of vasilica) { // not iterabile
//     console.log('Values is: ' + value);
// }

for (cheie in vasilica) {
    console.log('key is: ' + cheie);
}
for (cheie in elems) {
    console.log('key is: ' + cheie); // ?
}

function sum(a, b, ...others) {
    let sum = a+b;
    for (val of others) {
        sum += val;
    }
    return sum;
}
console.log(sum(9, 7));
console.log(typeof sum);

let dif = function(a, b) {
    return a-b;
}
console.log(dif(100, 90));
console.log(typeof dif);

let salutama = (nume = 'Necunoscut') => {
    console.log('am intrat in functie');
    return `Salut, ${nume}`; // template string
}
console.log(salutama('Gabi'));
console.log(typeof salutama);

console.log(salutama());

console.log(sum(90, 10));
console.log(sum(90, 10, 1, 3, 4, 5, 7, 3));

function spreadSum(x, y, z) {
    console.log(typeof x, typeof y, typeof z);
    return x + y + z;
}
const numbers = [1, 2, 3];
console.log(spreadSum(...numbers));
// console.log(spreadSum(numbers)); // ????

console.log(spreadSum(...[9, 8, 90]));

let arr1 = [9, 8, 2];
let arr2 = arr1; // referinta la acelasi array
arr2[1] *= 10;
console.log(arr1[1]); // 80

let arr3 = [];
for (el of arr1) {
    arr3.push(el);
}  // duplicare array (clasic)

arr3[2] *= 10;
console.log(arr3);
console.log(arr1);

let arr4 = [...arr1]; // duplicare array (cu spread operator)
arr1[0] *= 10;
console.log(arr4);
console.log(arr1);

let student1 = {
    nume: 'Popescu',
    prenume: 'Vasile'
}
let student2 = student1; // referinta la acelasi obiect
student2.prenume = 'Ion';
console.log(student1);

let student3 = {}
for (cheie in student1) {
    // student3.cheie = 'Test'; // student3['cheie'] = 'Test';
    student3[cheie] = student1[cheie];
}   // duplicare obiect (clasic)
student3.nume = 'Ionescu';
console.log(student3);
console.log(student1);

let student4 = { ...student1 }  // duplicare obiect (cu spread operator)
student4.nume = 'Haralambie';
console.log(student4);
console.log(student1);

let baieti = ['Ionel', 'Adrian'];
let fete = ['Andreea', 'Alexandra'];
let all = [...baieti, ...fete];
console.log(all);

[nr1, nr2, nr3] = [9, 6, 2];
console.log(nr1, nr2, nr3);

[nr1, nr2, nr3] = [7, 13, 15, 100, 200];
console.log(nr1, nr2, nr3);

[nr1, nr2, nr3] = [88, 55];
console.log(nr1, nr2, nr3);

[nr1, nr2, nr3 = 99999999] = [88, 55];
console.log(nr1, nr2, nr3);

let x1 = 99;
let x2 = 11;
let aux = x1;
x1 = x2;
x2 = aux;
console.log(x1, x2);

x1 = 99; x2 = 11;
[x2, x1] = [x1, x2]; // interschimbare variabile
console.log(x1, x2);

let car = {
    make: 'Tesla',
    model: 'ModelX',
}

let { make, model } = car;
// ( {make, model} ) = car; // TODO: check this
console.log(make, model);
