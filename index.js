import {Tree} from './modules_classes/balanced-bst.js';
import {prettyPrint} from './modules_classes/pretty-print-tree.js';
import {generateRandomArray100to1000, generateRandomArrayLess100} from './modules_classes/generate-random.js';

// Create a binary search tree from an array of random numbers < 100.
let array = generateRandomArrayLess100(10);
console.log(array);
const tree = new Tree(array);
prettyPrint(tree.root);

// Confirm that the tree is balanced by calling isBalanced.
console.log(`is the tree balance? : ${tree.isBalanced()}`);

// Print out all elements in level, pre, post, and in order.
console.log(`level order output: ${tree.levelOrder()}`);
console.log(`preorder output: ${tree.preorder()}`);
console.log(`postorder output: ${tree.postorder()}`);
console.log(`inorder output: ${tree.inorder()}`);

// Unbalance the tree by adding several numbers > 100.
let arraytoAdd = generateRandomArray100to1000(5);
arraytoAdd.map((x)=>tree.insert(x));
prettyPrint(tree.root);
console.log(`is the tree balance? : ${tree.isBalanced()}`);

// Balance the tree by calling rebalance.
tree.rebalance();
prettyPrint(tree.root);
console.log(`is the tree balance? : ${tree.isBalanced()}`);
console.log(`level order output: ${tree.levelOrder()}`);
console.log(`preorder output: ${tree.preorder()}`);
console.log(`postorder output: ${tree.postorder()}`);
console.log(`inorder output: ${tree.inorder()}`);
