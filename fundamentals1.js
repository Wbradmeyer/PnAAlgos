// Setting and Swapping
// Set myNumber to 42. Set myName to your name. Now swap myNumber into myName & vice versa.

let myNumber = 42
let myName = 'Brad'
let swap = myNumber
myNumber = myName
myName = swap

console.log(myName)
console.log(myNumber)


// Print -52 to 1066
// Print integers from -52 to 1066 using a FOR loop.

for(let i = -52; i <= 1066; i++){
    console.log(i)
}


// Don’t Worry, Be Happy
// Create beCheerful(). Within it, console.log string "good morning!" Call it 98 times.

const beCheerful = () => console.log("good morning!")

for(let i = 1; i <= 98; i++) {
    beCheerful()
}


// Multiples of Three – but Not All
// Using FOR, print multiples of 3 from -300 to 0. Skip -3 and -6.

for(let i = -300; i <= 0; i++){
    if(i % 3 == 0 && i != -3 && i != -6){
        console.log(i)
    }
}


// Printing Integers with While
// Print integers from 2000 to 5280, using a WHILE.

let count = 2000
while(count <= 5280){
    console.log(count)
    count++
}


// You Say It’s Your Birthday
// If 2 given numbers represent your birth month and day in either order, log "How did you know?", else log "Just another day...." 

const birthdaySearch = (num1, num2) => {
    const myBirthday = [10, 29]
    // check if num1 is in array, if so, splice the number at that index
    // do the same for num2
    // if array is now empty it's my birthday, else it's not
    if(myBirthday.includes(num1)){
        let index = myBirthday.indexOf(num1)
        myBirthday.splice(index, 1)
    }
    if(myBirthday.includes(num2)){
        let index = myBirthday.indexOf(num2)
        myBirthday.splice(index, 1)
    }
    if(myBirthday[0]){
        console.log("Just another day....")
        return
    }
    console.log("How did you know?")
}

birthdaySearch(10, 29)
birthdaySearch(10, 25)
birthdaySearch(9, 25)


// Leap Year
// Write a function that determines whether a given year is a leap year. If a year is divisible by four, it is a leap year, unless it is divisible by 100. However, if it is divisible by 400, then it is.

