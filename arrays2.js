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

