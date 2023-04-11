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

let c = 0;
let d = 0;

function skaitmenuKiekisSkaiciuje (c) {
    if (typeof c === 'number' && isFinite(c)) {
        d = ('' + c).length; // Skaiciu paverciam stringu
        return d;
        } else {
        return `Pateikta netinkamo tipo reikšmė.`;
        }
}

console.log(skaitmenuKiekisSkaiciuje(5));
console.log(skaitmenuKiekisSkaiciuje(781));
console.log(skaitmenuKiekisSkaiciuje(37060123456));
console.log(skaitmenuKiekisSkaiciuje(true));
console.log(skaitmenuKiekisSkaiciuje('asd'));
console.log(skaitmenuKiekisSkaiciuje(NaN));

// Kitas būdas

function skaitmenuKiekisSkaiciuje (number) {
    if (typeof number === 'number' && isFinite(number)) {
    const numLength = ('' + number).length;
    return numLength;
       
    } else {
    return 'Pateikta netinkamo tipo reikšmė.';
        }
}
console.log(skaitmenuKiekisSkaiciuje(5));
console.log(skaitmenuKiekisSkaiciuje(781));
console.log(skaitmenuKiekisSkaiciuje(37060123456));
console.log(skaitmenuKiekisSkaiciuje(true));
console.log(skaitmenuKiekisSkaiciuje('asd'));
console.log(skaitmenuKiekisSkaiciuje(NaN));

/*
4. Funkcija pavadinimu “didziausiasSkaiciusSarase”:
    a. priima vieną kintamąjį
    b. jei perduotas kintamasis nėra sąrašo tipo, tai išveda pranešimą “Pateikta
    netinkamo tipo reikšmė.”
    c. jei sąrašas yra tuščias, tai išveda pranešimą “Pateiktas sąrašas negali būti
    tuščias.”
    d. priešingu atveju, funkcija tęsia darbą
    e. pereina per visą pateiktą sąrašą ir į atskirą kintamąjį įsimena skaičių, kuris tuo
    metu yra didžiausias
    f. gražina didžiausią surastą skaičių
    g. TESTAI:
        i. console.log( didziausiasSkaiciusSarase( [ 1 ] ) );
            1. rezultatas: 1
        ii. console.log( didziausiasSkaiciusSarase( [ 1, 2, 3 ] ) );
            1. rezultatas: 3
        iii. console.log( didziausiasSkaiciusSarase( [ -5, 78, 14, 0, 18 ] ) );
            1. rezultatas: 78
        iv. console.log( didziausiasSkaiciusSarase( [ 69, 69, 69, 69, 66 ] ) );
            1. rezultatas: 69
        v. console.log( didziausiasSkaiciusSarase( [ -1, -2, -3, -4, -5, -6, -7, -8 ] ) );
            1. rezultatas: -1
        vi. console.log( didziausiasSkaiciusSarase( “pomidoras” ) );
            1. rezultatas: “Pateikta netinkamo tipo reikšmė.”
        vii. console.log( didziausiasSkaiciusSarase( [] ) );
            1. rezultatas: “Pateiktas sąrašas negali būti tuščias.”
*/

console.log('--4.--')

function didziausiasSkaiciusSarase (sarasas) {
    if (Array.isArray(sarasas) && sarasas.length !== 0) { // kintamasis saraso tipo ir sarasas nera tuscias
        const max = Math.max(...sarasas); // atrenka didžiausią skaičių
        return max;
    } else if (sarasas.length === 0) { // sarasas yra tuscias, netinka -> sarasas = []
            return 'Pateiktas sąrašas negali būti tuščias.';
        } else {
            return 'Pateikta netinkamo tipo reikšmė.';
        }
    }

console.log(didziausiasSkaiciusSarase([1]));
console.log(didziausiasSkaiciusSarase([1, 2, 3]));
console.log(didziausiasSkaiciusSarase([-5, 78, 14, 0, 18]));
console.log(didziausiasSkaiciusSarase([69, 69, 69, 69, 66]));
console.log(didziausiasSkaiciusSarase([-1, -2, -3, -4, -5, -6, -7, -8]));
console.log(didziausiasSkaiciusSarase('pomidoras'));
console.log(didziausiasSkaiciusSarase([]));

