// Zoo Inventory
// Define a function, zooInventory, that accepts a multi-dimensional array of animal facts.
// zooInventory should return a new, flat array. Each element in the new array should be a 
// sentence about each of the animals in the zoo.

let myZoo = [
    ['King Kong', ['gorilla', 42]],
    ['Nemo', ['fish', 5]],
    ['Punxsutawney Phil', ['groundhog', 11]]
];

const zooInventory = (arr) => {
    let newArr = []
    for(let i = 0; i < arr.length; i++){
        newArr.push(`${arr[i][0]} the ${arr[i][1][0]} is ${arr[i][1][1]}`)
    }
    return newArr
}
console.log(zooInventory(myZoo))

// Make Grid
// Write a function makeGrid that accepts two arguments: numColumns (number) + numRows (number)
// makeGrid should return a two-dimensional array that represents a grid of the given dimensions.

const makeGrid = (cols, rows) => {
    let colArr = []
    let gridArr = []
    for(let i = 0; i < cols; i++){
        colArr.push(i + 1)
    }
    for(let j = 0; j < rows; j++){
        gridArr.push(colArr)
    }
    return gridArr
}

console.log(makeGrid(3,4))

// Remove Columns
// Write a function removeColumns that accepts two arguments: 1) originalGrid (two-dimensional array), 2) numColums (number)
// removeColumns should return a new grid with the correct number of columns removed.

const numGrid = [[1, 2, 3],
                [1, 2, 3],
                [1, 2, 3],
                [1, 2, 3]]

const removeColumns = (arr, num) => {
    const newGrid = []
    const row = arr[0].slice(0, arr[0].length - num)
    let count = 1
    while(count <= arr.length){
        newGrid.push(row)
        count++
    }
    return newGrid
}

console.log(removeColumns(numGrid, 2))

// Define a function, myJoin, that accepts up to two arguments: 1) array, 2) separator (string, optional)
// myJoin should return a string with all of the elements from the array joined togther. 
// The separator should separate the joined elements:

const myJoin = (arr, char) => {
    if(char == undefined || char == null){
        char = ','
    }
    let newStr = arr[arr.length-1]
    for(let i = arr.length -2; i >= 0; i--){
        if(arr[i] == undefined || arr[i] == null){
            newStr = `${char}` + newStr
        } else {
            newStr = `${arr[i]}${char}` + newStr
        }
    }
    return newStr
}

console.log(myJoin(['let\'s', 'make', 'a', 'list'], ' '))
console.log(myJoin(['a', 'b', 'c'], '+'))
console.log(myJoin(['Peter', 'Paul', 'Mary']))
console.log(myJoin(['hello', undefined, 'world'], '-'))

// My Slice
// Define a function, mySlice, that accepts up to three arguments: 1) originalArray, 2) startIdx (number, optional),
// 3) endIdx (number, optional). mySlice should return a copy of the original array. The copy should include all 
// of the elements from the orignal array, starting at and including the startIdx, up through and excluding the endIdx.
// If the endIdx is undefined, include all the indices starting at and including the startIdx through the end of the original array.
// If the startIdx is undefined, return a copy of the original array.
// startIdx and endIdx can be negative numbers, in which case they count indices from the back of the array.

const mySlice = (arr, startIdx, endIdx) => {
    const sliceArr = []
    if(startIdx == undefined) startIdx = 0
    else if(startIdx < 0) startIdx = arr.length + startIdx

    if(endIdx == undefined) endIdx = arr.length
    else if(endIdx < 0) endIdx = arr.length + endIdx
    
    for(let i = startIdx; i < endIdx; i++){
        sliceArr.push(arr[i])
    }
    return sliceArr
}

console.log(mySlice([1, 2, 3], 1, 2))
console.log(mySlice([1, 2, 3], 1))
console.log(mySlice([1, 2, 3]))
console.log(mySlice([1, 2, 3], -1))