// String 2 Problems

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
console.log(reverseString('creature'))


// Remove Even-Length Strings
// Build a standalone function to remove strings of even lengths from a given array. For array containing
// ["Nope!","Its","Kris","starting","with","K!","(instead","of","Chris","with","C)","."], change that same array to ["Nope!","Its","Chris","."].

const noEvens = arr => arr.filter(str => str.length % 2)

console.log(noEvens(["Nope!","Its","Kris","starting","with","K!","(instead","of","Chris","with","C)","."]))


// Integer to Roman Numerals
// Given a positive integer that is less than 4000, return a string containing that value in Roman numeral 
// representation. In this representation, I is 1, V is 5, X is 10, L = 50, C = 100, D = 500, and M = 1000. 
// Remember that 4 is IV, 349 is CCCIL and 444 is CDXLIV.

// Roman Numerals to Integer
// Sept 16, 2014 headline: “Ancient Computer Found in Roman Shipwreck”. Comprising 30 bronze gears, 
// its wooden frame features 2000 characters. Given a string containing a Roman numeral representation 
// of a positive integer, return the integer. Remember that III is 3, DCIX is 609 and MXDII is 1492.

// String 3 Problems

// Parens Valid
// Valid sets of parentheses always open before they close, for example. For "Y(3(p)p(3)r)s", return true. 
// Given "N(0(p)3", return false: not every parenthesis is closed. Given "N(0)t )0(k", return false, because 
// the underlined ")" is premature: there is nothing open for it to close.

const parensValid = str => {
    let invalid = 0
    for(let i = 0; i < str.length; i++){
        if(str[i] == '('){
            invalid++
        } else if(str[i] == ')'){
            invalid--
            if(invalid < 0) return false
        }
    }
    if(!invalid) return true
    else return false
}

console.log(parensValid("Y(3(p)p(3)r)s"))
console.log(parensValid("N(0(p)3"))
console.log(parensValid("N(0)t )0(k"))


// Braces Valid
// Given a sequence of parentheses, braces and brackets, determine whether it is valid. Example:
// "W(a{t}s[o(n{ c}o)m]e )h[e{r}e]!" => true. "D(i{a}l[ t]o)n{e" => false. "A(1)s[O (n]0{t) 0}k" => false.

const bracesValid = str => {
    let parens = 0
    let braces = 0
    let brackets = 0
    for(let i = 0; i < str.length; i++){
        if(str[i] == '('){
            parens++
        } else if(str[i] == ')'){
            parens--
            if(parens < 0) return false
        } else if(str[i] == '{'){
            braces++
        } else if(str[i] == '}'){
            braces--
            if(braces < 0) return false
        } else if(str[i] == '['){
            brackets++
        } else if(str[i] == ']'){
            brackets--
            if(brackets < 0) return false
        }
    }
    if(!parens && !braces && !brackets) return true
    else return false
}

console.log(bracesValid("W(a{t}s[o(n{ c}o)m]e )h[e{r}e]!"))
console.log(bracesValid("D(i{a}l[ t]o)n{e"))
// needs to be reworked for this one, crossing items
console.log(bracesValid("A(1)s[O (n]0{t) 0}k"))