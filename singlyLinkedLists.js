class Node {
    constructor(data) {
        this.data = data
        this.next = null
    }
}
class SLL {
    constructor(){
        this.head = null
    }
    addFront(value) { //add a node to the front of the list
        let newNode = new Node(value)
        if(!this.head) {
            this.head = newNode
            return this
        }
        newNode.next = this.head
        this.head = newNode
        return this
    }
    removeFront() { //remove a node from the front of the list
        if(!this.head) return null
        this.head = this.head.next
        return this.head
    }
    front() { //return the first value in the list
        if(!this.head) return null
        return this.head.data
    }
    contains(value) { //return true/false for whether the list contains the given value
        if(!this.head) return false
        let first = this.head
        while(first){
            if(first.data === value) return true
            first = first.next
        }
        return false
    }
    length() { //return the length of the list
        if(!this.head) return 0
        let first = this.head
        let count = 0
        while(first){
            count += 1
            first = first.next
        }
        return count
    }
    display() { //show all the values in the list
        if(!this.head) return null
        let first = this.head
        let allNodes = `${first.data}`
        while(first.next){
            allNodes += `, ${first.next.data}`
            first = first.next
        }
        return allNodes
    }
    max() { //show the highest value in the list
        if(!this.head) return null
        let first = this.head
        let maxVal = first.data
        while(first){
            if(first.data > maxVal){
                maxVal = first.data
            }
            first = first.next
        }
        return maxVal
    }
    min() { //show the lowest value in the list
        if(!this.head) return null
        let first = this.head
        let minVal = first.data
        while(first){
            if(first.data < minVal){
                minVal = first.data
            }
            first = first.next
        }
        return minVal
    }
    average(){ //show the average of all list values
        if(!this.head) return null
        let first = this.head 
        let avg = 0
        while(first){
            avg += first.data
            first = first.next
        }
        return avg/this.length()
    }
    back(){ //show the last list value
        if(!this.head) return null
        let last = this.head
        while(last.next){
            last = last.next
        }
        return last.data
    }
    removeBack(){ //remove the list item in the list and return the altered list
        if(!this.head) return null
        let node = this.head
        let allNodes = `${node.data}` 
        while(node.next.next){
            node = node.next
            allNodes += `, ${node.data}`
        }
        node.next = null
        return allNodes
    }
    // addBack(value){

    // }
}

SLL1 = new SLL()
console.log(SLL1.addFront(76))
console.log(SLL1.addFront(2))
// console.log(SLL1.display())
console.log(SLL1.addFront(11.41))
console.log(SLL1.display())
// console.log(SLL1.contains(1))
// console.log(SLL1.contains(76))
// console.log(SLL1.length())
console.log(SLL1.addFront(5))
// console.log(SLL1.length())
// console.log(SLL1.max())
// console.log(SLL1.min())
// console.log(SLL1.average())
console.log(SLL1.back())
console.log(SLL1.removeBack())