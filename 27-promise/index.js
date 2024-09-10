function fetchulMeu() {
    const data = ['Vasilica', 98, true, {make: 'Dacia', 'model': 'Dokker'}];
    let promise = new Promise(function(resolve, reject) {
        setTimeout(
            () => {
                let chance = Math.random(); // [0; 1)
                console.log(`Random a dat: ${chance}`)
                if (chance < 0.5) {
                    resolve(data);
                } else {
                    reject(`Respins`);
                }
            }, 3000
        );
    });
    return promise;
}

let promiseNo = 1;
let promise = fetchulMeu();
promise.then(function(response) {
    console.log(promise);
    console.log('Am primit datele: ', response);
    const masina = response[3];
    console.log(`Masina pe care am primit-o este ${masina.make} ${masina.model}`);
}).catch(function(error) {
    console.log(promise);
    console.error('Promise-ul nu s-a rezolvat. Mesaj: ' + error);
});

console.log(promise);

console.log('Mesaj de dupa promise'); //   
// continuam executia

