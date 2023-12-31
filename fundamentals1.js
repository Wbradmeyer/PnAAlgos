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

const isLeapYear = (year) => {
    return year % 400 == 0? true : year % 100 == 0? false : year % 4 == 0? true : false
}

console.log(isLeapYear(1934))
console.log(isLeapYear(2200))
console.log(isLeapYear(2400))


// Print and Count
// Print all integer multiples of 5, from 512 to 4096. Afterward, also log how many there were.

let count5s = 0
for(let i = 512; i <= 4096; i++){
    if(i % 5 == 0){
        console.log(i)
        count5s++
        i += 4
    }
}

console.log(`There were ${count5s} multiples of 5.`)


// Multiples of Six
// Print multiples of 6 up to 60,000, using a WHILE.

let multiples = 6
while(multiples <= 60_000){
    console.log(multiples)
    multiples += 6
}


// Counting, the Dojo Way
// Print integers 1 to 100. If divisible by 5, print "Coding" instead. If by 10, also print " Dojo".

for(let i = 1; i <= 100; i++){
    if(i % 10 == 0) console.log('Coding Dojo')
    else if(i % 5 == 0) console.log('Coding')
    else console.log(i)
}


// What Do You Know?
// Your function will be given an input parameter incoming. Please console.log this value.

const printFunction = incoming => console.log(incoming)

printFunction('hello')
printFunction('world')
printFunction('test3')


// Whoa, That Sucker’s Huge…
// Add odd integers from -300,000 to 300,000, and console.log the final sum. Is there a shortcut?

let sum = 0
for(let i = -299_999; i <= 300_000; i += 2){
    sum += i
}
console.log(sum)


// Countdown by Fours
// Log positive numbers starting at 2016, counting down by fours (exclude 0), without a FOR loop.

let countDown = 2016
while(countDown > 0){
    console.log(countDown)
    countDown -= 4
}


// Flexible Countdown
// Based on earlier “Countdown by Fours”, given lowNum, highNum, mult, print multiples of mult from highNum down to lowNum, using a FOR. For (2,9,3), print 9 6 3 (on successive lines).

const countDownWithFor = (lowNum, highNum, mult) => {
    for(let i = highNum; i >= lowNum; i--)
        if(i % mult == 0){
            console.log(i)
        }
}

countDownWithFor(2, 9, 3)
countDownWithFor(3, 17, 4)


// The Final Countdown
/* This is based on “Flexible Countdown”. The parameter names are not as helpful, 
but the problem is essentially identical; don’t be thrown off! Given 4 parameters 
(param1,param2,param3,param4), print the multiples of param1, starting at param2 
and extending to param3. One exception: if a multiple is equal to param4, then skip 
(don’t print) it. Do this using a WHILE. Given (3,5,17,9), print 6,12,15 (which are 
all of the multiples of 3 between 5 and 17, and excluding the value 9). */

const finalCountDown = (param1, param2, param3, param4) => {
    let count = param2
    while(count <= param3)
        if(count == param4 || count % param1){
            count ++
        } else {
            console.log(count)
            count += param1
        }
}

finalCountDown(3, 5, 17, 9)
finalCountDown(4, 2, 29, 20)