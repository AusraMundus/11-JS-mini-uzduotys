// Write a function "greet" that returns "hello world!"

function greet () {
    return 'hello world!'
}
console.log(greet());


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
    } else {
        if (bmi <= 25) {
            return `Normal`;
        } else {
            if (bmi <= 30) {
                return `Overweight`;
            } else {
                if (bmi > 30) {
                    return `Obese`;
                }
            }
        }
    }
}
console.log(bmi(80, 1.80));


