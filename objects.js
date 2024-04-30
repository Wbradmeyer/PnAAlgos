// Last Friday Night
// According to the song, Katy Perry "maxed our credit cards".
// Define a function, lastFridayNight, takes an array of transactions.
// lastFridayNight should return the total amount she spent last Friday night.

let transactions = [
    {
        name: "Tons of glitter",
        amount: 70
    },
    {
        name: "Porcelain Pink Flamingos",
        amount: 92
    },
    {
        name: "Chandelier replacement",
        amount: 10000,
    },
    {
        name: "Dinner at TGIF x6",
        amount: 350
    }
];

const lastFridayNight = (arr) => {
    let total = 0
    for(let i = 0; i < arr.length; i++){
        total += arr[i].amount
    }
    return total
}

console.log(lastFridayNight(transactions))


// Compare Objects
// Define a function, compareObjects, that accepts two objects as arguments.
// compareObjects should return true if both objects have exactly the same key/value pairs. Otherwise, 
// compareObjects should return false. Assume the objects are not nested.

const compareObjects = (obj1, obj2) => {
    const arr1 = Object.keys(obj1)
    const arr2 = Object.keys(obj2)
    for(const key in obj1){
        if(arr1.length != arr2.length){
            return false
        } else if(obj1[key] != obj2[key]){
            return false
        }
    }
    return true
}

console.log(compareObjects({ name: 'nick' }, { name: 'nick' }))
console.log(compareObjects({ name: 'zeke' }, { name: 'zeke', age: 12 }))


// Leet Translator
// "Leet" or 1337 is a popular alternative alphabet used by internet "hackers".
// Define a function called leetTranslator that take a string of normal characters.
// leetTranslator should return a new string that is the translation of the original string into leet.
// The leet codex is below, along with an array of english letters and an array of the corresponding leet characters. 
// Use the two arrays to create a leetCodex object to use in making the translations.

let letters = [ 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z' ];
let leetChars = ['@', '8', '(', '|)', '3', 'ph', 'g', '#','l', '_|', '|<', '1', "|'|'|", '/\/', '0', '|D', '(,)', '|2', '5', '+', '|_|', '|/', "|/|/'",'><', 'j', '2'];
const leetObject = {}

for(let i = 0; i < letters.length; i++){
    leetObject[letters[i]] = leetChars[i]
}

const leetTranslator = (str) => {
    let leetStr = ''
    for(let i = 0; i < str.length; i++){
        if(str[i] == ' '){
            leetStr = `${leetStr} `
        } else {
            leetStr = `${leetStr}${leetObject[str[i].toLowerCase()]}`
        }
    }

    return leetStr
}

console.log(leetTranslator('Coding Virtuoso'))


