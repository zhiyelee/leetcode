/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function(nums) {
  let swapped = 0;
  for (let index = nums.length - 1; index > 0; index --) {
    if (nums[index] > nums [index - 1]) {
      // find the closest number and swap, then revese array
      const closetIndex = findClosestNumberIndex(nums, index - 1);
      swapIndex(nums, index - 1, closetIndex);
      reverseArray(nums, index)
      swapped = 1;
      break;
    }
  }

  if (!swapped) reverseArray(nums, 0)
};

// find the closest larger number index
function findClosestNumberIndex(nums, index) {
  const value = nums[index];
  let swapIndex = index + 1;
  for (let i = nums.length - 1; i > index; i --) {
    if (nums[i] > value) {
      swapIndex = i;
      break;
    }
  }

  return swapIndex;
}

function swapIndex(nums, i, j) {
  const value = nums[i];
  nums[i] = nums[j];
  nums[j] = value;
}

// in-place reverse array
function reverseArray(nums, index) {
  const len = nums.length;
  for (let i = index, j = len - 1; i < j; ) {
    swapIndex(nums, i, j);
    i ++;
    j --;
  }
}

const deepEq = require('assert').deepStrictEqual;

const inputs = [
  [1, 4, 5, 2, 1],
  [1, 3, 2],
  [3, 2, 1],
  [1, 1, 5],
  [1]
];

const expects = [
  [1, 5, 1, 2, 4],
  [2, 1, 3],
  [1, 2, 3],
  [1, 5, 1],
  [1]
];

inputs.forEach((input, index) => {
  nextPermutation(input);
  deepEq(input, expects[index])
})
