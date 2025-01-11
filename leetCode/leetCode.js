// // Function to find two numbers that add up to a target value
// var twoSum = function (nums, target) {
//   // Create a map to store the numbers and their indices
//   let map = new Map();

//   // Iterate through the array of numbers
//   for (let i = 0; i < nums.length; i++) {
//     // Calculate the complement of the current number
//     let complement = target - nums[i];

//     // Check if the complement is already in the map
//     if (map.has(complement)) {
//       // If found, log and return the indices of the two numbers
//       console.log([map.get(complement), i]);
//       return [map.get(complement), i];
//     }

//     // If not found, add the current number and its index to the map
//     map.set(nums[i], i);
//   }
// };

// twoSum([2, 7, 11, 15], 9);

let arr = [2, 7, 11, 15];

console.log(arr[2]);

// for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i]);
// }
