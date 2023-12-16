// Sigma
/* Implement function sigma(num) that given a number, returns the 
sum of all positive integers up to number (inclusive). 
Ex.: sigma(3) = 6 (or 1 + 2 + 3); sigma(5) = 15 (or 1 + 2 + 3 + 4 + 5). */

const sigma = (num) => {
    let sum = 0
    for(let i = 1; i <= num; i++){
        sum += i
    }
    return sum
}

console.log(sigma(5))
console.log(sigma(3))


// Factorial
/* Just the Facts, ma’am. Factorials, that is. Write a function factorial(num) 
that, given a number, returns the product (multiplication) of all positive integers 
from 1 up to number (inclusive). 

For example, factorial(3) = 6 (or 1 * 2 * 3); factorial(5) = 120 (or 1 * 2 * 3 * 4 * 5). */

const factorial = (num) => {
    let product = 1
    for(let i = 1; i <= num; i++){
        product *= i
    }
    return product
}

console.log(factorial(3))
console.log(factorial(5))


// Star Art (specified stars left, right and center over 75 total characters)
const drawLeftStars = (num) => {
    let drawStars = ''
    for(i = 1; i <= num; i++){
        drawStars += '*'
    }
    return drawStars
}

console.log(drawLeftStars(15))

const drawRightStars = (num) => {
    let drawStars = ''
    let num_spaces = 75 - num
    for(i = 1; i <= num + num_spaces; i++){
        if(i <= num_spaces){
            drawStars += ' '
        } else {
            drawStars += '*'
        }
    }
    return drawStars
}

console.log(drawRightStars(20))

const drawCenteredStars = (num) => {
    let drawStars = ''
    let num_spaces = 75 - num
    for(i = 1; i <= num + num_spaces; i++){
        if(i <= num_spaces/2 || i > num_spaces/2 + num){
            drawStars += ' '
        } else {
            drawStars += '*'
        }
    }
    return drawStars
}

console.log(drawCenteredStars(25))


// Character Art (same as above with different chars)

const drawLeftChars = (num, char) => {
    let drawChars = ''
    for(i = 1; i <= num; i++){
        drawChars += char
    }
    return drawChars
}

console.log(drawLeftChars(15, '$'))

const drawRightChars = (num, char) => {
    let drawChars = ''
    let num_spaces = 75 - num
    for(i = 1; i <= num + num_spaces; i++){
        if(i <= num_spaces){
            drawChars += ' '
        } else {
            drawChars += char
        }
    }
    return drawChars
}

console.log(drawRightChars(20, '%'))

const drawCenteredChars = (num, char) => {
    let drawChars = ''
    let num_spaces = 75 - num
    for(i = 1; i <= num + num_spaces; i++){
        if(i <= num_spaces/2 || i > num_spaces/2 + num){
            drawChars += ' '
        } else {
            drawChars += char
        }
    }
    return drawChars
}

console.log(drawCenteredChars(25, '#'))