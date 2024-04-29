// Last Friday Night
// According to the song, Katy Perry "maxed our credit cards".
// Define a function, lastFridayNight, takes an array of transactions.
// lastFridayNight should return the total amount she spent last Friday night.

let transactions = [
    {
        name: "Tons of glitter",
        amount: 70
    },
    {
        name: "Porcelain Pink Flamingos",
        amount: 92
    },
    {
        name: "Chandelier replacement",
        amount: 10000,
    },
    {
        name: "Dinner at TGIF x6",
        amount: 350
    }
];

const lastFridayNight = (arr) => {
    let total = 0
    for(let i = 0; i < arr.length; i++){
        total += arr[i].amount
    }
    return total
}

console.log(lastFridayNight(transactions))


// Compare Objects
// Define a function, compareObjects, that accepts two objects as arguments.
// compareObjects should return true if both objects have exactly the same key/value pairs. Otherwise, 
// compareObjects should return false. Assume the objects are not nested.

const compareObjects = (obj1, obj2) => {
    const arr1 = Object.keys(obj1)
    const arr2 = Object.keys(obj2)
    for(const key in obj1){
        if(arr1.length != arr2.length){
            return false
        } else if(obj1[key] != obj2[key]){
            return false
        }
    }
    return true
}

console.log(compareObjects({ name: 'nick' }, { name: 'nick' }))
console.log(compareObjects({ name: 'zeke' }, { name: 'zeke', age: 12 }))