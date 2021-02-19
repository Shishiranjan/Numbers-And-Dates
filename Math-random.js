//To generate the random number between 0 and any numbers just we have to use random method.
//Trunc method is usually used to avoid the decimal part of any number.
//Here random number between 1 and 6 is generating but by avoiding the decimal part.
//if we forgot to write +1 at the end then it basically generates the number between 1 and 5 only.
console.log(Math.trunc(Math.random() * 6) + 1);

//but what if we have to generate the random number between two random values. Suppose i have to generate the
//random number between 20 and 50 then how can we do that?

const between = (min, max) => Math.trunc(Math.random() * (max - min) + 1) + min;
console.log(randomInt(20, 50));
