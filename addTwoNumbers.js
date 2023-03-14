/**
Definition for singly-linked list.
*/
class ListNode {
  constructor(val, next) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

/** 1st approach */
/**
traverse the first list from first to last
place it into a reverse array.
Convert the array into string.
Convert string to a nuumber
*/
// function returnNumberFromLinkedList(list) {
//   let array = [];

//   while (list !== null) {
//     array.unshift(list.val);
//     list = list?.next;
//   }
//   const string = array.join("");
//   return Number(string);
// }

function linkedList(arr) {
  let list = new ListNode(arr[0]);

  let selectedNode = list;
  for (let i = 1; i < arr.length; i++) {
    selectedNode.next = new ListNode(arr[i]);
    selectedNode = selectedNode.next;
  }

  return list;
}

// var addTwoNumbers = function (l1, l2) {
//   let firstNumber = returnNumberFromLinkedList(l1);
//   let secondNumber = returnNumberFromLinkedList(l2);

//   console.log(l1);
//   const sum = firstNumber + secondNumber;

//   console.log(sum);

//   const sumString = Math.floor(sum).toString();

//   const sumArray = sumString.split("");

//   return linkedList(sumArray.reverse());
// };

/**
 * 2nd approach
 * add respective nodes of each linked list and move to next
 * if next is null then value is zero
 * keep track of carryOver
 * End the recursive addition when both next nodes points to null
 */
var addTwoNumbers = function (l1, l2) {
  //initialize the list
  const sumOfFirstNodes = (l1?.val || 0) + (l2?.val || 0);
  let carryOver = Math.floor(sumOfFirstNodes / 10);
  let sumList = new ListNode(sumOfFirstNodes % 10);

  //list pointer
  let currentNode = sumList;

  while (l1 !== null || l2 !== null) {
    //move to next node in the lists added
    l1 = l1?.next || null;
    l2 = l2?.next || null;

    if (l1 === null && l2 === null && carryOver === 0) break;
    const sumOfNextNodes = (l1?.val || 0) + (l2?.val || 0) + carryOver;
    carryOver = Math.floor(sumOfNextNodes / 10);
    currentNode.next = new ListNode(sumOfNextNodes % 10);

    //move to next node in the sum list
    currentNode = currentNode.next;
  }

  return sumList;
};

let output = addTwoNumbers(
  linkedList([9, 9, 9, 9, 9, 9, 9]),
  linkedList([9, 9, 9, 9])
);

while (output !== null) {
  console.log(output.val);
  output = output.next;
}
