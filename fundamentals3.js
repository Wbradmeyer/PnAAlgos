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

