//Someties we have to handle with such a big data. For ex. to remember the  birthdate of all of the facebook users of
//the world.
//In previous versions of ES there is a limit to set any number upto some level.
//let's just check that.
console.log(Number.MAX_SAFE_INTEGER);
//As we know that our pc is of 64 bit in which 53 bit is only used to store numbers while other bits are used
//to store some vital information. So what i want to say is that previously, the number more than 53 bit
//is not defined in JS. But from ES2020 onwards, there is no any limit.

console.log(2 ** 53 + 1);
console.log(2 ** 53 + 4);
console.log(2 ** 53 + 3);

//To represent the number as bigint just right n behind any numbers.

console.log(541557951324978952458523552696n);
//OR an alternative way to do so.

console.log(BigInt(45989633356));

//With ES2020 you can be also able to to do various math operations on bigint numbers.

console.log(10000n + 100000n);
console.log(215866776131313156494154646 * 1421446468n);

const huge = 205444878677893123454847988647897n;
const num = 524;
//You cannot be able to multiply a bigint number with just a regular number.
console.log(huge * BigInt(num));
//but you can attatch a string along with bigint numbers like this.

console.log(huge + "is too much large number to do some computations");

//Divisions:

console.log(11n / 3n);
console.log(10n / 3);
