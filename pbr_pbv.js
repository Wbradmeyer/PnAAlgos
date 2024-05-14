// Very Odd
// Write a function, veryOdd. The function accepts an array of numbers. It should return a new array that 
// contains only the odd numbers from the given array. veryOdd must not mutate the given array.

const veryOdd = (arr) => {
    const onlyOdds = arr.filter(num => num % 2)
    return onlyOdds
}

let allTheNums = [1, 2, 3, 4, 5, 6, 7, 8];
let oddNums = veryOdd(allTheNums);

console.log('oddNums:', oddNums); // [1, 3, 5, 7];
console.log('allTheNums:', allTheNums); // [1, 2, 3, 4, 5, 6, 7, 8]


// Very Odd Mutant
// ' Write a function, 'veryOddMutant'. The function accepts an array of numbers. The function should mutate the 
// given array by replacing every even number in the array with the string 'normie'.
// 'veryOddMutant' should return a count of the number of even numbers it replaced.

const veryOddMutant = (arr) => {
    let count = 0
    for(let i = 0; i < arr.length; i++){
        if(arr[i] % 2 == 0){
            arr[i] = 'normie'
            count++
        }
    }
    return count
}

let numsArr = [1, 2, 3, 4, 5, 6, 7, 8];
let countRemoved = veryOddMutant(numsArr);

console.log('numsArr:', numsArr);
// [1, 'normie', 3, 'normie', 5, 'normie', 7, 'normie'];

console.log('countRemoved:', countRemoved);
// 4


// Clone Machine
// Write a function cloneMachine, that, given an animal (represented as an object), returns a clone of the 
// original animal. The name of the clone should be the name of its parent, concatenated with the word 'Clone'.
// cloneMachine should also push the name of the clone to the parent's offspring array.

const cloneMachine = (animal) => {
    const clone = {...animal}
    clone.name += 'Clone'
    clone.offspring = [...animal.offspring]
    animal.offspring.push(clone.name)
    return clone
}

let dolly = {
    name: 'Dolly',
    species: 'sheep',
    offspring: []
}

let dollyClone = cloneMachine(dolly);

console.log(dollyClone) // {name: 'DollyClone', species: 'sheep', offspring: []}
console.log(dolly) // {name: 'Dolly', species: 'sheep', offspring: ['DollyClone']}


// My Splice
// Write a 'mySplice' function that mirrors the behavior of JavaScript's .splice() array method. 
// However, mySplice should accept the array to operate on as an argument, rather than being invoked as a 
// method on that array. mySplice only needs to take one element to add to the array (the .splice method can 
// actually take any number of values to add). Do not use .splice in your function.

let myArray = [1, 2, 3];

const mySplice = (arr, index, deleteCount, val) => {
    const removed = []
    let temp

    if(deleteCount == 0 && val){
        arr.push(val)
        for(let i = index; i < arr.length; i++){
            temp = arr[i]
            arr[i] = arr[arr.length-1]
            arr[arr.length-1] = temp
        }
    } else {
        if(val){
            arr.push(val)
            while(deleteCount > 0 ){
                temp = arr[index]
                removed.push(arr[index])
                arr[index] = arr[arr.length-1]
                arr[arr.length-1] = temp
                arr.pop()
                index++
                deleteCount--
            }
        } else {
            // giving one too many problematic loops
            while(deleteCount > 0 ){
                temp = arr[index]
                removed.push(arr[index])
                if((index + deleteCount) < arr.length){
                    arr[index] = arr[index + deleteCount]
                    arr[index + deleteCount] = temp
                }
                arr.pop()
                index++
                deleteCount--
            }
        }
    }

    console.log(removed)
    return removed
}

mySplice(myArray, 1, 1, 'apples') // => [2]
console.log(myArray)    // [1,'apples', 3]

let ourStuff = ['food', 'trash', 'clothes']
mySplice(ourStuff, 1, 0, 'more food')
console.log(ourStuff)

let funNums = [10, 20, 30, 40, 50, 60];
mySplice(funNums, 2, 3);
console.log(funNums)


// Write a function that accepts an array and reverses that array in place. The behavior should mimic the 
// behavior of the native .reverse() array method. However, your reverse function should accept the array to 
// operate on as an argument, rather than being invoked as a method on that array.
// Do not use the native .reverse() method in your own implementation.

let arrToReverse = [1, 2, 3, 4];

const reverseArr = (arr) => {
    let temp
    for(let i = 0; i < arr.length/2; i++){
        temp = arr[i]
        arr[i] = arr[arr.length-1-i]
        arr[arr.length-1-i] = temp
    }
}

reverseArr(arrToReverse);
console.log(arrToReverse) // [4, 3, 2, 1]
let secondArr = [1,3,5,7,4,2,0]
reverseArr(secondArr)
console.log(secondArr) // [0,2,4,7,5,3,1]


// Write a function, deeperCopy, that, unlike .slice, will deeply copy a two- dimensional array.

const deeperCopy = (arr) => {
    let copy = []
    for(let i = 0; i < arr.length; i++){
        if(Array.isArray(arr[i])){
            copy.push(deeperCopy(arr[i]))
        } else {
            copy.push(arr[i])
        }
    }
    return copy
}

let arrToCopy = [1, [2, 3]];

let copy = deeperCopy(arrToCopy);
copy[1].push(4);

console.log(arrToCopy); // [1, [2, 3]]

let copy2 = arrToCopy.slice();
copy2[1].push(4);

console.log(arrToCopy); // [1, [2, 3, 4]]


