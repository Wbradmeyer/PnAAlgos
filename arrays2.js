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

// Flatten
// Flatten a given array, eliminating nested and empty arrays. Do not alter it; return a new one retaining order. 
// For [1,[2,3],4,[]] return [1,2,3,4].

const flattenArray = (arr) => {
    let flatArr = []
    for(let i = 0; i < arr.length; i++){
        if(!Array.isArray(arr[i])) {
            flatArr.push(arr[i])
        } else if(Array.isArray(arr[i]) && arr[i] != ''){
            for(let j = 0; j < arr[i].length; j++){
                flatArr.push(arr[i][j])
            } 
        }
    }
    return flatArr
}

console.log(flattenArray([1,[2,3],4,[]]))
console.log(flattenArray([1,[2,4,0],5,[],6,5,0]))

// Second: work ‘in-place’ in the given array (do not create another). Alter order if needed. 
// Ex.: [1,[2,3],4,[]] could become [1,3,4,2].
// Third: make your algorithm both in-place and stable. Do you need a return value?


// Remove Duplicates
// Remove array duplicates. Do not alter original. Return new array with results ‘stable’ (original order). 
// For [1,2,1,3,4,2] return [1,2,3,4].

const removeDuplicates = (arr) => {
    let newArr = []
    for(let i = 0; i < arr.length; i++){
        if(!newArr.includes(arr[i])){
            newArr.push(arr[i])
        }
    }
    return newArr
}

console.log(removeDuplicates([1,2,1,3,4,2]))

// Second: work ‘in-place’ in given array. Alter order if needed (stability is not required). 
// Ex.: [1,2,1,3,4,2] could become [1,2,4,3].
// Third: make it in-place and stable.

const removeDupes2 = (arr) => {
    for(let i = arr.length-1; i > 0; i--){
        for(let j = 0; j < i; j++){
            if(arr[i] === arr[j]){
                arr.splice(i, 1)
                break
            }
        }
    }
    return arr
}

console.log(removeDupes2([1,2,1,3,4,2]))
console.log(removeDupes2([1,2,1,3,4,2,2,2,2,4,3,2,1,1,4]))

// Fourth: eliminate any second (inner) loop.

const removeDupes3 = (arr) => {
    for(let i = arr.length-1; i > 0; i--){
        if(arr.slice(0, i).includes(arr[i])){
            arr.splice(i, 1)
        }
    }
    return arr
}

console.log(removeDupes3([1,2,1,3,4,2]))
console.log(removeDupes3([1,2,1,3,4,2,2,2,2,4,3,2,1,1,4]))

// Mode
// Back in the Basic 13, you wrote code to compute an array’s minimum and maximum values. 
// You also wrote code to determine the average value (the “mean”). What about the “mode” – 
// the most common value in that data set. Create a function that, given an array, returns the 
// most frequent value in the array.
// Second: memory constraints prevent your using a new array. How does this affect your solution?

const arrMode = (arr) => {
    let active = 0
    let most = 0
    let mostCount = 0
    let currentCount = 0

    // loop through arr, counting how many times each element appears.
    for(let i = 0; i < arr.length; i++){
        active = arr[i]
        currentCount = 0
        console.log(`active is ${active}, most is ${most}, mostCount is ${mostCount}, currentCount is ${currentCount}`)
        // loop again, comparing the count of each subsequent element
        for(let j = i; j < arr.length; j++){
            if(arr[j] === active){
                currentCount++
            }
        }
        // if new count is greater, replace count and most
        if(currentCount > mostCount){
            mostCount = currentCount
            most = active
        }
    } 
    return most
}

console.log(arrMode([1,2,1,3,4,2,2,2,2,4,3,2,1,1,4]))