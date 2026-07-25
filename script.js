'use script';

let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;
if(hasDriversLicense) console.group('i can drive:d');

// const interface = 'audio';
// const private = 534;
// const if = 23;

function logger(){
    console.log('my name is josh')
}
logger();
logger();
logger();

function fruitProcessor(apples,oranges){
    console.log(apples,oranges)
    const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
    return juice;

}
const applejuice = fruitProcessor(5 , 0)
console.log(applejuice)

// function declaration

function calAge1(birthyear){
    return 2037 - birthyear
}
const age1 = calAge1(1991);
console.log(age1)

// function expression

const calAge2 = function(birthyear){
    return 2037 - birthyear;

}
const age2 = calAge2(1991);
console.log(age1, age2)

