// Very Odd
// Write a function, veryOdd. The function accepts an array of numbers. It should return a new array that 
// contains only the odd numbers from the given array. veryOdd must not mutate the given array.

const veryOdd = (arr) => {
    const onlyOdds = arr.filter(num => num % 2)
    return onlyOdds
}

let allTheNums = [1, 2, 3, 4, 5, 6, 7, 8];
let oddNums = veryOdd(allTheNums);

console.log('oddNums:', oddNums); // [1, 3, 5, 7];
console.log('allTheNums:', allTheNums); // [1, 2, 3, 4, 5, 6, 7, 8]


// Very Odd Mutant
// ' Write a function, 'veryOddMutant'. The function accepts an array of numbers. The function should mutate the 
// given array by replacing every even number in the array with the string 'normie'.
// 'veryOddMutant' should return a count of the number of even numbers it replaced.

const veryOddMutant = (arr) => {
    let count = 0
    for(let i = 0; i < arr.length; i++){
        if(arr[i] % 2 == 0){
            arr[i] = 'normie'
            count++
        }
    }
    return count
}

let numsArr = [1, 2, 3, 4, 5, 6, 7, 8];
let countRemoved = veryOddMutant(numsArr);

console.log('numsArr:', numsArr);
// [1, 'normie', 3, 'normie', 5, 'normie', 7, 'normie'];

console.log('countRemoved:', countRemoved);
// 4


// Clone Machine
// Write a function cloneMachine, that, given an animal (represented as an object), returns a clone of the 
// original animal. The name of the clone should be the name of its parent, concatenated with the word 'Clone'.
// cloneMachine should also push the name of the clone to the parent's offspring array.

const cloneMachine = (animal) => {
    const clone = {...animal}
    clone.name += 'Clone'
    clone.offspring = [...animal.offspring]
    animal.offspring.push(clone.name)
    return clone
}

let dolly = {
    name: 'Dolly',
    species: 'sheep',
    offspring: []
}

let dollyClone = cloneMachine(dolly);

console.log(dollyClone) // {name: 'DollyClone', species: 'sheep', offspring: []}
console.log(dolly) // {name: 'Dolly', species: 'sheep', offspring: ['DollyClone']}


// My Splice
// Write a 'mySplice' function that mirrors the behavior of JavaScript's .splice() array method. 
// However, mySplice should accept the array to operate on as an argument, rather than being invoked as a 
// method on that array. mySplice only needs to take one element to add to the array (the .splice method can 
// actually take any number of values to add). Do not use .splice in your function.

let myArray = [1, 2, 3];

const mySplice = (arr, index, deleteCount, val) => {
    const removed = []
    let temp

    if(deleteCount == 0 && val){
        arr.push(val)
        for(let i = index; i < arr.length; i++){
            temp = arr[i]
            arr[i] = arr[arr.length-1]
            arr[arr.length-1] = temp
        }
    } else {
        if(val){
            arr.push(val)
            while(deleteCount > 0 ){
                temp = arr[index]
                removed.push(arr[index])
                arr[index] = arr[arr.length-1]
                arr[arr.length-1] = temp
                arr.pop()
                index++
                deleteCount--
            }
        } else {
            // giving one too many problematic loops
            while(deleteCount > 0 ){
                temp = arr[index]
                removed.push(arr[index])
                if((index + deleteCount) < arr.length){
                    arr[index] = arr[index + deleteCount]
                    arr[index + deleteCount] = temp
                }
                arr.pop()
                index++
                deleteCount--
            }
        }
    }

    console.log(removed)
    return removed
}

mySplice(myArray, 1, 1, 'apples') // => [2]
console.log(myArray)    // [1,'apples', 3]

let ourStuff = ['food', 'trash', 'clothes']
mySplice(ourStuff, 1, 0, 'more food')
console.log(ourStuff)

let funNums = [10, 20, 30, 40, 50, 60];
mySplice(funNums, 2, 3);
console.log(funNums)


// Write a function that accepts an array and reverses that array in place. The behavior should mimic the 
// behavior of the native .reverse() array method. However, your reverse function should accept the array to 
// operate on as an argument, rather than being invoked as a method on that array.
// Do not use the native .reverse() method in your own implementation.

let arrToReverse = [1, 2, 3, 4];

const reverseArr = (arr) => {
    let temp
    for(let i = 0; i < arr.length/2; i++){
        temp = arr[i]
        arr[i] = arr[arr.length-1-i]
        arr[arr.length-1-i] = temp
    }
}

reverseArr(arrToReverse);
console.log(arrToReverse) // [4, 3, 2, 1]
let secondArr = [1,3,5,7,4,2,0]
reverseArr(secondArr)
console.log(secondArr) // [0,2,4,7,5,3,1]


// Write a function, deeperCopy, that, unlike .slice, will deeply copy a two- dimensional array.

const deeperCopy = (arr) => {
    let copy = []
    for(let i = 0; i < arr.length; i++){
        if(Array.isArray(arr[i])){
            copy.push(deeperCopy(arr[i]))
        } else {
            copy.push(arr[i])
        }
    }
    return copy
}

let arrToCopy = [1, [2, 3]];

let copy = deeperCopy(arrToCopy);
copy[1].push(4);

console.log(arrToCopy); // [1, [2, 3]]

let copy2 = arrToCopy.slice();
copy2[1].push(4);

console.log(arrToCopy); // [1, [2, 3, 4]]


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