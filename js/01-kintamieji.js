console.clear();

// JavaScript mini užduotys

// Kintamųjų inicijavimas

/*  
1. Sukurti 3 kintamuosius su skaičiaus tipo reikšmėmis
a. Po kiekvieno jų inicijavimo, išvesti į console
*/

const skaicius1 = 15;
const skaicius2 = 2;
const skaicius3 = 109;
console.log(skaicius1);
console.log(skaicius2);
console.log(skaicius3);

/*  
2. Sukurti 3 kintamuosius su teksto tipo reikšmėmis
a. Po kiekvieno jų inicijavimo, išvesti į console
*/

const word1 = 'Jonukas';
const word2 = 'yra';
const word3 = 'berniukas';
console.log(word1);
console.log(word2);
console.log(word3);

/*
3. Sukurti 3 sąrašo tipo kintamuosius su penkiomis skaičių tipo reikšmėmis
a. Po kiekvieno jų inicijavimo, išvesti į console
*/

const numbers1 = [1, 5, 9, 11, 15];
const numbers2 = [2, 4, 8, 56, 89];
const numbers3 = [-56, 85, -2, 0.53, 58];
console.log(numbers1);
console.log(numbers2);
console.log(numbers3);

/*  
4. Sukurti 3 sąrašo tipo kintamuosius su penkiomis teksto tipo reikšmėmis
a. Po kiekvieno jų inicijavimo, išvesti į console
*/

const animalsSounds = ['miau', 'mu', 'au', 'chip', 'be'];
const furnitures = ['stalas', 'kede', 'sofa', 'spinta', 'lova'];
const flowers = ['tulip', 'lily', 'dandelion', 'rose', 'narcissus'];
console.log(animalsSounds);
console.log(furnitures);
console.log(flowers);


console.log('-----------------------------');


// Veiksmai su kintamaisiais

/*  
1. Susumuoti visus skaičiaus tipo kintamuosius
a. Rezultatą išvesti į console
*/

console.log(skaicius1 + skaicius2 + skaicius3);

/*  
2. Sujungti visus teksto tipo kintamuosius taip, jog tarp jų būtų sudarytas tarpas
a. Rezultatą išvesti į console
*/

console.log(word1 + ' ' + word2 +  ' '  + word3);

/*  
3. Apskaičiuoti vertę iš sąrašų kurių verčių tipas yra skaičiai, pagal pateiktą logiką
1-2+3-4+5
a. Rezultatą išvesti į console
*/

// const numbers1 = [1, 5, 9, 11, 15];
const pirmas1 = numbers1[0];
const antras1 = numbers1[1];
const trecias1 = numbers1[2];
const ketvirtas1 = numbers1[3];
const penktas1 = numbers1[4];

console.log(`${pirmas1} - ${antras1} + ${trecias1} - ${ketvirtas1} + ${penktas1}`);

// const numbers2 = [2, 4, 8, 56, 89];

const pirmas2 = numbers2[0];
const antras2 = numbers2[1];
const trecias2 = numbers2[2];
const ketvirtas2 = numbers2[3];
const penktas2 = numbers2[4];

console.log(`${pirmas2} - ${antras2} + ${trecias2} - ${ketvirtas2} + ${penktas2}`);

// const numbers3 = [-56, 85, -2, 0.53, 58];

const pirmas3 = numbers3[0];
const antras3 = numbers3[1];
const trecias3 = numbers3[2];
const ketvirtas3 = numbers3[3];
const penktas3 = numbers3[4];

console.log(`${pirmas3} - ${antras3} + ${trecias3} - ${ketvirtas3} + ${penktas3}`);

/*  
4. Sujungti sąrašų vertes, kurių tipas yra tekstai, nuo sąrašo galo iki pradžios taip, jog tarp jų būtų kablelis ir tarpas
*/

//const animalsSounds = ['miau', 'mu', 'au', 'chip', 'be'];
//const furnitures = ['stalas', 'kede', 'sofa', 'spinta', 'lova'];
//const flowers = ['tulip', 'lily', 'dandelion', 'rose', 'narcissus'];

console.log(animalsSounds[4], animalsSounds[3], animalsSounds[2], animalsSounds[1], animalsSounds[0]);
console.log(furnitures[4], furnitures[3], furnitures[2], furnitures[1], furnitures[0]);
console.log(flowers[4], flowers[3], flowers[2], flowers[1], flowers[0]);

//console.log(animalsSounds.reverse(animalsSounds));
//console.log(furnitures.reverse(furnitures));
//console.log(flowers.reverse(flowers));


console.log('-----------------------------');


// Kintamuju palyginimas

/* 
Lyginant, jei rezultatas tenkina palyginimo sąlygą, tai į console išvesti žodį “Pomidoras”, o jei
sąlyga nėra tenkinama, išvesti sakinį “Bandykite kitą kartą.”.

1. Tarpusavyje palyginti skaičiaus tipo kintamuosius:
    a. kuris didesnis
    b. kuris mažesnis
    c. ar jie lygūs
    d. ar jie nelygūs
    e. kuris didesnis arba lygus
    f. kuris mažesnis arba lygus
*/

const a = 8;
const b = 3;

if (a > b) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite kitą kartą.');
}

if (a < b) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite dar kartą.');
}

if (a === b) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite dar kartą.');
}

if (a !== b) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite dar kartą.');
}

if (a >= b) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite dar kartą.');
}

if (a <= b) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite dar kartą.');
}


/* 
2. Išvesti teksto tipo kintamųjų ilgius
*/

const tekstas1 = 'Lova';
const tekstas2 = 'Spinta';

console.log('Teksto 1 ilgis:', tekstas1.length);
console.log('Teksto 2 ilgis:', tekstas2.length);

/* 
3. Tarpusavyje palyginti teksto tipo kintamųjų ilgius:
    a. kuris didesnis
    b. kuris mažesnis
    c. ar jie lygūs
    d. ar jie nelygūs
    e. kuris didesnis arba lygus
    f. kuris mažesnis arba lygus
*/

if (tekstas1.length > tekstas2.length) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite dar kartą.');
}

if (tekstas1.length < tekstas2.length) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite dar kartą.');
}

if (tekstas1.length === tekstas2.length) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite dar kartą.');
}

if (tekstas1.length !== tekstas2.length) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite dar kartą.');
}

if (tekstas1.length >= tekstas2.length) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite dar kartą.');
}

if (tekstas1.length <= tekstas2.length) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite dar kartą.');
}

/* 
4. Išvesti sąrašo tipo kintamųjų ilgius
*/

const sarasas1 = ['vienas', 'du', 'trys'];
const sarasas2 = ['keturi', 'penki', 'sesi'];

console.log('Saraso 1 ilgis:', sarasas1.length);
console.log('Saraso 2 ilgis:', sarasas2.length);

/* 
5. Tarpusavyje palyginti sąrašo tipo kintamųjų ilgius:
    a. kuris didesnis
    b. kuris mažesnis
    c. ar jie lygūs
    d. ar jie nelygūs
    e. kuris didesnis arba lygus
    f. kuris mažesnis arba lygus
*/

if (sarasas1.length > sarasas2.length) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite dar kartą.');
}

if (sarasas1.length < sarasas2.length) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite dar kartą.');
}

if (sarasas1.length === sarasas2.length) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite dar kartą.');
}

if (sarasas1.length !== sarasas2.length) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite dar kartą.');
}

if (sarasas1.length >= sarasas2.length) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite dar kartą.');
}

if (sarasas1.length <= sarasas2.length) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite dar kartą.');
}