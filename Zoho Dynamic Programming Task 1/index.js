// Question 1
// You are given an integer array coins representing coins of different denominations and an integer
// amount representing a total amount of money.
// Return the fewest number of coins that you need to make up that amount. If that amount of money
// cannot be made up by any combination of the coins, return -1.
// You may assume that you have an infinite number of each kind of coin.


function coinChange(coins, amount) {
  let dp = new Array(amount + 1).fill(Infinity);
  dp[0] = 0;
  for (let coin of coins) {
    for (let i = coin; i <= amount; i++) {
      dp[i] = Math.min(dp[i], dp[i - coin] + 1);
    }
  }
  return dp[amount] === Infinity ? -1 : dp[amount];
}
console.log("coinChange : ")
console.log(coinChange([1, 2, 5], 11));
console.log(coinChange([2], 3));
console.log(coinChange([1], 0));

// Question 2
// Given a string `s`, return the longest palindromic substring in `s`


function longestPalindrome(s) {
  if (s.length === 0) return "";
  let start = 0;
  let end = 0;
  function expandAroundCenter(s, left, right) {
    while (left >= 0 && right < s.length && s[left] === s[right]) {
      left--;
      right++;
    }
    return right - left - 1;
  }
  for (let i = 0; i < s.length; i++) {
    let len1 = expandAroundCenter(s, i, i);
    let len2 = expandAroundCenter(s, i, i + 1);
    let len = Math.max(len1, len2);
    if (len > end - start) {
      start = i - Math.floor((len - 1) / 2);
      end = i + Math.floor(len / 2);
    }
  }
  return s.substring(start, end + 1);
}
console.log("longestPalindrome : ")
console.log(longestPalindrome("babad"));
console.log(longestPalindrome("cbbd"));
console.log(longestPalindrome("a"));
console.log(longestPalindrome("ac"));


// Question 3
// For a string sequence, a string word is k-repeating if word concatenated k times is a substring of
// sequence. The word's maximum k-repeating value is the highest value k where word is k-repeating
// in sequence. If word is not a substring of sequence, word's maximum k-repeating value is 0.
// Given strings sequence and word, return the maximum k-repeating value of word in sequence.


function maxRepeating(sequence, word) {
  const sequenceLength = sequence.length;
  const wordLength = word.length;
  if (wordLength > sequenceLength) {
    return 0;
  }
  let max = 0;
  for (let i = 1; i <= Math.floor(sequenceLength / wordLength); i++) {
    const test = word.repeat(i);
    if (sequence.indexOf(test) !== -1) {
      max = i;
    }
  }
  return max;
}
console.log("maxRepeating : ")
console.log(maxRepeating("ababc", "ab"));
console.log(maxRepeating("ababc", "ba"));
console.log(maxRepeating("ababc", "ac"));


// Question 4
// Given an integer array `nums`, find the subarray with the largest sum, and return its sum.


function maxSubArray(nums) {
  let maxSum = nums[0];
  let currentSum = nums[0];
  for (let i = 1; i < nums.length; i++) {
    currentSum = Math.max(nums[i], currentSum + nums[i]);
    maxSum = Math.max(maxSum, currentSum);
  }
  return maxSum;
}
console.log("longestPalindrome : ")
console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
console.log(maxSubArray([1]));
console.log(maxSubArray([5, 4, -1, 7, 8]));


// Question 5
// You are climbing a staircase. It takes `n` steps to reach the top.
// Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?


var climbStairs = function (n) {
  let result = [1, 1];
  if (n === 0 || n === 1) {
    return 1;
  }
  for (let i = 2; i <= n; i++) {
    result[i] = result[i - 1] + result[i - 2];
  }
  return result[n];
};
console.log("climbStairs : ")
console.log(climbStairs(2));
console.log(climbStairs(2));
console.log(climbStairs(3));
console.log(climbStairs(4));
console.log(climbStairs(5));
