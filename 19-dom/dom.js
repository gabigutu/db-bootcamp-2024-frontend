function aiDatClick() {
    console.log('Ai dat click pe buton');
}

document.addEventListener('DOMContentLoaded', function() {

    const elementNumePersoana = document.getElementById('nume-persoana');
    console.log(elementNumePersoana);
    console.log(elementNumePersoana.innerText);
    elementNumePersoana.innerText = 'Gigel';
    const styles = getComputedStyle(elementNumePersoana);
    console.log(`Culoare text = ${styles.color}`);
    console.log(styles, styles.border);
    elementNumePersoana.setAttribute('title', 'Numele persoanei');

    const elementsArticol = document.getElementsByClassName('articol');
    for (elemArticol of elementsArticol) {
        console.log(elemArticol);
        console.log(elemArticol.innerHTML);
        console.log(elemArticol.innerText);
        elemArticol.innerText += ' (copyright DB)';
    }

    const elementsDiv = document.getElementsByTagName('div');
    for (elemDiv of elementsDiv) {
        console.log(elemDiv, elemDiv.nodeName);
    }

    const elementsCursuri = document.getElementsByName('cursuri');
    console.log(elementsCursuri);
    for (elemCurs of elementsCursuri) {
        console.log(elemCurs);
        console.log(elemCurs.value, elemCurs.nodeName, elemCurs.attributes['type']);
        const type = elemCurs.attributes['type'];
        console.log(type.name, type.value)

        sb = '';
        for (att of elemCurs.attributes) {
            sb += 'Inca un atribut: ' + att.name + ' = ' + att.value + "\n";
        }
        console.log(sb);

        const importanta = elemCurs.dataset.importanta;
        console.log(`Importanta = ${importanta}`)
    }

    const elemCursuri1 = document.querySelector('input[name=cursuri]');
    // document.querySelector('input[value="java_intro"]')
    const elemCursuri2 = document.querySelector('#lista-cursuri>li>input');
    console.log(elemCursuri1, elemCursuri2);

    const elemCursuriAll1 = document.querySelectorAll('input[name=cursuri]');
    // document.querySelector('input[value="java_intro"]')
    const elemCursuriAll2 = document.querySelectorAll('#lista-cursuri>li>input');
    console.log(elemCursuriAll1, elemCursuriAll2);

    const idAltButon = 'alt-buton';
    const elemAltButon = document.getElementById(idAltButon);
    if(elemAltButon !== null) {
        // elemAltButon.addEventListener('click', aiDatClick);

        // elemAltButon.addEventListener('click', function() {
        //     console.log('Ai dat click si am intrat in functia anonima');
        // });

        elemAltButon.addEventListener('click', () => {
            console.log('Ai dat click si am intrat in arrow function (addEventListener)')
        });

        elemAltButon.onclick = () => {
            console.log('Ai dat click si am intrat in arrow function (onEvent)')
        };
    } else {
        console.error(`Nu am gasit elementul cu id-ul ${idAltButon}`);
    }
});

window.addEventListener('load', function() {
    console.log('s-au incarcat toate resursele (addEventListener)');
});

window.onload = function() {
    console.log('s-au incarcat toate resursele (onEvent)');
};

window.addEventListener('beforeunload', function(event){
    event.preventDefault();
    // alert('vrei sa inchizi pagina');
});

// alert('un simplu alert');

