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

// Balance Index
// Here, a balance point is on an index, not between indices. Return the balance index where sums are equal on 
// either side (exclude its own value). Return -1 if none exist. Ex.: [-2,5,7,0,3] → 2, but [9,9] → -1.

const balanceIndex = (arr) =>{
    if(arr.length < 3) return -1
    let sumLeft = arr[0]
    let sumRight = 0
    for(let i=1; i < arr.length-1; i++){
        for(let j=i+1; j < arr.length; j++){
            sumRight += arr[j]
        }

        if(sumLeft === sumRight) return i
        else {
            sumLeft += arr[i]
            sumRight = 0
        }
    }
    return -1
}

console.log(balanceIndex([-2,5,7,0,3]))
console.log(balanceIndex([9,9]))
console.log(balanceIndex([9,9,1,1,1,2,7]))
console.log(balanceIndex([3,2,1,6,1,2,3]))

// Array: Binary Search
// Given a sorted array and a value, return whether the array contains that value. Do not sequentially iterate 
// the array. Instead, ‘divide and conquer’, taking advantage of the fact that the array is sorted. As always, 
// only use built-in functions that you are prepared to recreate (write yourself) on demand!

const binarySearch = (arr, val) =>{
    if(val < arr[0] || val > arr[arr.length-1]) return false
    let index = Math.floor(arr.length/2)
    console.log(`Start in the middle with ${index} and value of ${arr[index]}`)

    while(index >= 0 && index < arr.length){
        if(val === arr[index]){
            return true
        } else if(val < arr[index]){
            console.log(`Val is lower than ${arr[index]}`)
            if(index === 0) index--
            else index = Math.floor(index/2)
            console.log(`Try ${arr[index]} at index ${index}`)
        } else {
            console.log(`Val is higher than ${arr[index]}`)
            if(index === arr.length-1) index++
            else index += Math.floor((arr.length-1 - index)/2)
            console.log(`Try ${arr[index]} at index ${index}`)
        }
    }
    return false
}

// console.log(binarySearch([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25], 7))
// console.log(binarySearch([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25], 19))
// console.log(binarySearch([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25], 23))
// console.log(binarySearch([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25], 2))
// console.log(binarySearch([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25], -1))
// console.log(binarySearch([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25], 26))

// Min of Sorted-Rotated
// You will be given a numerical array that has first been sorted, then rotated by an unknown amount. 
// Find and return the minimum value in that array. Don’t use built-in functions (surprise!). 

const minSortedRotated = (arr) => {
    let low = 0
    let high = arr.length-1

    while(low < high){
        console.log(`low is ${arr[low]} and high is ${arr[high]}`)

        if(arr[low] < arr[high]){
            return arr[low]
        }

        let mid = Math.floor((low + high)/2)
        console.log(`mid is ${arr[mid]}`)

        if(arr[mid] < arr[mid-1]){
            return arr[mid]
        } 
        
        if(arr[mid] > arr[mid+1]){
            return arr[mid+1]
        }

        if(arr[mid] > arr[low]){
            low = mid+1
        } else {
            high = mid-1
        }

    }
    return arr[low]
}

console.log(minSortedRotated([5, 6, 7, 8, 9, 10, 1, 2, 3, 4]));
console.log(minSortedRotated(["Gigli","Jay is  cool","Mavis","Phoebe","Thurber","Anna","Celeste","Elon"]));

