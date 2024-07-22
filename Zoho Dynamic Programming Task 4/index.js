// 1. Evaluate Reverse Polish Notation
// Problem Description:
// Evaluate the value of an arithmetic expression in Reverse Polish Notation (RPN). Valid operators are +, -, *, and /. Each
// operand may be an integer or another expression. Note that division between two integers should truncate toward zero.
// Input:
// - An array of strings tokens where tokens[i] is a valid operand or operator.
// Output:
// - Return the value of the arithmetic expression as an integer.

function evalRPN(tokens) {
  const stack = [];
  const operators = new Set(["+", "-", "*", "/"]);
  for (let token of tokens) {
    if (operators.has(token)) {
      let b = stack.pop();
      let a = stack.pop();

      if (token === "+") {
        stack.push(a + b);
      } else if (token === "-") {
        stack.push(a - b);
      } else if (token === "*") {
        stack.push(a * b);
      } else if (token === "/") {
        stack.push(parseInt(a / b));
      }
    } else {
      stack.push(parseInt(token));
    }
  }
  return stack.pop();
}
console.log("Evaluate Reverse Polish Notation : ");
console.log(evalRPN(["2", "1", "+", "3", "*"]));
console.log(evalRPN(["4", "13", "5", "/", "+"]));
console.log(
  evalRPN(["10", "6", "9", "3", "+", "-11", "*", "/", "*", "17", "+", "5", "+"])
);

// 2. Min Stack
// Problem Description:
// Design a stack that supports push, pop, top, and retrieving the minimum element in constant time.
// Implement the MinStack class:
// - MinStack(): initializes the stack object.
// - void push(int val): pushes the element val onto the stack.
// - void pop(): removes the element on the top of the stack.
// - int top(): gets the top element of the stack.
// - int getMin(): retrieves the minimum element in the stack.

class MinStack {
  constructor() {
    this.stack = [];
    this.minStack = [];
  }
  push(val) {
    this.stack.push(val);
    if (this.minStack.length === 0 || val <= this.getMin()) {
      this.minStack.push(val);
    }
  }
  pop() {
    const popped = this.stack.pop();
    if (popped === this.getMin()) {
      this.minStack.pop();
    }
  }
  top() {
    return this.stack[this.stack.length - 1];
  }
  getMin() {
    return this.minStack[this.minStack.length - 1];
  }
}
console.log("Min Stack : ");
const minStack = new MinStack();
minStack.push(-2);
minStack.push(0);
minStack.push(-3);
console.log(minStack.getMin());
minStack.pop();
console.log(minStack.top());
console.log(minStack.getMin());

// 3. Daily Temperatures
// Problem Description:
// Given a list of daily temperatures T, return a list such that, for each day in the input, tells you how many days you would
// have to wait until a warmer temperature. If there is no future day for which this is possible, put 0 instead.
// Input:
// - An array of integers T representing the daily temperatures.
// Output:
// - Return an array of integers, where the ith element is the number of days you have to wait until a warmer temperature.
// If there is no future day for which this is possible, put 0 instead.

function dailyTemperatures(T) {
  const n = T.length;
  const result = new Array(n).fill(0);
  const stack = [];

  for (let i = 0; i < n; i++) {
    while (stack.length > 0 && T[i] > T[stack[stack.length - 1]]) {
      let index = stack.pop();
      result[index] = i - index;
    }
    stack.push(i);
  }

  return result;
}
console.log("Daily Temperatures : ");
console.log(dailyTemperatures([73, 74, 75, 71, 69, 72, 76, 73]));
