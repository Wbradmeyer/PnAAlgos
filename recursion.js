// Count To Ten
// Write a function, countToTen, that receives a number less than or equal to 10. 
// countToTen should console.log every number between the given number and 10, including 10. Use recursion.

const countToTen = (num) =>{
    console.log(num)
    if(num == 10) return
    num++
    return countToTen(num)
}

countToTen(4)

// Backward String
// Write a function, backwardString, that receives a string. It should log every letter in the string, 
// from the last character to the first. Use recursion.

const backwardString = (str, index) =>{
    if(index == undefined) index = (str.length-1)
    console.log(str[index])
    if(index == 0) return
    index--
    return backwardString(str, index)
}

backwardString('happy')

// Sum Nums
// Write a function, sumNums, that takes a number greater than 1 and returns the sum of all the numbers between the given number and 1. Use recursion.

const sumNums = (num, sum) => {
    if(!sum) sum = 0
    if(!num) return sum
    sum += num
    num--
    return sumNums(num, sum)
}

console.log(sumNums(3)) // 6
console.log(sumNums(4))

// Count Vowels
// Write a function, countVowels, that accepts a string and returns the number of vowels in that string. Use recursion.

const countVowels = (str, count) =>{
    let vowels = 'aeiou'
    if(count == undefined) count = 0
    if(str.length == 1) return count
    if(vowels.includes(str[0])) count++
    return countVowels(str.slice(1), count)
}

console.log(countVowels('Four score and seven years'))

// Reverse Array
// Write a function, reverseArray, that accepts an array and returns a reversed copy of that array. Use recursion.
let array = [1,2,3,4]

const reverseArray = (arr, index) =>{
    let copy = [...arr]
    if(!index) index = 0
    if(index >= copy.length/2) return copy
    let temp = copy[index]
    copy[index] = copy[copy.length-1-index]
    copy[copy.length-1-index] = temp
    index++
    return reverseArray(copy, index)
}

console.log(reverseArray(array))
// console.log(reverseArray([1,2,3,4]))
console.log(array)

// Is Palindrome
// A palindrome is a word that is spelled the same forward and backward. For example, "LEVEL", "RACECAR", 
// and "KAYAK" are all palindromes, while "MOTOR", "RUDDER", and "DOGGED" are not palidromes.
// Write a recursive function, isPalindrome, to check if a string is a palindrome or not.

const isPalindrome = (str, index) =>{
    if(!index) index = 0
    if(index >= str.length/2) return true
    if(str[index].toLowerCase() != str[str.length-index-1].toLowerCase()) return false
    else index++
    return isPalindrome(str, index)
}

console.log(isPalindrome('Kayak'))
console.log(isPalindrome('NEVERODDOREVEN'))
console.log(isPalindrome('Tacocat'))
console.log(isPalindrome('SELFLESS'))

// Sum Digits
// Write a function, sumDigits, that sums all the digits of a given integer (assume positive). Use recursion.

const sumDigits = (num, sum) =>{
    if(!sum) sum = 0
    if(!num) return sum
    let str = num.toString()
    let digit = str.slice(0, 1)
    sum += Number(digit)
    return sumDigits(str.slice(1), sum)
}

console.log(sumDigits(1234))

// Recursive Sigma
// Write a recursive function that given a number returns the sum of integers from 1 to that number. 
// Example: rSigma(5) = 15 (1+2+3+4+5); rSigma(2.5) = 3 (1+2); rSigma(-1) = 0.

const rSigma = (num, sum) =>{
    if(!sum) sum = 0
    if(num < 1) return sum
    sum += Math.floor(num)
    num--
    return rSigma(num, sum)
}

console.log(rSigma(5))
console.log(rSigma(2.5))
console.log(rSigma(-1))

// given answer
function rSigma(num) {
    console.log(num)
    if(num > 0) {
        return rSigma(num-1) + num;
    }
    return 0
}

console.log(rSigma(5))
console.log(rSigma(2.5)) // doesn't work for decimals

// Recursive Factorial
// Given num, return the product of ints from 1 up to num. If less than zero, treat as zero. 
// If not an integer, truncate. Experts tell us 0! is 1. rFact(3) = 6 (1*2*3). 
// Also, rFact(6.5) = 720 (1*2*3*4*5*6).

const rFact = (num, prod) =>{
    if(!prod) prod = 1
    if(num < 1) return prod
    prod *= Math.floor(num)
    num--
    return rFact(num, prod)
}

console.log(rFact(3))
console.log(rFact(6.5))
console.log(rFact(-1))

// Recursive Fibonacci
// Write rFib(num). Recursively compute and return numth Fibonacci value. As earlier, 
// treat first two (num = 0, num = 1) Fibonacci vals as 0 and 1.

const rFib = (num) =>{
    if(num == 0) return 0
    if(num == 1) return 1
    return rFib(num-1) + rFib(num-2)
}

console.log(rFib(2))
console.log(rFib(3))
console.log(rFib(4))
console.log(rFib(5))
console.log(rFib(6))

// Recursive Tribonacci
// Write function rTrib(num) to mimic Fibonacci, adding previous three values instead of two. 
// First three Tribonacci numbers are 0, 0, 1, so rTrib(3) = 1 (0+0+1); rTrib(4) = 2 (0+1+1); 
// rTrib(5) = 4 (1+1+2); rTrib(6) = 7 (1+2+4). Handle negatives and non-integers appropriately and inexpensively.

const rTrib = (num) =>{
    if(!Number.isInteger(num)) num = Math.trunc(num)
    else if(num == 0 || num == 1) return 0
    else if(num == 2) return 1
    return rTrib(num-1) + rTrib(num-2) + rTrib(num-3)
}

console.log(rTrib(3))
console.log(rTrib(4))
console.log(rTrib(5))
console.log(rTrib(6))
console.log(rTrib(6.5))

// Array Sum
// Write a function, arraySum, that accepts an array of numbers and returns the sum 
// of all the numbers in the array (no matter how nested!).

const arraySum = (arr, index, sum) => {
    if(!sum) sum = 0
    if(!index) index = 0
    if(Array.isArray(arr[index])){
        sum += arraySum(arr[index])
    } else {
        sum += arr[index]
    }
    // if(index == arr.length) return sum
    index++
    return arraySum(arr, index, sum)
}

console.log(arraySum([1, [2, 3, [4]]])) // => 10