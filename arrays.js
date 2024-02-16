// Reverse
// Given a numerical array, reverse the order of values, in-place. The reversed array 
// should have the same length, with existing elements moved to other indices so that 
// order of elements is reversed. Working 'in-place' means that you cannot use a second 
// array – move values within the array that you are given. As always, do not use built-in 
// array functions such as splice().

const reverseArr = arr =>{
    for(let i = 0; i < arr.length/2; i++){
        let temp = arr[i]
        arr[i] = arr[arr.length-i-1]
        arr[arr.length-i-1] = temp
    }
    return arr
}

console.log(reverseArr([1,2,3,4,5]))
console.log(reverseArr([1,2,3,4,5,6]))

// Rotate
// Implement rotateArr(arr, shiftBy) that accepts array and offset. Shift arr's values to the 
// right by that amount. 'Wrap-around' any values that shift off array's end to the other side, 
// so that no data is lost. Operate in-place: given ([1,2,3],1), change the array to [3,1,2]. Don't use built-in functions.
// Second: allow negative shiftBy (shift L, not R).
// Third: minimize memory usage. With no new array, handle arrays/shiftBys in the millions.
// Fourth: minimize the touches of each element.

const rotateArr = (arr, shiftBy) =>{
    let shiftArr = [...arr]
    for(let i=0; i < arr.length; i++){
        if(i+shiftBy >= arr.length){
            arr[i+shiftBy-arr.length] = shiftArr[i]
        } else if(i+shiftBy < 0) {
            arr[i+shiftBy+arr.length] = shiftArr[i]
        } else {
            arr[i+shiftBy] = shiftArr[i]
        }
    }
    return arr
}

console.log(rotateArr([1,2,3,4,5], 1))
console.log(rotateArr([1,2,3,4,5], 2))
console.log(rotateArr([1,2,3,4,5], -1))
console.log(rotateArr([1,2,3,4,5,6,7,8,9,1,2,3,4,5,6,7,8,9,1,2,3,4,5,6,7,8,9,1,2,3,4,5,6,7,8,9,
    1,2,3,4,5,6,7,8,9,1,2,3,4,5,6,7,8,9,1,2,3,4,5,6,7,8,9,1,2,3,4,5,6,7,8,9,1,2,3,4,5,6,7,8,9,
    1,2,3,4,5,6,7,8,9,1,2,3,4,5,6,7,8,9,1,2,3,4,5,6,7,8,9,1,2,3,4,5,6,7,8,9,1,2,3,4,5,6,7,8,9,
    1,2,3,4,5,6,7,8,9,1,2,3,4,5,6,7,8,9,1,2,3,4,5,6,7,8,9,1,2,3,4,5,6,7,8,9,1,2,3,4,5,6,7,8,9,
    1,2,3,4,5,6,7,8,9,1,2,3,4,5,6,7,8,9,1,2,3,4,5,6,7,8,9,1,2,3,4,5,6,7,8,9,1,2,3,4,5,6,7,8,9,
    1,2,3,4,5,6,7,8,9,1,2,3,4,5,6,7,8,9,1,2,3,4,5,6,7,8,9,1,2,3,4,5,6,7,8,9,1,2,3,4,5,6,7,8,9,
    1,2,3,4,5,6,7,8,9,1,2,3,4,5,6,7,8,9,1,2,3,4,5,6,7,8,9,1,2,3,4,5,6,7,8,9,1,2,3,4,5,6,7,8,9,
    1,2,3,4,5,6,7,8,9,1,2,3,4,5,6,7,8,9,1,2,3,4,5,6,7,8,9,1,2,3,4,5,6,7,8,9,1,2,3,4,5,6,7,8,9,
    1,2,3,4,5,6,7,8,9,1,2,3,4,5,6,7,8,9,1,2,3,4,5,6,7,8,9], 3))

// Filter Range
// Alan is good at breaking secret codes. One method is to eliminate values that lie outside of a 
// specific known range. Given arr and values min and max, retain only the array values between min and max. 
// Work in-place: return the array you are given, with values in original order. No built-in array functions.

const filterRange = (arr, min, max) =>{
    for(let i = arr.length-1; i >= 0; i--){
        if(arr[i] < min || arr[i] > max){
            arr.splice(i, 1)
        }
    }
    return arr
}

console.log(filterRange([2,3,4,5,6,7,8,9,10,4,5,17,6], 3, 6))

const filterRange2 = (arr, min, max) =>{
    let numsInRangeIndex = 0
    for(let i = 0; i < arr.length; i++){
        if(arr[i] >= min && arr[i] <= max){
            let temp = arr[i]
            arr[i] = arr[numsInRangeIndex]
            arr[numsInRangeIndex] = temp

            numsInRangeIndex++
        }
    }
    arr.length = numsInRangeIndex
    return arr
}

console.log(filterRange2([2,3,4,5,6,7,8,9,10,4,5,17,6], 3, 6))

// Concat
// Replicate JavaScript's concat(). Create a standalone function that accepts two arrays. 
// Return a new array containing the first array's elements, followed by the second array's elements. 
// Do not alter the original arrays. Ex.: arrConcat( ['a','b'], [1,2] ) should return new array ['a','b',1,2].

const arrConcat = (arr1, arr2) =>{
    let newArr = [...arr1]
    for(let i=0; i < arr2.length; i++){
        newArr.push(arr2[i])
    }
    return newArr
}

console.log(arrConcat(['a','b'], [1,2]))

// Remove Negatives
// Implement removeNegatives() that accepts an array, removes negative values, and returns the same 
// array (not a copy), preserving non-negatives’ order. As always, do not use built-in array functions.

const removeNegatives = arr =>{
    for(let i=0; i <arr.length; i++){
        if(arr[i] < 0){
            arr.splice(i, 1)
        }
    }
    return arr
}

console.log(removeNegatives([1,-1,2,-2,3,-3]))

const removeNegatives2 = arr =>{
    let nonNegIndex = 0
    for(let i=0; i < arr.length; i++){
        if(arr[i] >= 0){
            let temp = arr[i]
            arr[i] = arr[nonNegIndex]
            arr[nonNegIndex] = temp

            nonNegIndex++
        }
    }
    arr.length = nonNegIndex
    return arr
}

console.log(removeNegatives2([1,-1,2,-2,3,-3]))

// Second-to-Last
// Return the second-to-last element of an array. Given [42,true,4,"Kate",7], return "Kate". 
// If array is too short, return null.

const secondToLast = arr =>{
    if(arr.length < 2) return null
    return arr[arr.length-2]
}

console.log(secondToLast([42,true,4,"Kate",7]))

// Second-Largest
// Return the second-largest element of an array. Given [42,1,4,Math.PI,7], return 7. 
// If the array is too short, return null.

const secondLargest = arr =>{
    if(arr.length < 2) return null
    let largest = arr[0]
    let second = 0
    for(let i = 1; i < arr.length; i++){
        if(arr[i] > largest){
            second = largest
            largest = arr[i]
        } else if(arr[i] > second && arr[i] < largest){
            second = arr[i]
        }
    }
    return second
}

console.log(secondLargest([42,1,4,Math.PI,7]))
console.log(secondLargest([7,1,4,Math.PI,42]))