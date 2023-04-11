/*
5. Funkcija pavadinimu “isrinktiRaides”:
    a. priima du kintamuosius:
        i. pirmasis nurodo tekstą, su kuriuo reikės atlikti užduotį
        ii. antrasis nurodo kas kelintą raidę išrinkti
    b. patikrinti, ar pirmasis kintamasis yra teksto tipo:
        i. jei ne, išvedame pranešimą “Pirmasis kintamasis yra netinkamo tipo.”
        ii. priešingu atveju tęsiame darbą
    c. patikrinti, ar pirmasis kintamasis yra ne tuščias tekstas ir ne didesnis nei 100 simbolių:
        i. jei ne, išvedame pranešimą “Pirmojo kintamojo reikšmė yra netinkamo dydžio.”
        ii. priešingu atveju tęsiame darbą
    d. patikrinti, ar antrasis kintamasis yra skaičiaus tipo:
        i. jei ne, išvedame pranešimą “Antrasis kintamasis yra netinkamo tipo.”
        ii. priešingu atveju tęsiame darbą
    e. patikriname, ar antrojo kintamojo vertė yra didesnė už nulį:
        i. jei ne, išvedame pranešimą “Antrasis kintamasis turi būti didesnis už nulį.”
        ii. priešingu atveju tęsiame darbą
    f. patikriname, ar antrojo kintamojo vertė yra ne didesnė už pirmojo kintamojo ilgį:
        i. jei ne, išvedame pranešimą “Antrasis kintamasis turi būti ne didesnis už pateikto teksto ilgį.”
        ii. priešingu atveju tęsiame darbą
    g. išrenkame iš nurodyto teksto kas kelintą raidę (pagal antrojo kintamojo žingsnį)
    h. išrinktas raides sudėti į atskirą kintamąjį, kuris yra teksto tipo
    i. gražina rezultatą
    j. TESTAI:
        i. console.log( isrinktiRaides( “abcdefg”, 2 ) );
            1. rezultatas: “bdf”
        ii. console.log( isrinktiRaides( “abcdefghijkl”, 3 ) );
            1. rezultatas: “cfil”
        iii. console.log( isrinktiRaides( “abc”, 0 ) );
            1. rezultatas: “Antrasis kintamasis turi būti didesnis už nulį.”
        iv. console.log( isrinktiRaides( “abc”, 4 ) );
            1. rezultatas: “Antrasis kintamasis turi būti ne didesnis už pateikto teksto ilgį.”
        v. console.log( isrinktiRaides( 1561, 2 ) );
            1. rezultatas: “Pirmasis kintamasis yra netinkamo tipo.”
*/

console.log('--5.--')

function isrinktiRaides(tekstas, raide) {
    if (typeof tekstas !== 'string') {      // b. patikrinti, ar pirmasis kintamasis yra teksto tipo, jei ne...
        return 'Pirmasis kintamasis yra netinkamo tipo.';
    } else if (tekstas.length === 0 && tekstas.length < 100) {     // c. patikrinti, ar pirmasis kintamasis yra ne tuščias tekstas ir ne didesnis nei 100 simbolių, jei ne...
        return 'Pirmojo kintamojo reikšmė yra netinkamo dydžio.';
    } else if (typeof raide !== 'number' && !isFinite(raide)) {      // d. patikrinti, ar antrasis kintamasis yra skaičiaus tipo, jei ne...
        return 'Antrasis kintamasis yra netinkamo tipo.'; 
    } else if (raide <= 0) {     // e. patikriname, ar antrojo kintamojo vertė yra didesnė už nulį, jei ne...
        return 'Antrasis kintamasis turi būti didesnis už nulį.';
    } else if (raide > tekstas.length) { //     f. patikriname, ar antrojo kintamojo vertė yra ne didesnė už pirmojo kintamojo ilgį:
        return 'Antrasis kintamasis turi būti ne didesnis už pateikto teksto ilgį.';
    } else {        // g. išrenkame iš nurodyto teksto kas kelintą raidę (pagal antrojo kintamojo žingsnį)
        let raides = '';
        for (i = raide - 1; i < tekstas.length; i = i + raide) {
            raides = raides + tekstas[i]; // h. išrinktas raides sudėti į atskirą kintamąjį, kuris yra teksto tipo
        }
        return raides;
    }
}

console.log(isrinktiRaides('abcdefg', 2)); // rezultatas: “bdf”
console.log(isrinktiRaides('abcdefghijkl', 3)); // rezultatas: “cfil”
console.log(isrinktiRaides('abc', 0)); // “Antrasis kintamasis turi būti didesnis už nulį.”
console.log(isrinktiRaides('abc', 4)); // “Antrasis kintamasis turi būti ne didesnis už pateikto teksto ilgį.”
console.log(isrinktiRaides(1561, 2)); // “Pirmasis kintamasis yra netinkamo tipo.”