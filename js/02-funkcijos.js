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

const skaicius1 = 15;
const skaicius2 = 2;
const skaicius3 = 109;

function daugyba(skaicius1, skaicius2) {
    return skaicius1 * skaicius2
}
console.log(daugyba(skaicius1, skaicius2));

function daugyba(skaicius3, skaicius2) {
    return skaicius3 * skaicius2
}
console.log(daugyba(skaicius3, skaicius2));

function daugyba(skaicius1, skaicius3) {
    return skaicius1 * skaicius3
}
console.log(daugyba(skaicius1, skaicius3));


