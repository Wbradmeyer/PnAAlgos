// Countdown
/* Create a function that accepts a number as an input. 
Return a new array that counts down by one, from the number 
(as array’s ‘zeroth’ element) down to 0 (as the last element). How long is this array? */

const arrayCountDown = (num) => {
    let countDown = [num]
    for(let i = num -1; i >= 0; i--) {
        countDown.push(i)
    }
    console.log(countDown.length)
    return countDown
}

console.log(arrayCountDown(17))


// Print and Return
// Your function will receive an array with two numbers. Print the first value, and return the second.

const handleVals = (arr) => {
    console.log(arr[0])
    return arr[1]
}

console.log(handleVals([4, 6]))


// First Plus Length
/* Given an array, return the sum of the first value in the array, plus the array’s length. 
What happens if the array’s first value is not a number, but a string (like "what?") or a boolean (like false). */

const firstPlusLength = (arr) => arr[0] + arr.length

console.log(firstPlusLength([3, 6, 8, 3, 1, 4, 5, 9]))
console.log(firstPlusLength(['word', 4, 5, 6, 7, 8]))
console.log(firstPlusLength([false, 1, 2, 3, 4]))


// Values Greater than Second
// For [1,3,5,7,9,13], print values that are greater than its 2nd value. Return how many values this is.

const greaterThanSecond = (arr) => {
    let count = 0
    for(i = 2; i < arr.length; i++) {
        if (arr[i] > arr[1])
        console.log(arr[i])
        count++
    }
    return count
}

console.log(greaterThanSecond([1,3,5,7,9,13]))

// Alternate
const greaterThanSecond2 = (arr) => {
    const greater = arr.filter( num => num > arr[1])
    greater.map(num => console.log(num))
    return greater.length
}

console.log(greaterThanSecond2([1,3,5,7,9,13]))


// Same, generalized
/* Write a function that accepts any array, and returns a new array 
with the array values that are greater than its 2nd value. Print how 
many values this is. What will you do if the array is only one element long? */

const greaterThan2nd = (arr) => {
    if(arr.length <= 2) return 0
    let greater = []
    for(i = 2; i < arr.length; i++) {
        if (arr[i] > arr[1])
        greater.push(arr[i])
    }
    console.log(greater.length)
    return greater
}

console.log(greaterThan2nd([1,3,5,7,9,13]))
console.log(greaterThan2nd([1]))
console.log(greaterThan2nd([1,3]))

// Alternate
const greaterThan2ndPart2 = (arr) => {
    const greater = arr.filter( num => num > arr[1])
    console.log(greater.length)
    return greater
}

console.log(greaterThan2ndPart2([1]))
console.log(greaterThan2ndPart2([1,3,5,7,9,13]))


// This Length, That Value
// Given two numbers, return array of length num1 with each value num2. Print "Jinx!" if they are same.

const arrLengthValue = (num1, num2) => {
    if(num1 == num2) console.log('Jinx!')
    arr = []
    for(let i = num1; i > 0; i--){
        arr.push(num2)
    }
    return arr
}

console.log(arrLengthValue(6, 4))
console.log(arrLengthValue(7, 7))


// Fit the First Value
/* Your function should accept an array. If value at [0] is greater than array’s length, 
print "Too big!"; if value at [0] is less than array’s length, print "Too small!"; 
otherwise print "Just right!". */

const fitFirstValue = arr => {
    if(arr[0] > arr.length){
        console.log('Too big!')
    } else if(arr[0] < arr.length){
        console.log('Too small!')
    } else {
        console.log('Just right!')
    }
}

fitFirstValue([3, 4, 5])
fitFirstValue([3, 4, 5, 6, 7])
fitFirstValue([3, 4])


// Fahrenheit to Celsius
/* Kelvin wants to convert between temperature scales. Create fahrenheitToCelsius(fDegrees) 
that accepts a number of degrees in Fahrenheit and returns the equivalent temperature as 
expressed in Celsius degrees. For review, Fahrenheit = (9/5 * Celsius) + 32. */

const fahrenheitToCelsius = (fDegrees) => {
    return (fDegrees - 32) * (5/9)
}

console.log(fahrenheitToCelsius(32))
console.log(fahrenheitToCelsius(75))

// Celsius to Fahrenheit

const celsiusToFahrenheit = (cDegrees) => {
    return cDegrees * (9/5) + 32
}

// console.log(celsiusToFahrenheit(0))
// console.log(celsiusToFahrenheit(22))

/* (Optional): Do Fahrenheit and Celsius values equate at a certain number? 
The scientific calculation can be complex, so for this challenge just try a 
series of Celsius integer values starting at 200, going downward (descending), 
checking whether it is equal to the corresponding Fahrenheit value. */

for(i = 200; i >= -200; i--){
    if(i == celsiusToFahrenheit(i)){
        console.log(`Celsius and Fahrenheit equate at ${i}`)
        break
    }
}