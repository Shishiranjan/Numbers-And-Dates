//Suppose one number is 23.4 then that number be  rounded to 23 but if number is 23.7 then that number can
//be rounded to 24. So for rounding the numbers we have three methods: round, ceil and floor.

//Round method simply eliminate the decimal value and then print the nearest value.

console.log(Math.round(52.6));
console.log(Math.round(97.1));

//To round the value downwards we use floor method.

console.log(Math.floor(76.5));
console.log(Math.floor(73.6));
//Floor method actually also works for negative value but truncmetho doesn't.
console.log(Math.floor(-56.5));

//but to round the value upwards we use ceil method.

console.log(Math.ceil(76.5));
console.log(Math.ceil(77.7));

//To round the decimal value we use one method called as toFixed along with numbers like this.
//here it basically returns the number upto two decimal places.
console.log((21.4).toFixed(2));
