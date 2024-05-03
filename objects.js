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


// Frequency Analysis
// Define a function frequencyAnalysis that accepts a string of lower-case letters.
// frequencyAnalysis should return an object containing the count for each letter in the string.

const freqAnalysis = (str) => {
    const count = {}
    for(let i = 0; i < str.length; i++){
        if(str[i] in count){
            count[str[i]]++
        } else if(str[i] == ' ') {
            continue
        } else {
            count[str[i]] = 1
        }
    }
    return count
}

console.log(freqAnalysis('abca'))
console.log(freqAnalysis('abracadabra yo'))


// Dog Breeder
// Define a function, dogBreeder, that accepts up to two optional arguments:
// name (string), age (number)
// dogBreeder should return an object that represents a new dog! If the user doesn't define a name, 
// assume the dog's name is Steve. If the user doesn't define the dog's age, assume the dog's age is 0.

const dogBreeder = (var1, var2) => {
    const dog = {name: 'Steve', age: 0}
    if(typeof var1 == 'string') dog.name = var1
    else if(typeof var1 == 'number') dog.age = var1
    if(var2) dog.age = var2
    return dog
}

console.log(dogBreeder('Sam', 12))
console.log(dogBreeder(15))
console.log(dogBreeder())


// Attendance Check
// Define a function, attendanceCheck, that accepts a day of the week as a string.
// Using the globally-defined classRoom array, attendanceCheck should return a new array with only the names 
// of the students present on the inputted day of the week.

let classRoom = [
    {
    "Marnie" : [
            {"Monday" : true},
            {"Tuesday" : true},
            {"Wednesday" : true},
            {"Thursday" : true},
            {"Friday" : true}
        ]
    },
    {
    "Lena" : [
            {"Monday" : false},
            {"Tuesday" : false},
            {"Wednesday" : true},
            {"Thursday" : false},
            {"Friday" : true}
        ]
    },
    {
    "Shoshanna" : [
            {"Monday" : true},
            {"Tuesday" : true},
            {"Wednesday" : false},
            {"Thursday" : true},
            {"Friday" : false}
        ]
    },
    {
    "Jessa" : [
            {"Monday" : false},
            {"Tuesday" : false},
            {"Wednesday" : false},
            {"Thursday" : false},
            {"Friday" : true}
        ]
    }
];

const attendanceCheck = (day) => {
    const present = []
    for(let i in classRoom){
        for(let student in classRoom[i]){
            for(let schedule in classRoom[i][student]){
                if(classRoom[i][student][schedule][day]){
                    present.push(student)
                }
            }
        }
    }
    return present
}

console.log(attendanceCheck('Monday'))
console.log(attendanceCheck('Wednesday'))


// Say My Name
// Define an object, me, that has a name property and a getGreeting method. getGreeting should return a greeting.
// Expand to greet a second object

const me = {
    name: 'Ken',
    myGreeting: function(){
        return `Hi, name is ${this.name}!`
    },
    getGreeting: function(obj){
        return `Hi ${obj.name}, my name is ${this.name}!`
    }
}

const you = {
    name: 'Tammy'
}

console.log(me.name)
console.log(me.myGreeting())
console.log(me.getGreeting(you))


// Call Them All
// Write a function callThemAll, that, given an object and a value, calls every method in the object, 
// passing in the value as the argument with each call.
// callThemAll should return an array with all of the returned values from each method invocation. 
// The order of the elements in the returned array does not matter.

let addsNums = {
    addTen: function(num) {
    return num + 10;
    },

    addTwenty: function(num) {
    return num + 20;
    },

};

const callThemAll = (obj, val) => {
    const results = []
    for(let method in obj){
        if(typeof obj[method] == 'function'){
            results.push(obj[method](val))
        }
    }
    return results
}

console.log(callThemAll(addsNums, 100)); // => [110, 120]


// Tic Tac Toe
// Define an object 'ticTacToe'.
// Follow the test specs to create a 'board' property, 'move' method, and a 'clear' method so you can play a game with your partner.
// The 'board' property is a grid of arrays that represents the board, where each cell is initiall null.
// The 'move' method is a method that, given a character, rowNum, and colNum, adds the character to the correct cell in the board.
// The 'clear' method should reset the board to all nulls.
// To make it easier to play, have your 'move' method console.log() the board before the method returns the board.

const ticTacToe = {
    board: [
        [null, null, null],
        [null, null, null],
        [null, null, null]
    ],
    move: function(char, rowNum, colNum){
        this.board[rowNum][colNum] = char
        console.log(this.board)
        return this.board
    },
    clear: function(){
        for(let i = 0; i < this.board.length; i++){
            for(let j = 0; j < this.board[i].length; j++){
                this.board[i][j] = null
            }
        }
        console.log(this.board)
        return this.board
    }
}

ticTacToe.move('x', 2, 2)
ticTacToe.move('x', 1, 1)
ticTacToe.move('x', 0, 0)
ticTacToe.clear()