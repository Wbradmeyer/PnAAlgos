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

