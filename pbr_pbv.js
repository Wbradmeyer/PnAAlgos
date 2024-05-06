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
