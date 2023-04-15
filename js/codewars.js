// Write a function "greet" that returns "hello world!"

function greet () {
    return 'hello world!'
}
console.log(greet());

console.log('--------------------------------')

/*
Write function bmi that calculates body mass index (bmi = weight / height2).

if bmi <= 18.5 return "Underweight"
if bmi <= 25.0 return "Normal"
if bmi <= 30.0 return "Overweight"
if bmi > 30 return "Obese"
*/

function bmi (weight, height) {
    const bmi = weight / (height * height);
    if (bmi <= 18.5) {
        return `Underweight`;
    } else if (bmi <= 25) {
            return `Normal`;
        } else if (bmi <= 30) {
                return `Overweight`;
            } else if (bmi > 30) {
                    return `Obese`;
    }
}

console.log(bmi(80, 1.80));

console.log('--------------------------------')

/*
Even or Odd
*/

function evenOrOdd(number) {
    if (number % 2 === 0 || number === 0 && number.isInteger) {
      return 'Even';
    } else {
      return 'Odd';
  }
    }
  console.log(evenOrOdd(0));
  console.log(evenOrOdd(20));
  console.log(evenOrOdd(5));

  // Ternary
  function evenOrOdd (number) {
    return number % 2 === 0 || number === 0 ? 'Even' : 'Odd';
  }
  console.log(evenOrOdd(0));
  console.log(evenOrOdd(100));
  console.log(evenOrOdd(19));

console.log('--------------------------------')

console.clear();

/*
Complete the solution so that it reverses all of the words within the string passed in.
Words are separated by exactly one space and there are no leading or trailing spaces.
*/

function reverseWords(str){
    return str.split(' ').reverse().join(' '); 
    // string.split - pavercia i array; array.reverse - apvercia array; array.join - sujungia array elementus ir pavercia i stringa
  }
console.log(reverseWords("hello world!"));
console.log(reverseWords("yoda doesn't speak like this"));


console.log('--------------------------------')

// su FOR
function reverseWords(str){
    let reverse = [];
    let words = str.split(" ");
    for(let i = words.length - 1; i >= 0; i--){
      reverse.push(words[i]); 
      
    }
    return reverse.join(" ")
  }
  console.log(reverseWords("hello world!"));

  // kitas budas
  function reverseWords(str){
    let splatArr = str.split(' ')
    let reverseArr = splatArr.reverse()
    let rejoinedArr = reverseArr.join(' ')
    return  rejoinedArr
  }
  console.log(reverseWords("hello world!"));


  console.log('--------------------------------')

/*
Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).
Apsvarstykite avių masyvą / sąrašą, kurių vietoje gali trūkti kai kurių avių. Mums reikia funkcijos, kuri suskaičiuotų masyve esančių avių skaičių (tiesa reiškia, kad yra).

For example,

[true,  true,  true,  false,
  true,  true,  true,  true ,
  true,  false, true,  false,
  true,  false, false, true ,
  true,  true,  true,  true ,
  false, false, true,  true]
The correct answer would be 17.

Hint: Don't forget to check for bad values like null/undefined
*/

const array1 = [true,  true, true,  true,  false,
    true,  true,  true,  true ,
    true,  false, true,  false,
    true,  false, false, true ,
    true,  true,  true,  true ,
    false, false, true,  true, false, true ];

  function countSheeps(arrayOfSheep) {
    let count = 0;
    for (let i = 0; i < arrayOfSheep.length; i++) { // masyvo reiksmems prasukti
        if (arrayOfSheep[i] === true && arrayOfSheep[i] > 0) { // jei true ir daugiau uz 0, skaiciuok - count++
            count++;         
        }
    }
    return count; // grazink suskaiciuota
  }

 console.log(countSheeps(array1));

 // kitas budas

 function countSheeps(arrayOfSheeps) {
    return arrayOfSheeps.filter(Boolean).length;
  }
  console.log(countSheeps(array1));

 console.log('--------------------------------')

/*
What if we need the length of the words separated by a space to be added at the end of that same word and have it returned as an array?

Example(Input --> Output)

"apple ban" --> ["apple 5", "ban 3"]
"you will win" -->["you 3", "will 4", "win 3"]
Your task is to write a function that takes a String and returns an Array/list with the length of each word added to each element .

Note: String will have at least one element; words will always be separated by a space.
*/

 function addLength(str) {
    let words = str.split(' '); // stringas i array
    let result = []; // sakom, kad reikes array
    for (let i = 0; i < words.length; i++) { //prasukam loopa, nes array
      let word = words[i]; // imam kiekviena zodi
      let len = word.length; // nustatom zodzio ilgi
      result.push(word + ' ' + len); // sudedam i array zodis + jo ilgis
    }
    return result; // grazinam rezultata
  }
  
  console.log(addLength('hello world how u doing'));

  console.log('--------------------------------')

  /*
Summation
Write a program that finds the summation of every number from 1 to num. The number will always be a positive integer greater than 0.

For example (Input -> Output):

2 -> 3 (1 + 2)
8 -> 36 (1 + 2 + 3 + 4 + 5 + 6 + 7 + 8)
  */
  
function summation (num) {
    let total = 0;
      for(let i = 1; i <= num; i++) { 
        total = total + i; // total += i
      }
      return total;
  }
  console.log(summation(8));

  
console.log('--------------------------------')

/*
Clock shows h hours, m minutes and s seconds after midnight.

Your task is to write a function which returns the time since midnight in milliseconds.

Example:
h = 0
m = 1
s = 1

result = 61000
Input constraints:

0 <= h <= 23
0 <= m <= 59
0 <= s <= 59
*/

function past(h, m, s) {
    const milisec = (h * 60 * 60 + m * 60 + s) * 1000; // 1s=1000ms
    return milisec;
} 
console.log(past(0,1,1));

// ARROW function
const past2 = (h, m, s) => (3600 * h + 60 * m + s) * 1000;

console.log(past2(1,1,1)); 
