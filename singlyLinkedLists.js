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
    addFront(value) {
        let newNode = new Node(value)
        if(!this.head) {
            this.head = newNode
            return this
        }
        newNode.next = this.head
        this.head = newNode
        return this
    }
    removeFront() {
        if(!this.head) return null
        this.head = this.head.next
        return this.head
    }
    front() {
        if(!this.head) return null
        return this.head.data
    }
    contains(value) {
        if(!this.head) return false
        let first = this.head
        while(first){
            if(first.data === value) return true
            first = first.next
        }
        return false
    }
    length() {
        if(!this.head) return 0
        let first = this.head
        let count = 0
        while(first){
            count += 1
            first = first.next
        }
        return count
    }
    display() {
        if(!this.head) return null
        let first = this.head
        let allNodes = `${first.data}`
        while(first.next){
            allNodes += `, ${first.next.data}`
            first = first.next
        }
        return allNodes
    }
    max() {
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
    min() {
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
    average(){
        if(!this.head) return null
        let first = this.head 
        let avg = 0
        while(first){
            avg += first.data
            first = first.next
        }
        return avg/this.length()
    }
}

SLL1 = new SLL()
console.log(SLL1.addFront(76))
console.log(SLL1.addFront(2))
console.log(SLL1.display())
console.log(SLL1.addFront(11.41))
console.log(SLL1.display())
console.log(SLL1.contains(1))
console.log(SLL1.contains(76))
console.log(SLL1.length())
console.log(SLL1.addFront(5))
console.log(SLL1.length())
console.log(SLL1.max())
console.log(SLL1.min())
console.log(SLL1.average())