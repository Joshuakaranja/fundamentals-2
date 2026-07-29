// // 'use script';

// // let hasDriversLicense = false;
// // const passTest = true;

// // if (passTest) hasDriversLicense = true;
// // if(hasDriversLicense) console.group('i can drive:d');

// // // const interface = 'audio';
// // // const private = 534;
// // // const if = 23;

// // function logger(){
// //     console.log('my name is josh')
// // }
// // logger();
// // logger();
// // logger();

// // function fruitProcessor(apples,oranges){
// //     console.log(apples,oranges)
// //     const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
// //     return juice;

// // }
// // const applejuice = fruitProcessor(5 , 0)
// // console.log(applejuice)

// // // function declaration

// // function calAge1(birthyear){
// //     return 2037 - birthyear
// // }
// // const age1 = calAge1(1991);
// // console.log(age1)

// // // function expression

// // const calAge2 = function(birthyear){
// //     return 2037 - birthyear;

// // }
// // const age2 = calAge2(1991);
// // console.log(age1, age2)

// //arrow function

// // const calAge3 = birthYear => 2037 - birthYear;
// // const age3 = calAge3(1991);
// // console.log(age3);

// // const yearsUntilRetirement = (birthYear, firstName) =>{
// //     const age = 2037 - birthYear;
// //     const retirement = 65 - age;
// //     return `${firstName} retires in ${retirement}years`;
// // }

// // console.log(yearsUntilRetirement(1991 ,'Josh'));
// // console.log(yearsUntilRetirement(2001 ,'Hinata'));

// // // functions calling another function (call back function)
// // function cutFruitPieces(fruit){
// //     return fruit * 4;
// // }
// // function fruitProcessor(apples,oranges){
// //     const applePieces = cutFruitPieces(apples);
// //     const orangePieces = cutFruitPieces(oranges);

// //     const juice = `Juice with ${applePieces} piece of apple and ${orangePieces}pieces of orange`;
// //     return juice;

// // }
// // console.log(fruitProcessor(2,3));
// // normal function 

// const calAge = function (birthYear){
//     return 2037 - birthYear;
// }
// const yearsUntilRetirement = function (birthYear , firstName){
//     const age = calAge(birthYear);
//     const retirement = 65 - age;

//     if(retirement > 0){
//         console.log(`${firstName} retires in ${retirement} years`);
//         return retirement;

//     }else {
//         console.log(`${firstName} has already retired`);
//         return -1
//     }
//     }
//    console.log (yearsUntilRetirement(1991 , 'Josh'));
//    console.log (yearsUntilRetirement(1959, 'Ann'));
const friends = ['Michael','josh','hinata'];
console.log(friends)

const year = new Array (1991 , 1984, 2001)
console.log(friends[0])

console.log(friends.length)
console.log(friends[friends.length-1])
 
const firstName = 'Josh';
const Josh = [firstName, 'Josh', 2001 - 2026 , 'developer', friends];
console.log(Josh)
console.log(Josh.length)

//exercise

const calcAge = function(birthYear){
    return 2026 - birthYear;
}
// method 1

const years = [1990 , 2001 , 2006 , 2008 , 2009];
const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length-1]);
console.log(age1,age2,age3)

// method2
const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[years.length-1])];
console.log(ages)

const friend = ['michael', 'josh', 'hinata']

const newlength = friend.push('julia');
console.log(friend);
console.log(newlength)

friend.unshift('Blessed');
console.log(friend)

friend.pop();
const popped = friend.pop();
console.log(popped);
console.log(friend);

friend.shift()
console.log(friend)

console.log(friend.indexOf('josh'));
console.log(friend.indexOf('hinata'));

friends.push(23);
console.log(friend.includes(23))
console.log(friend.includes('josh'))
console.log(friend.includes('bob'))

if(friend.includes('josh')){
    console.log('You have a friend called josh')
}