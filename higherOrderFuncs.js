// Function Logger
// Write a function functionLogger that accepts a function to run and an argument to pass to that function. 
// Your functionLogger should log the message "Function starting", run the function, log "Function complete", 
// and return the result of the function call. Note the unit tests will check that the correct value is returned; 
// they do not check if you console logged the right values at the right time.

function squareNum(x) {
    return x * x;
    }

const functionLogger = (func, arg) => {
    console.log('Function starting')
    let result = func(arg)
    console.log('Function complete')
    return result
}

let squareOfFour = functionLogger(squareNum, 4);
// Function starting
// Function complete

console.log(squareOfFour)    // 16


// Finder Function
// Define a function 'finderFunction' that takes an array and a callback. Pass each element from the array into the 
// callback. If the callback returns true, return the index of the current element. If the callback never returns true, 
// return -1;

let numbers = [1, 3, 5, 64, 7, 12];
let odds = [9, 13, 15, 17];

function isEven(num) {
    return !(num % 2);
}

const finderFunction = (arr, func) => {
    for(i = 0; i < arr.length; i++){
        if(func(arr[i])) return i
    }
    return -1
}

console.log(finderFunction(numbers, isEven)) // 3
console.log(finderFunction(odds, isEven)) // -1


// Who's a Special?
// Write a function whosASpecial that takes an array of pets and returns a string confirming what you already knew: 
// all of the pets are very special! Feel free to add your own special pets to the array!
// Use .forEach in your answer.

let specialPets = [{
    name: 'Sadie',
    species: 'cat'
    }, {
    name: 'Layla',
    species: 'cat'
    }, {
    name: 'Bogie',
    species: 'dog'
    }
];

const whosASpecial = (arr) => {
    let resultStr = []
    arr.forEach(element => {
        resultStr.push(`${element.name} the ${element.species} is very special!`)
    });
    resultStr = resultStr.join(' ')
    console.log(resultStr)
    return resultStr
}

whosASpecial(specialPets);
// => Sadie the cat is very special! Layla the cat is very special! Bogie the dog is very special!


// My For Each
// Write a function myForEach that accepts an array and a callback function. The behavior of myForEach should mirror 
// the functionality of the native .forEach() array method as closely as possible

let sum = 0;

function addToSum(num) {
    sum += num;
}

let nums = [1, 2, 3];

const myForEach = (arr, func) => {
    for(let i = 0; i < arr.length; i++){
        func(arr[i])
    }
}

myForEach(nums, addToSum);

console.log(sum); // 6


// Chain Reaction
// Define a function, 'chainReaction', that takes a starting value and an array of functions.
// 'chainReaction' should pass the starting value into the first function in the array. It should pass the value 
// returned by the first function into the second function, and so on until every function in the array was called.
// 'chainReaction' should return the final value returned by the final function in the array.

function addTen(num) {
    return num + 10;
}

function subtractFive(num) {
    return num - 5;
}

function multiplyFive(num) {
    return num * 5;
}

const chainReaction = (val, funcArr) => {
    for(let i = 0; i < funcArr.length; i++){
        val = funcArr[i](val)
    }
    console.log(val)
    return val
}

chainReaction(0, [addTen, subtractFive, multiplyFive]); // => 25
chainReaction(0, [subtractFive, multiplyFive, addTen]); // => -15


// Biller Builder
// Write a function billerBuilder that takes the name of a state as a parameter. billerBuilder should return a new 
// function that takes the price of an item and returns the correct final price of the item, given the following:
// if NY, charge 3% for shipping and 4% for sales tax
// if NJ, charge 5% for shipping and 6.625% for sales tax

const billerBuilder = (state) => {
    let shipping, salesTax
    if(state == 'NY'){
        shipping = 1.03
        salesTax = 1.04
    } else if(state == 'NJ'){
        shipping = 1.05
        salesTax = 1.06625
    }
    const calc = (amount) => amount * shipping * salesTax
    return calc
}

let newYorkBiller = billerBuilder('NY');
console.log(newYorkBiller(100)) // => 107.12 (100 * 1.03 * 1.04)

let newJersBiller = billerBuilder('NJ');
console.log(newJersBiller(100)) // => 111.95625 (100 * 1.05 * 1.06625)


// Times Tables
// Write a function that generates a 'Times Tables' function for any number passed in. The function should accept 
// a single parameter (a number) and return a function that itself returns the product of that number and any number 
// passed in.

const timesTable = (num1) => {
    const times = (num2) => num1 * num2
    return times
}

let ninesTable = timesTable(9);
console.log(ninesTable(8))    // => 72

let twelvesTable = timesTable(12);
console.log(twelvesTable(100))    // => 1200


// Partial
// Write a function, partial, that accepts a callback and one argument (let's call it 'arg a'). Partial should return 
// a new function. When invoked, the new function will:
// Accept its own argument (let's call it 'arg b')
// Call the callback, passing in 'arg a' as the first argument and 'arg b' as the second argument
// Return the value returned by the callback

function summer (a, b) {
    return a + b
};

const partial = (callback, argA) => {
    const newFunc = (argB) => callback(argA, argB)
    return newFunc
}

let sumFive = partial(summer, 5);
console.log(sumFive(10)) // => 15;


// Call Count
// Write a function, callCount, that returns a new function. The new function should return the number of times its 
// been called.

const callCount = () => {
    let count = 1
    const counterFunction = () => count++
    return counterFunction
}

let newFunction1 = callCount();
let newFunction2 = callCount();

console.log(newFunction1()); // => 1
console.log(newFunction1()); // => 2

console.log(newFunction2()); // => 1
console.log(newFunction2()); // => 2

console.log(newFunction1())
console.log(newFunction2())


// Stringify
// Define a function, stringify, that takes a callback and returns a new function. When the new function is called, 
// it should call the callback, and return the value returned by the callback, but not before explicitly coercing the 
// returned value to a string.

function returnsANumber() {
    return 100;
}

const stringify = (func) => {
    const strFunc = () => {
        let str = func()
        return str.toString()
    }
    return strFunc
}

let newFunction = stringify(returnsANumber);
console.log(newFunction()); // => '100'
console.log(typeof newFunction())


// Get Dog Breeder
// Remember the dog breeder question from an earlier workshop? It assumed that the default name for a dog should be 
// 'Steve', and the default age should be 0.
// Define a function, getDogBreeder, that takes a default name and age, and returns a dogBreeder function. The 
// returned dogBreeder function should use the default values defined when dogBreeder was called.
// You can copy over the solution code from dogBreeder if you'd like.

const getDogBreeder = (dogName, dogAge) => {
    const dog = {name: dogName, age: dogAge}

    const dogBreeder = (var1, var2) => {
        const newDog = {...dog}
        if(typeof var1 == 'string') newDog.name = var1
        else if(typeof var1 == 'number') newDog.age = var1
        if(var2) newDog.age = var2
        return newDog
    }
    return dogBreeder
}

let puppyFarm = getDogBreeder('Snoopy', 0);
let rescueShelter = getDogBreeder('Odie', 3);

console.log(puppyFarm('Olaf', 3)); // => {name: 'Olaf', age: 3};
console.log(puppyFarm(2)); // => {name: 'Snoopy', age: 2}

console.log(rescueShelter()); // => {'Odie', 3}


// Caching is used in software engineering to temporarily store the result of an "expensive" operation (takes a lot of time or memory). 
// If that result is needed again in the near future, it can be retrieved from the cache instead of calculating it again.
// Write a function, cacheSavings, that takes a callback and returns a new function that takes one argument. When the new function is 
// called for the first time, it should call the callback with the argument and save the result of the function call. If the new function is 
// called again with the same argument, the new function should retrieve the stored value instead of calling the callback again!

function adds10(num) {
    let start = Date.now();
    let end = Date.now();

    // pause for 3 seconds, to make the function expensive!
    while (end - start < 3000) {
        end = Date.now();
    }

    return num + 10;
}

let cache = {}

const cacheSavings = (func) => {
    const cacheFunc = (arg) => {
        if(!cache[arg]){
            cache[arg] = func(arg)
        }
        return cache[arg]
    }
    return cacheFunc
}

let cachedAdds10 = cacheSavings(adds10);

console.log(cachedAdds10(20)); // => returns 30, takes 3 seconds!
console.log(cachedAdds10(0)); // returns 10, takes 3 seconds!

console.log(cachedAdds10(20)); // => returns 30, takes no time at all!