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