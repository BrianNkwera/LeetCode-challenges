/**
 * You are given the root of a binary tree containing digits from 0 to 9 only.
 * Each root-to-leaf path in the tree represents a number.
 * For example, the root-to-leaf path 1 -> 2 -> 3 represents the number 123.
 * Return the total sum of all root-to-leaf numbers. Test cases are generated so that the answer will fit in a 32-bit integer.
 */

/**
 
/**
 * @param {TreeNode} root
 * @return {number}
 */

//Definition for a binary tree node.

class TreeNode {
  constructor(val, left, right) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
    // this.visited = false;
  }
}

const binaryTreeFromArray = (array, i) => {
  let root = null;

  if(i < array.length){
    root = new TreeNode(array[i]);

    root.left = binaryTreeFromArray(array, 2*i +1);
    root.right = binaryTreeFromArray(array, 2*i +2);
  }

  return root;

};

function inOrderTraversal (root){
    if(root !== null){
        inOrderTraversal(root.left);
        console.log(root.val + " ");
        inOrderTraversal(root.right);
    }
}

function traverseFromRootToLeaf(root) {
    if(root !== null ){
        console.log(root.val)
        traverseFromRootToLeaf(root.right);
    }
}

const binaryTree = binaryTreeFromArray([1,2,3,4,5,6], 0);
console.log(binaryTree)
traverseFromRootToLeaf(binaryTree);

var sumNumbers = function (root) {
  const treePointer = root;
  const stack = [];
  //do a depth first search
  /**
   * Add current vertex v to the stack
   * Mark current vertext as visited
   * While stack is not empty
   * Peek value from tack and place it as v
   * find next unvisited neighbiur
   * If unvisited neighbour exists
   * Add to stack then mark as visited
   * Else pop from stack
   */

  stack.push(root.val);
  root.visited = true;
  let numberString = "";

  const depthFirstTraversal = (rootNode) => {
    if (rootNode !== null) {
      numberString.concat(rootNode.val);
      console.log(numberString);
      depthFirstTraversal(rootNode.left);
    }
  };

  while (stack.length !== 0) {
    //find an unvisited neighbour of v
  }
};
