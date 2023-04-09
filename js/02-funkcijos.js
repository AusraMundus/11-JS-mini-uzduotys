console.clear();

// Funkcijos

// Parašyti funkcijas, kurios atitinka pateiktus reikalavimus, jei įvykdo reikiamus testus

/*  
1.Funkcija pavadinimu “tusciaFunkcija”:
    a. nepriima jokių kintamųjų
    b. neatlieka jokios vidinės logikos
    c. gražina boolean tipo reikšmę “false”
    d. TESTAS:
        i. console.log( tusciaFunkcija() );
        ii. rezultatas: false
*/

console.log('--1.--')

function tusciaFunkcija() {
    return false;
}
console.log(tusciaFunkcija());

/*  
2. Funkcija pavadinimu “daugyba”:
    a. priima du skaičiaus tipo kintamuosius
    b. atskirame kintamajame įsimena sandaugos reikšmę
    c. gražina saudaugos rezultatą
    d. TESTAI:
        i. console.log( daugyba( skaicius1, skaicius2 ) );
        ii. console.log( daugyba( skaicius3, skaicius2 ) );
        iii. console.log( daugyba( skaicius1, skaicius3 ) );
        iv. rezultatas: teisingos reikšmės;
*/

console.log('--2.--')

function daugyba (a, b) {
    const sandauga = a * b;
    return sandauga;
}

const skaicius1 = 15;
const skaicius2 = 2;
const skaicius3 = 109;

console.log(daugyba(skaicius1, skaicius2));
console.log(daugyba(skaicius3, skaicius2));
console.log(daugyba(skaicius1, skaicius3));


/* 3. Funkcija pavadinimu “skaitmenuKiekisSkaiciuje”:
    a. priima vieną kintamąjį
    b. jei perduotas kintamasis nėra skaičiaus tipo, tai išveda pranešimą “Pateikta
    netinkamo tipo reikšmė.”
    c. priešingu atveju, funkcija tęsia darbą
    d. į atskirą kintamąjį įsimena skaičių sudarančių skaitmenų kiekį
    e. gražina skaitmenų kiekį
    f. TESTAI:
        i. console.log( skaitmenuKiekisSkaiciuje( 5 ) );
            1. rezultatas: 1
        ii. console.log( skaitmenuKiekisSkaiciuje( 781 ) );
            1. rezultatas: 3
        iii. console.log( skaitmenuKiekisSkaiciuje( 37060123456 ) );
            1. rezultatas: 11
        iv. console.log( skaitmenuKiekisSkaiciuje( true ) );
            1. rezultatas: “Pateikta netinkamo tipo reikšmė.”
        v. console.log( skaitmenuKiekisSkaiciuje( “asd” ) );
            1. rezultatas: “Pateikta netinkamo tipo reikšmė.”
        vi. console.log( skaitmenuKiekisSkaiciuje( NaN ) );
            1. rezultatas: “Pateikta netinkamo tipo reikšmė.”
*/ 

console.log('--3.--')

let a = 0;
let b = 0;

function skaitmenuKiekisSkaiciuje (a) {
    if (typeof a !== 'number') {
        console.log('Pateikta netinkamo tipo reikšmė.');
    } else {
        if (typeof a === 0) {
        b = a.length;
    }
        return b;
    }
}

console.log(skaitmenuKiekisSkaiciuje(5));
