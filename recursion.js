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