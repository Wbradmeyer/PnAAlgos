// Average (Warmup)
// (Warm-up) Always run through some quick algorithm problems before any coding interview, 
// to get yourself warmed up. How about this one: return the average value of an array of unsorted numbers.

const averageOfArray = (arr) =>{
    let sum = 0
    for(let i = 0; i < arr.length; i++){
        sum += arr[i]
    }
    return sum/arr.length
}

console.log(averageOfArray([2,4,7,9,12,54,6,98,4,3]))

// Balance Point
// Write a function that returns whether the given array has a balance point between indices, where one side’s 
// sum is equal to the other’s. Example: [1,2,3,4,10] → true (between indices 3 & 4), but [1,2,4,2,1] → false.

const balancePoint = (arr) =>{
    let sumLeft = 0
    let sumRight = 0
    for(let i=0; i < arr.length-1; i++){
        sumLeft += arr[i]
        for(let j=i+1; j < arr.length; j++){
            sumRight += arr[j]
        }

        if(sumLeft === sumRight) return true
        else sumRight = 0
    }
    return false
}

console.log(balancePoint([1,2,3,4,10]))
console.log(balancePoint([1,2,4,2,1]))