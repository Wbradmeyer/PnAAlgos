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
    contains(value){
        
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
}

SLL1 = new SLL()
console.log(SLL1.addFront(76))
console.log(SLL1.addFront(2))
console.log(SLL1.display())
console.log(SLL1.addFront(11.41))
console.log(SLL1.display())