// Biggie Size
/* Given an array, write a function that changes all positive numbers 
in the array to “big”. Example: makeItBig([-1,3,5,-5]) returns that same 
array, changed to [-1,"big","big",-5]. */

const positivesToBig = (arr) => {
    for(let i = 0; i < arr.length; i++){
        if(arr[i] > 0){
            arr[i] = 'big'
        }
    }
    return arr
}

console.log(positivesToBig([-1,3,5,-5]))


// Print Low, Return High
/* Create a function that takes an array of numbers. The function should 
print the lowest value in the array, and return the highest value in the array. */

const printLowReturnHigh = (arr) => {
    let low = arr[0]
    let high = arr[0]
    for(num of arr){
        if(num < low) low = num
        if(num > high) high = num
    }
    console.log(low)
    return high
}

console.log(printLowReturnHigh([1, 4, 2, 7, 8, 3, 9]))


// Print One, Return Another
/* Build a function that takes an array of numbers. The function should print the 
second-to-last value in the array, and return first odd value in the array. */

const printOneReturnAnother = (arr) => {
    console.log(arr[arr.length-2])
    for(num of arr){
        if(num % 2 != 0){
            return num
        }
    }
}

console.log(printOneReturnAnother([6, 4, 2, 7, 8, 3, 9]))


// Double Vision
/* Given an array, create a function to return a new array where each value 
in the original has been doubled. Calling double([1,2,3]) should return [2,4,6] 
without changing original. */

const doubleValues = (arr) => {
    for(let i = 0; i < arr.length; i++){
        arr[i] = arr[i] * 2
    }
    return arr
}

console.log(doubleValues([1,2,3]))

// Alternate

const doubleValuesAlt = arr => arr.map(num => num * 2)

console.log(doubleValuesAlt([1,2,3,4]))


// Count Positives
/* Given an array of numbers, create a function to replace last value 
with the number of positive values. Example,  countPositives([-1,1,1,1]) 
changes array to [-1,1,1,3] and returns it. */

const countPositives = (arr) => {
    let count = 0
    for(num of arr){
        if(num > 0){
            count++
        }
    }
    arr[arr.length-1] = count
    return arr
}

console.log(countPositives([-1,1,1,1,1]))


// Evens and Odds
/* Create a function that accepts an array. Every time that array has 
three odd values in a row, print "That’s odd!" Every time the array has 
three evens in a row, print "Even more so!" */

const evensAndOdds = (arr) => {
    if(arr.length < 3) return
    for(let i = 2; i < arr.length; i++){
        // console.log('arr[i] = ' + arr[i])
        // console.log('arr[i-1] = ' + arr[i-1])
        // console.log('arr[i-2] = ' + arr[i-2])
        if(arr[i] % 2 && arr[i-1] % 2 && arr[i-2] % 2) {
            console.log("That's odd!")
        } else if(arr[i] % 2 == 0 && arr[i-1] % 2 == 0 && arr[i-2] % 2 == 0) {
            console.log("Even more so!")
        }
    }
}

evensAndOdds([1,1,1,2,2,2,3,4,5,5,6,6,7,7,7,8,8,8,9])


// Increment the Seconds
// Given arr, add 1 to odd elements ([1], [3], etc.), console.log all values and return arr.

const incrementSeconds = (arr) => {
    for(let i = 1; i < arr.length; i += 2){
        arr[i] += 1
    }
    arr.map(num => console.log(num))
    return arr
}

console.log(incrementSeconds([2,3,4,5,6,7,8,9]))


// Previous Lengths
/* You are passed an array containing strings. Working within that same array, 
replace each string with a number – the length of the string at previous array 
index – and return the array. */

const previousLength = (arr) => {
    for(let i = arr.length-1; i >= 1; i--){
        let temp = arr[i-1].length
        arr[i] = temp
    }
    return arr
}

console.log(previousLength(['this', 'word', 'has', 'so', 'many', 'letters']))


// Add Seven to Most
/* Build a function that accepts an array. Return a new array with all values 
except first, adding 7 to each. Do not alter the original array. */

const addSevenToMost = (arr) => {
    let plusSeven = [arr[0]]
    for(let i = 1; i < arr.length; i++) {
        plusSeven.push(arr[i] + 7)
    }
    return plusSeven
}

console.log(addSevenToMost([1,2,3,4,5,6,7,8]))


// Reverse Array
/* Given array, write a function to reverse values, in-place. 
Example: reverse([3,1,6,4,2]) returns same array, containing [2,4,6,1,3]. */
// Didn't use the built-in reverse()

const reverseArray = (arr) => {
    let temp = 0
    for(let i = 0; i < arr.length/2; i++){
        temp = arr[i]
        arr[i] = arr[arr.length-1-i]
        arr[arr.length-1-i] = temp
    }
    return arr
}

console.log(reverseArray([3,1,6,4,2]))


// Outlook: Negative
/* Given an array, create and return a new one containing all the values of the 
provided array, made negative (not simply multiplied by -1). Given [1,-3,5], return [-1,-3,-5]. */

const allToNegative = (arr) => {
    let negatives = []
    for(num of arr){
        if(num > 0){
            num = -(num)
        }
        negatives.push(num)
    }
    return negatives
}

console.log(allToNegative([1,-3,5]))
console.log(allToNegative([2,3,-4,5,6,-7,-8]))

// Always Hungry
/* Create a function that accepts an array, and prints "yummy" each time one of 
the values is equal to "food". If no array elements are "food", then print "I'm hungry" once. */

const alwaysHungry = (arr) => {
    if(!arr.includes('food')) console.log("I'm hungry")
    for(item of arr){
        if(item == 'food'){
            console.log('yummy')
        }
    }
}

alwaysHungry(['food', 'money', 'shelter', 'water', 'food', 'clothing', 'food'])
alwaysHungry(['money', 'shelter', 'water', 'clothing'])


// Swap Toward the Center
/* Given array, swap first and last, third and third-tolast, etc. 
Input[true,42,"Ada",2,"pizza"] becomes ["pizza",42,"Ada",2,true].  
Change [1,2,3,4,5,6] to [6,2,4,3,5,1]. */

const swapTowardCenter = (arr) => {
    let temp = 0
    for(let i = 0; i < arr.length/2; i += 2){
        temp = arr[i]
        arr[i] = arr[arr.length-1-i]
        arr[arr.length-1-i] = temp
    }
    return arr
}

console.log(swapTowardCenter([true,42,"Ada",2,"pizza"]))
console.log(swapTowardCenter([1,2,3,4,5,6]))


// Scale the Array
// Given array arr and number num, multiply each arr value by num, and return the changed arr.

const scaleArray = (arr, num) => {
    for(let i = 0; i < arr.length; i++){
        arr[i] *= num
    }
    return arr
}

console.log(scaleArray([1,2,3,4,5], 5))

// Alternate with map method
const scaleWithMap = (arr, num) => arr.map(item => item * num)

console.log(scaleWithMap([1,2,3,4,5], 5))