//1st method to create a date:

const now = new Date();
console.log(now);

//2nd method to create a date:
//if we just write the remaining part of our full date then it simply autocorrects itself and then print the
//whole date.
console.log(new Date("Aug 02 2020 17:14:51"));
//OR
console.log(new Date("Dec 14, 2020"));
//OR
console.log(new Date("July 17"));
//in all these three cases written above, whole date gets printed.

//3rd method to create the date:
//Here 2020 is the year, 4 is the month, 20 is the day, and then hour and then second and then finally milliseconds.

console.log(new Date[(2020, 4, 20, 14, 23, 27)]());
console.log(new Date[(2021, 14)]());

//Working with dates:
//there are numerous operations of dates which is shown below.

const future = new Date[(2020, 07, 19, 17, 27)]();
console.log(future);
console.log(future.getFullYear());
console.log(future.getMonth());
//For finding out the day:
console.log(future.getDate());
console.log(future.getHours());
console.log(future.getMinutes());
console.log(future.getSeconds());
console.log(future.getISOString());
//Here it actually gives us the current date:
console.log(future.getTime());

//Similarly for all of the operations with get, we again ahave these all same methods with set.
console.log(future.setFullYear(2040));
//And so on for months, days, hours,minutes etc.
