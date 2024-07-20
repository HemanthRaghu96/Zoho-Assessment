class ListNode {
    constructor(val = 0, next = null) {
        this.val = val;
        this.next = next;
    }
}

// 1. Remove Nth Node From End of List
// Problem Statement:
// Given the head of a linked list, remove the nth node from the end of the list and return its head.
// Input Description:
// - head: The head of a singly linked list.
// - n: An integer representing the position from the end of the list.
// Output Description:
// - The head of the modified linked list.

function removeNthFromEnd(head, n) {
    let dummy = new ListNode(0);
    dummy.next = head;  
    let fast = dummy;
    let slow = dummy;
    for (let i = 0; i <= n; i++) {
        fast = fast.next;
    }
    while (fast !== null) {
        fast = fast.next;
        slow = slow.next;
    }
    slow.next = slow.next.next;
    return dummy.next;
}
function arrayToLinkedList(arr) {
    if (arr.length === 0) return null;
    let head = new ListNode(arr[0]);
    let current = head;
    for (let i = 1; i < arr.length; i++) {
        current.next = new ListNode(arr[i]);
        current = current.next;
    }
    return head;
}
function linkedListToArray(head) {
    let arr = [];
    let current = head;
    while (current !== null) {
        arr.push(current.val);
        current = current.next;
    }
    return arr;
}
console.log("1. Remove Nth Node From End of List : ")
let result1 = removeNthFromEnd(arrayToLinkedList([1, 2, 3, 4, 5]), 2);
console.log(linkedListToArray(result1)); 
let result2 = removeNthFromEnd(arrayToLinkedList([1]), 1);
console.log(linkedListToArray(result2)); 
let result3 = removeNthFromEnd(arrayToLinkedList([1, 2]), 1);
console.log(linkedListToArray(result3)); 


// 2. Reverse Linked List
// Problem Statement:
// Reverse a singly linked list.
// Input Description:
// - head: The head of a singly linked list.
// Output Description:
// - The head of the reversed linked list.

function reverseLinkedList(head) {
    let prev = null;
    let current = head;
    while (current !== null) {
        let next = current.next; 
        current.next = prev; 
        prev = current;
        current = next;
    }
    return prev;
}
function arrayToLinkedList(arr) {
    if (arr.length === 0) return null;
    let head = new ListNode(arr[0]);
    let current = head;
    for (let i = 1; i < arr.length; i++) {
        current.next = new ListNode(arr[i]);
        current = current.next;
    }
    return head;
}
function linkedListToArray(head) {
    let arr = [];
    let current = head;
    while (current !== null) {
        arr.push(current.val);
        current = current.next;
    }
    return arr;
}
console.log("2. Reverse Linked List : ")
let reversed1 = reverseLinkedList(arrayToLinkedList([1, 2, 3, 4, 5]));
console.log(linkedListToArray(reversed1)); 
let reversed2 = reverseLinkedList(arrayToLinkedList([1, 2]));
console.log(linkedListToArray(reversed2)); 
let reversed3 = reverseLinkedList(arrayToLinkedList([]));
console.log(linkedListToArray(reversed3)); 


// 3. Merge Two Sorted Lists
// Problem Statement:
// Merge two sorted linked lists and return it as a sorted list. The list should be made by splicing
// together the nodes of the first two lists.
// Input Description:
// - list1: The head of the first sorted linked list.
// - list2: The head of the second sorted linked list.
// Output Description:
// - The head of the merged sorted linked list.

function mergeTwoLists(list1, list2) {
    let dummy = new ListNode();
    let current = dummy;
    let l1 = list1;
    let l2 = list2; 
    while (l1 !== null && l2 !== null) {
        if (l1.val <= l2.val) {
            current.next = l1;
            l1 = l1.next;
        } else {
            current.next = l2;
            l2 = l2.next;
        }
        current = current.next;
    }
    if (l1 !== null) {
        current.next = l1;
    }
    if (l2 !== null) {
        current.next = l2;
    }
    return dummy.next;
}
function arrayToLinkedList(arr) {
    if (arr.length === 0) return null;
    let head = new ListNode(arr[0]);
    let current = head;
    for (let i = 1; i < arr.length; i++) {
        current.next = new ListNode(arr[i]);
        current = current.next;
    }
    return head;
}
function linkedListToArray(head) {
    let arr = [];
    let current = head;
    while (current !== null) {
        arr.push(current.val);
        current = current.next;
    }
    return arr;
}
console.log("3. Merge Two Sorted Lists : ")
let merged = mergeTwoLists(arrayToLinkedList([1, 2, 4]), arrayToLinkedList([1, 3, 4]));
console.log(linkedListToArray(merged)); 
let merged2 = mergeTwoLists( arrayToLinkedList([]),  arrayToLinkedList([]));
console.log(linkedListToArray(merged2)); 
let merged3 = mergeTwoLists( arrayToLinkedList([]),  arrayToLinkedList([0]));
console.log(linkedListToArray(merged3)); 


// 4. Linked List Cycle
// Problem Statement:
// Given head, the head of a linked list, determine if the linked list has a cycle in it.
// Input Description:
// - head: The head of a singly linked list.
// Output Description:
// - true if there is a cycle in the linked list, otherwise false.

function hasCycle(head) {
    if (!head || !head.next) {
        return false; 
    }
    let slow = head;
    let fast = head.next;
    while (slow !== fast) {
        if (!fast || !fast.next) {
            return false; 
        }
        slow = slow.next;
        fast = fast.next.next;
    }
    return true; 
}

let head1 = new ListNode(3);
let node1 = new ListNode(2);
let node2 = new ListNode(0);
let node3 = new ListNode(-4);
head1.next = node1;
node1.next = node2;
node2.next = node3;
node3.next = node1; 
console.log("4. Linked List Cycle : ")
console.log(hasCycle(head1));
let head2 = new ListNode(1);
let node4 = new ListNode(2);
head2.next = node4;
node4.next = head2; 
console.log(hasCycle(head2)); 
let head3 = new ListNode(1);
console.log(hasCycle(head3)); 


// 5. Add Two Numbers
// Problem Statement:
// You are given two non-empty linked lists representing two non-negative integers. The digits are
// stored in reverse order, and each of their nodes contains a single digit. Add the two numbers
// and return the sum as a linked list.
// Input Description:
// - l1: The head of the first linked list.
// - l2: The head of the second linked list.

function addTwoNumbers(l1, l2) {
    let dummy = new ListNode();
    let current = dummy;
    let carry = 0; 
    while (l1 !== null || l2 !== null) {
        let x = l1 !== null ? l1.val : 0;
        let y = l2 !== null ? l2.val : 0;
        let sum = x + y + carry;
        carry = Math.floor(sum / 10);
        current.next = new ListNode(sum % 10);
        current = current.next;   
        if (l1 !== null) l1 = l1.next;
        if (l2 !== null) l2 = l2.next;
    }
    if (carry > 0) {
        current.next = new ListNode(carry);
    }
    return dummy.next;
}
function arrayToLinkedList(arr) {
    if (arr.length === 0) return null;
    let head = new ListNode(arr[0]);
    let current = head;
    for (let i = 1; i < arr.length; i++) {
        current.next = new ListNode(arr[i]);
        current = current.next;
    }
    return head;
}
function linkedListToArray(head) {
    let arr = [];
    let current = head;
    while (current !== null) {
        arr.push(current.val);
        current = current.next;
    }
    return arr;
}
console.log("5. Add Two Numbers : ")
let sum = addTwoNumbers(arrayToLinkedList([2, 4, 3]),  arrayToLinkedList([5, 6, 4]));
console.log(linkedListToArray(sum)); 
let sum2 = addTwoNumbers(arrayToLinkedList([0]), arrayToLinkedList([0]));
console.log(linkedListToArray(sum2)); 
let sum3 = addTwoNumbers(arrayToLinkedList([9, 9, 9, 9, 9, 9, 9]), arrayToLinkedList([9, 9, 9, 9]));
console.log(linkedListToArray(sum3));




