// build a balanced BST in this assignment
// be sure to always remove duplicate values or check for an existing value before inserting.
import {mergeSort} from './merge.js';

class Node {
    constructor(data){
        this.data = data;
        this.left = null;
        this.right = null;
    }    
}

class Tree{

    constructor(array){
        this.array = this.sortAndUniqueArray(array);
        this.root = this.buildTree(this.array,0,this.array.length-1);
    }

        
    buildTree(array, start, end) {
         // function to convert the array to BST and return the root of the created tree
         if (start > end) return null;
        
         const mid = Math.floor((start + end) / 2);
        
         const node = new Node(array[mid]);
        
         node.left = this.buildTree(array, start, mid - 1);
         node.right = this.buildTree(array, mid + 1, end);
        
         /* console.log(node); */
         return node;
     }
       
    sortAndUniqueArray(array){
        // first sort the array
        let l = 0;              
        let r = array.length-1;   
        mergeSort(array,l, r);
        // then remove duplicate values
        return Array.from(
            // using set.add is the element already exist is not added
            // the new set is converted to array with array from
            array.reduce((set, e) => set.add(e), new Set())
        )
    }    

// A utility function to do  INORDER traversal = LEFT - ROOT - RIGHT
        inorder(node=this.root,arrayValues=[],callback=(x,y)=>this.displayOutput(x,y)) {
            if (node !== null) {
                this.inorder(node.left,arrayValues,callback);
                /* console.log(node.data + " "); */
                callback(node.data,arrayValues);
                this.inorder(node.right,arrayValues,callback);
            }
        return arrayValues;   
        }

// A utility function to do PREORDER traversal = ROOT - LEFT - RIGHT 
        preorder(node=this.root,arrayValues=[],callback=(x,y)=>this.displayOutput(x,y)) {
            if (node !== null){
                /* console.log(node.data + " "); */
                callback(node.data,arrayValues);
                this.preorder(node.left,arrayValues,callback);
                this.preorder(node.right,arrayValues,callback);
            }
        return arrayValues;
        }

// A utility function to do POSTORDER traversal = LEFT - RIGHT - ROOT 
        postorder(node=this.root,arrayValues=[],callback=(x,y)=>this.displayOutput(x,y)){
            if(node !== null){
                this.postorder(node.left,arrayValues,callback);
                this.postorder(node.right,arrayValues,callback);
               /*  console.log(node.data + " "); */
                callback(node.data,arrayValues);
            }
        return arrayValues;
        }

// A utility function to do level-order traversal of BST
levelOrder(arrayQ=[this.root],arrayValues=[],callback=(x,y)=>this.displayOutput(x,y)) {
    switch(arrayQ[0] !== null){
        case true:
        switch (arrayQ.length===0){
            case true:
                break;
            default:
                if (arrayQ[0] !== null) {
                   
                    callback(arrayQ[0].data,arrayValues);
                    
                    if(arrayQ[0].left!== null){
                    arrayQ.push(arrayQ[0].left);
                    }
                    if(arrayQ[0].right!== null){
                    arrayQ.push(arrayQ[0].right);
                    }
                    arrayQ.shift();
                    }  
                return this.levelOrder(arrayQ,arrayValues,callback);
           }
        default:
        break;
        }
    return arrayValues;   
    }

    displayOutput(data,array){
       /* console.log(data); */
       array.push(data);
       return array;
    }

// Given a binary search tree and a value, this function inserts the value and returns the new root
        insert(value, root = this.root) {
            // this function uses recursive method
            switch(this.root===null){
                case true:
                return (this.root = new Node(value, null, null));
                default:
    
            if (root.left === null && value < root.data) {
              return (root.left = new Node(value, null, null));
            }
        
            if (root.right === null && value > root.data) {
              return (root.right = new Node(value, null, null));
            }
        
            if (value < root.data) {
              root = root.left;
            } else {
              root = root.right;
            }
        
            return this.insert(value, root);
            }
          }

// Given a binary search tree and a key, this function deletes the key and returns the new root
    deleteNode(key, root=this.root) {
            // Base case
            if (root === null){
                return root;
            }
        
            if (key < root.data){   // less than
            root.left = this.deleteNode(key, root.left);
            }else{
            if (key > root.data){     // bigger than
            root.right = this.deleteNode(key, root.right);
            }else{        // equal
                if (root.left === null){
                    return root.right;
                }else{
                if (root.right === null){
                    return root.left;
                }else{
                    root.data = this.minValue(root.right);
                    root.right = this.deleteNode(root.data,root.right);
                  }
                }
              }
            }     
           /*  console.log(root); */
            return root;       
        }
// this function returns the min value for a given node
    minValue(node) {
        let minv = node.data;
        while (node.left !== null) {
            minv = node.left.data;
            node = node.left;
        }
      /*   console.log(minv); */
        return minv;
    }

// Given a binary search tree and a key, this function finds the key and returns the node with the given value
    find(key, root=this.root){
        // Base case
        if (root === null){
            return root;
        }

        if (key === root.data){
            return root;
        }

           if (key < root.data){   // less than
            root = root.left; 
            }else{
            if (key > root.data){     // bigger than
            root = root.right;
            }
           }
        return this.find(key, root);   
    }

// Height is defined as the number of edges in the longest path from a given node to a leaf node
    height(node=this.root){
        // the input is a node 
        switch(node===null){
            case true:
                return -1;
            break;
            default:
                const heightLeft = this.height(node.left);
                const heightRight = this.height(node.right);
            return Math.max(heightLeft,heightRight)+1;  
        }
    }

    heightOfKey(key, root=this.root){
        // height of a given value or key - return null is the value is missing
        if(this.find(key)===null){
            return null;
        }else{
            return this.height(this.find(key));
        }  
    }

//Depth is defined as the number of edges in the path from a given node to the tree’s root node
    depth(node=this.root){
        // the input is a node 
        switch(this.height() === -1){
            case true:
            console.log('empty tree');
            return null;
            default:
            const treeRootHeight = this.height();
            const value = node.data;
            const depth = treeRootHeight - this.heightOfKey(value);
            return depth;
        }
    }

    depthtOfKey(key){
        // depth of a given value or key - return null is the value is missing
        if(this.find(key)===null){
            return null;
        }else{
            return this.depth(this.find(key));
        }  
    }

// A balanced tree is one where the difference between heights of 
// the left subtree and the right subtree of every node is not more than 1.
    isBalanced(node=this.root){
        switch (node === null){
            case true:
            return true;
            default:
                switch(node.left===null && node.right===null){
                    case true:  
                    return true;
                    default:
                        const leftSubtreeHeight = this.height(node.left); 
                        const rightSubtreeHeight = this.height(node.right); 
                        if (
                            Math.abs(leftSubtreeHeight - rightSubtreeHeight) <= 1 &&
                            this.isBalanced(node.left) &&
                            this.isBalanced(node.right)
                          ) {
                            return true;
                          }
                          // Otherwise tree is not balanced
                          return false;
                }
            }
        }

    // rebalances an unbalanced tree
        rebalance(node=this.root){
            switch(this.isBalanced(node)){
                case true:
                console.log('the tree is balanced');
                break;
                case false:
                    const newArray = this.inorder();
                    this.array = this.sortAndUniqueArray(newArray);
                    this.root=this.buildTree(this.array,0,this.array.length-1);
                return (this.array,this.root);
            }
        }

}

export {Node,Tree};

