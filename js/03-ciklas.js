// Ciklo for panaudojimas

/* 
1. Suskaičiuoti ką gausime susumavus skaičius intervale tarp (imtinai):
    a. 0 … 0
    b. 0 … 4
    c. 0 … 100
    d. 574 … 815
    e. -50 … 50
    f. -70 … 30
*/

console.log('--1.--')

let sumA = 0;
for (let i = 0; i <= 0; i++) {
    sumA += i; // sumA = sumA + i;
}
console.log(sumA);

let sumB = 0;
for (let i = 0; i <= 4; i++) {
    sumB += i;
}
console.log(sumB);

let sumC = 0;
for (let i = 0; i <= 100; i++) {
    sumC += i;
}
console.log(sumC);

let sumD = 0;
for (let i = 574; i <= 815; i++) {
    sumD += i;
}
console.log(sumD);

let sumE = 0;
for (let i = -50; i <= 50; i++) {
    sumE += i;
}
console.log(sumE);

let sumF = 0;
for (let i = -70; i <= 30; i++) {
    sumF += i;
}
console.log(sumF);

/* 
2. panaudojant ciklą perrašyti tekstinio tipo kintamųjų reikšmes iš kito galo:
    a. pvz.: “abcdef” -> “fedcba”
*/

console.log('--2.--');

let word = 'abcdef';
let wordReversed = '';

for (let i = word.length - 1; i >= 0; i--) {
    wordReversed = wordReversed + word[i]; // wordReversed += word[i]
}
console.log(wordReversed);

/* 
3. Suskaičiuoti, kiek nurodytame intervale yra skaičių, kurie dalijasi be liekanos iš 3, 5 ir 7
atskirai:
    a. 0 - 11
    b. 8 - 31
    c. -18 - 18
    d. rezultatą pateikti tokiu formatu:
        i. Skaičių intervale tarp 0 ir 11, besidalijančių be liekanos iš 3 yra 4 vienetai.
        ii. Skaičių intervale tarp 0 ir 11, besidalijančių be liekanos iš 5 yra 3 vienetai.
        iii. Skaičių intervale tarp 0 ir 11, besidalijančių be liekanos iš 7 yra 2 vienetai.
*/

console.log('--3.--');

let dalyba1 = 0;
let dalyba2 = 0;
let dalyba3 = 0;

for (let i = 0; i <= 11; i++) {
    if (i % 3 == 0) {
        dalyba1++;
    }
    if (i % 5 == 0) {
        dalyba2++;
    }
    if (i % 7 == 0) {
        dalyba3++;
    }
}
console.log(`Skaičių intervale tarp 0 ir 11, besidalijančių be liekanos iš 3 yra ${dalyba1} vienetai.`);
console.log(`Skaičių intervale tarp 0 ir 11, besidalijančių be liekanos iš 5 yra ${dalyba2} vienetai.`);
console.log(`Skaičių intervale tarp 0 ir 11, besidalijančių be liekanos iš 7 yra ${dalyba3} vienetai.`);

console.log('------------------------');

let dalyba4 = 0;
let dalyba5 = 0;
let dalyba6 = 0;

for (let i = 8; i <= 31; i++) {
    if (i % 3 == 0) {
        dalyba4++;
    }
    if (i % 5 == 0) {
        dalyba5++;
    }
    if (i % 7 == 0) {
        dalyba6++;
    }
}
console.log(`Skaičių intervale tarp 8 ir 31, besidalijančių be liekanos iš 3 yra ${dalyba4} vienetai.`);
console.log(`Skaičių intervale tarp 8 ir 31, besidalijančių be liekanos iš 5 yra ${dalyba5} vienetai.`);
console.log(`Skaičių intervale tarp 8 ir 31, besidalijančių be liekanos iš 7 yra ${dalyba6} vienetai.`);

console.log('------------------------');

let dalyba7 = 0;
let dalyba8 = 0;
let dalyba9 = 0;

for (let i = -18; i <= 18; i++) {
    if (i % 3 == 0) {
        dalyba7++;
    }
    if (i % 5 == 0) {
        dalyba8++;
    }
    if (i % 7 == 0) {
        dalyba9++;
    }
}
console.log(`Skaičių intervale tarp -18 ir 18, besidalijančių be liekanos iš 3 yra ${dalyba7} vienetai.`);
console.log(`Skaičių intervale tarp -18 ir 18, besidalijančių be liekanos iš 5 yra ${dalyba8} vienetai.`);
console.log(`Skaičių intervale tarp -18 ir 18, besidalijančių be liekanos iš 7 yra ${dalyba9} vienetai.`);