class BTNode {
    constructor(value) {
        this.val = value;
        this.left = null;
        this.right = null;
    }
}
class BST {
    constructor() {
        this.root = null;
    }
    // add methods here...

    add(value) {// add new node to tree
        let newNode = new BTNode(value)
        if(!this.root){
            this.root = newNode
            return this
        } else {
            let currentNode = this.root
            while(true){
                if(value < currentNode.val){
                    if(!currentNode.left){
                        currentNode.left = newNode
                        return this
                    } else {
                        currentNode = currentNode.left
                    }
                } else {
                    if(!currentNode.right){
                        currentNode.right = newNode
                        return this
                    } else {
                        currentNode = currentNode.right
                    }
                }
            }
        }
    }

    contains(value) {// check if value is in BST
        let currentNode = this.root
        
        while(currentNode){
            if(currentNode.val === value){
                return true
            } else if(value < currentNode.val){
                currentNode = currentNode.left
            } else {
                currentNode = currentNode.right
            }
        }

        return false
    }

    min() {// returns the smallest value
        let currentNode = this.root
        if(!currentNode) return null

        while(currentNode.left){
            currentNode = currentNode.left
        }
        return currentNode.val
    }

    max() {//returns the largest value
        let currentNode = this.root
        if(!currentNode) return null

        while(currentNode.right){
            currentNode = currentNode.right
        }
        return currentNode.val
    }
}


let Tree = new BST()
Tree.add(5)
Tree.add(10)
Tree.add(13)
Tree.add(3)
Tree.add(2)
Tree.add(6)
// console.log(Tree)

// console.log(Tree.contains(6))
// console.log(Tree.contains(7))

// console.log(Tree.min())
console.log(Tree.max())