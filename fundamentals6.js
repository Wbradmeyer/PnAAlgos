// Threes and Fives
/* Create threesFives() that adds values from 100 and 4000000 (inclusive) if that value 
is evenly divisible by 3 or 5 but not both. Display the final sum in the console. */

const threesFives = () => {
    let sum  = 0
    for(i = 100; i <= 4000000; i++){
        if (i % 3 == 0 && i % 5 == 0){
            continue
        } else if (i % 3 == 0 || i % 5 == 0){
            sum += i
        }
    }
    return sum
}

console.log(threesFives())

/* Second: Create betterThreesFives(start, end) that allows you to enter arbitrary start and 
end values for your range. Think of threesFives() as betterThreesFives(100,4000000). */

const betterThreesFives = (start, end) => {
    let sum = 0
    for(i = start; i <= end; i++){
        if (i % 3 == 0 && i % 5 == 0){
            continue
        } else if (i % 3 == 0 || i % 5 == 0){
            sum += i
        }
    }
    return sum
}

console.log(betterThreesFives(14, 90))


// Generate Coin Change
/* Make generateCoinChange(cents). Accept a number of American cents, compute and 
print how to represent that amount with the smallest number of coins. Common American 
coins are pennies (1 cent), nickels (5 cents), dimes (10 cents), and quarters (25 cents). */

const generateCoinChange = (cents) => {
    console.log(`${cents} cents can be represented by:`)
    let quarters = 0
    let dimes = 0
    let nickels = 0
    let pennies = 0
    while (cents > 0){
        if (cents >= 25){
            cents -= 25
            quarters += 1
        } else if (cents >= 10){
            cents -= 10
            dimes += 1
        } else if (cents >= 5){
            cents -= 5
            nickels += 1
        } else if (cents > 0){
            cents -= 1
            pennies += 1
        }
    }
    console.log(`quarters: ${quarters}`)
    console.log(`dimes: ${dimes}`)
    console.log(`nickels: ${nickels}`)
    console.log(`pennies: ${pennies}`)
}

generateCoinChange(94)


// Messy Math Mashup
/* Create a function messyMath(num) that will return the following sum: add all integers from 0 
up to the given num, except for the following special cases of our count value:

If current count (not num) is evenly divisible by 3, don’t add to the sum; skip to the next count;
Otherwise, if the current count is evenly divisible by 7, include it twice in sum instead of once;
Regardless of the above, if the current count is exactly 1/3 of num, return -1 immediately.
For example, if given num is 4, return 7. If given num is 8, return 34. If given num is 15, return -1. */

const messyMath = (num) => {
    let sum = 0
    for (let i = 0; i <= num; i++){
        if (i == num/3) return -1
        else if (i % 3 == 0) continue
        else if (i % 7 == 0) sum += (i*2)
        else sum += i
    }
    return sum
}

console.log(messyMath(4))
console.log(messyMath(8))
console.log(messyMath(15))


// Twelve-Bar Blues
/* Write a function that console.logs the number 1, then "chick", then "boom", 
then "chick", then 2, then "chick", "boom", "chick" – continuing the same cycle 
for each number up to (including) 12. */

const twelveBarBlues = () => {
    for (let i = 1; i <= 12; i++){
        console.log(i)
        console.log('chick')
        console.log('boom')
        console.log('chick')
    }
    return
}

twelveBarBlues()


// Fibonacci
/* Create a function to generate Fibonacci numbers. In this famous mathematical sequence, 
each number is the sum of the previous two, starting with values 0 and 1. Your function 
should accept one argument, an index into the sequence (where 0 corresponds to the initial 
value, 4 corresponds to the value four later, etc). */


// Sum to One Digit
/* Kaitlin sees beauty in numbers, but also believes that less is more. Implement sumToOne(num) 
that sums a given integer’s digits repeatedly until the sum is only one digit. Return that one-digit result. */

const sumToOne = (num) => {
    let sum = num
    while (sum >= 10) {
        let arr = sum.toString().split('')
        sum = 0
        for (let i = 0; i < arr.length; i++){
            sum += Number(arr[i])
        }
    }
    return sum
}

console.log(sumToOne(123)) // return 6
console.log(sumToOne(457)) // return 7
console.log(sumToOne(54323)) // return 8


// Clock Hand Angles
// do this one thursday

// Is Prime
