// Reverse
// Implement reverseString(str) that, given string, returns that string with characters reversed.
// Given "creature", return "erutaerc". Tempting as it seems, do not use the built-in reverse()!

const reverseString = (str) => {
    let revString = ''
    for(let i = str.length-1; i >= 0; i--){
        revString += str[i]
    }
    return revString
}

console.log(reverseString('hello'))


// Remove Even-Length Strings
// Build a standalone function to remove strings of even lengths from a given array. For array containing
// ["Nope!","Its","Kris","starting","with","K!","(instead","of","Chris","with","C)","."], change that same array to ["Nope!","Its","Chris","."].