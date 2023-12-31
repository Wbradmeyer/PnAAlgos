// Only the last few
/* Stan learned something today: that directly decrementing an array’s .length 
immediately shortens it by that amount. Given array arr and number X, remove all 
except the last X elements, and return arr (changed and shorter). Given ([2,4,6,8,10],3), 
change the given array to [6,8,10] and return it. */

const lastFew = (arr, x) => {
    for(i = 0; i <= arr.length - x; i++){
        arr.shift()
    }
    return arr
}

console.log(lastFew([2,4,6,8,10],3))


// Math help
/* Cartman doesn’t really like math; he needs help. You are given two numbers – coefficients 
M and B in the equation Y = MX + B. Build a function to return the X-intercept (his older cousin 
Fiaz wisely reminds him that X-intercept is the value of X where Y equals zero; Cartman just 
snorts in his general direction). */

// for this one, y=0 and I'm given m and b. Need to modify the original equation to Y-B/M = X.

const xIntercept = (m, b) => {
    let x = (0-b)/m
    return x
}

console.log(xIntercept(-2, 3))


// Poor Kenny
/* Kenny tries to stay safe, but somehow everyday something happens. Out of the last 100 days, 
there were 10 days with volcanos, 15 others with tsunamis, 20 earthquakes, 25 blizzards and 
30 meteors (for 100 days total). If these probabilities continue, write whatHappensToday() 
to print a day’s outcome. */



// What Really Happened
/* Kyle (smarter than Kenny) notes that the chance of one disaster should be unrelated 
to the chance of another. Change whatHappensToday() function to create whatReallyHappensToday(). 
In this new function test for each disaster independently, instead of assuming exactly one disaster 
will happen. In other words, with this new function, all five might occur today – or none. Maybe 
Kenny will survive! */



// Soaring IQ
/* Your time at the Dojo will definitely make you smarter! Let’s say a new Dojo student, 
Bogdan entered with a modest IQ of 101. Let’s say that during a 14-week bootcamp, his IQ 
rose by .01 on the first day, then went up by an additional .02 on the second day, then 
up by .03 more on the third day, etc. all the way until increasing by .98 on his 98th day 
(the end of 14 full weeks). What is Bogdan’s final IQ? */

const soaringIq = (iq, days) => {
    for(let i = 1; i <= days; i++){
        iq += i/100
    }
    return iq
}

console.log(soaringIq(101, 98))

// Letter Grade
/* Mr. Cerise teaches high school math. Write a function that assigns and prints a letter 
grade, given an integer representing a score from 0 to 100? Those getting 90+ get an ‘A’, 
80-89 earn ‘B’, 70-79 is a ‘C’, 60-69 should get a ‘D’, and lower than 60 receive ‘F’. 
For example, given 88, you should log "Score: 88. Grade: B". Given the score 61, log the 
string "Score: 61. Grade: D". */

const letterGrade = (numGrade) => {
    let letter = ''
    if(numGrade >= 90) letter = 'A'
    else if(numGrade >= 80) letter = 'B'
    else if(numGrade >= 70) letter = 'C'
    else if(numGrade >= 60) letter = 'D'
    else letter = 'F'

    return `Score: ${numGrade}. Grade: ${letter}.`
}

console.log(letterGrade(88))
console.log(letterGrade(76))


// More Accurate Grades
/* For an additional challenge, add ‘-’ signs to scores in the bottom two percent of A, B, C 
and D scores, and “+” signs to the top two percent of B, C and D scores (sorry, Mr. Cerise 
never gives an A+). Given 88, console.log "Score: 88. Grade: B+". Given 61, log "Score: 61. 
Grade: D-" . */

const moreAccurateGrades = (numGrade) => {
    let letter = ''
    if(numGrade >= 90) letter = 'A'
    else if(numGrade >= 80) letter = 'B'
    else if(numGrade >= 70) letter = 'C'
    else if(numGrade >= 60) letter = 'D'
    else letter = 'F'

    let minus = [60,61,70,71,80,81,90,91]
    let plus = [68,69,78,79,88,89]

    if(minus.includes(numGrade)) letter += '-'
    else if(plus.includes(numGrade)) letter += '+'

    return `Score: ${numGrade}. Grade: ${letter}.`
}

console.log(moreAccurateGrades(88))
console.log(moreAccurateGrades(76))
console.log(moreAccurateGrades(91))