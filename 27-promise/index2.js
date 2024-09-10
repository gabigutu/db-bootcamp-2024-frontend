function fetchulMeu() {
    const data = ['Vasilica', 98, true, {make: 'Dacia', 'model': 'Dokker'}];
    let promise = new Promise(function(resolve, reject) {
        setTimeout(
            () => {
                // let chance = Math.random(); // [0; 1)
                // console.log(`Promise #${promiseNo}: Random a dat: ${chance}`)
                // if (chance < 0.5) {
                    resolve(data);
                // } else {
                //     reject(`Promise #${promiseNo}: Respins`);
                // }
            }, 3000
        );
    });
    return promise;
}

let sincron = async function() {
    let promise2 = fetchulMeu();
    let response = await promise2;
    console.log(`Am primit raspunsul `, response)
    console.log('Mesaj de dupa promise');
}
sincron();
console.log('Mesaj de dupa apelul sincron()'); // ??
