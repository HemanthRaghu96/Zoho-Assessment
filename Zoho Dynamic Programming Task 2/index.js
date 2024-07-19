// Question 1: Two Sum
// Given an array of integers nums and an integer target, return indices of the two numbers such that they
// add up to target.
// You may assume that each input would have exactly one solution, and you may not use the same
// element twice.
// You can return the answer in any order.

const twoSum = (nums, target) => {
  let numMap = {};
  for (let i = 0; i < nums.length; i++) {
    let complement = target - nums[i];
    if (numMap.hasOwnProperty(complement)) {
      return [numMap[complement], i];
    }
    numMap[nums[i]] = i;
  }
  return [];
};
console.log("Two Sum : ");
console.log(twoSum([2, 7, 11, 15], 9));

// Question 2: Group Anagrams
// Given an array of strings strs, group the anagrams together. You can return the answer in any order.
// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase,
// typically using all the original letters exactly once.

function groupAnagrams(strs) {
  let anagrams = {};
  for (let str of strs) {
    let sortedStr = str.split("").sort().join("");
    if (anagrams.hasOwnProperty(sortedStr)) {
      anagrams[sortedStr].push(str);
    } else {
      anagrams[sortedStr] = [str];
    }
  }
  return Object.values(anagrams);
}
let strs = ["eat", "tea", "tan", "ate", "nat", "bat"];
console.log("Group Anagrams : ");
console.log(groupAnagrams(strs));

// Question 3: Longest Substring Without Repeating Characters
// Given a string s, find the length of the longest substring without repeating characters.

function lengthOfLongestSubstring(s) {
  let charMap = new Map();
  let maxLength = 0;
  let left = 0;
  for (let right = 0; right < s.length; right++) {
    let currentChar = s[right];
    if (charMap.has(currentChar) && charMap.get(currentChar) >= left) {
      left = charMap.get(currentChar) + 1;
    }
    charMap.set(currentChar, right);
    maxLength = Math.max(maxLength, right - left + 1);
  }
  return maxLength;
}
console.log("Longest Substring Without Repeating Characters : ");
console.log(lengthOfLongestSubstring("abcabcbb"));

// Question 4: Top K Frequent Elements
// Given an integer array nums and an integer k, return the k most frequent elements. You may return the
// answer in any order.

const frequentElement = (arr, k) => {
  let obj = {};
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    let key = arr[i];
    if (obj[key] === undefined) {
      obj[key] = 1;
    } else {
      obj[key]++;
    }
  }
  let key = Object.keys(obj);
  for (let i = 0; i < key.length; i++) {
    if (obj[key[i]] >= 2) {
      result.push(i);
    }
  }
  return result;
};
console.log("Top K Frequent Elements : ");
console.log(frequentElement([1, 1, 1, 2, 2, 3], 2));

// Question 5: Valid Anagram
// Given two strings s and t, return true if t is an anagram of s, and false otherwise.

const anagram = (s, t) => {
  if (s.length !== t.length) {
    return false;
  }
  const countS = new Array(26).fill(0);
  const countT = new Array(26).fill(0);
  for (let i = 0; i < s.length; i++) {
    countS[s.charCodeAt(i) - "a".charCodeAt(0)]++;
    countT[t.charCodeAt(i) - "a".charCodeAt(0)]++;
  }
  for (let i = 0; i < 26; i++) {
    if (countS[i] !== countT[i]) {
      return false;
    }
  }
  return true;
};
console.log("Valid Anagram");
console.log(anagram("anagram", "nagaram"));
console.log(anagram("rat", "car"));
