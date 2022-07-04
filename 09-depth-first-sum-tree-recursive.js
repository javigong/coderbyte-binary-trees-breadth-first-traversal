class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

// Write a function, sumTree(root), that takes in the
// root of a binary tree as an argument.
//
// The function should return the total sum of all
// values in the tree. You can assume that the tree
// only contains number values.

const a = new Node(3);
const b = new Node(2);
const c = new Node(7);
const d = new Node(4);
const e = new Node(-2);
const f = new Node(5);

//      3
//    /   \
//   2     7
//  / \     \
// 4  -2     5

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;

const sumTree = (root) => {
  // the tree is empty
  if (root === null) return 0;

  return sumTree(root.left) + root.val + sumTree(root.right);
}; // O(n) time, O(n) space

console.log(sumTree(a)); // 19
