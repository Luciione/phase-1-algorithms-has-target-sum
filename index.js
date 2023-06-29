function hasTargetSum(array, target) {
  for (let i = 0; i < array.length - 1; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] + array[j] === target) {
        return true;
      }
    }
  }
  return false;
}

/* 
  hasTargetSum problem has a time complexity of O(n^2), where n is the length of the input array.
*/

/* 
  function hasTargetSum(array, target):
  for i from 0 to length of array - 1:
    for j from i + 1 to length of array:
      if array[i] + array[j] equals target:
        return true
  return false

*/

/*
  The function hasTargetSum takes an array of integers and a target integer as arguments. 
  It then checks if there is a pair of numbers in the array that add up to the target integer. 
  It does this by iterating through each element in the array and then checking each subsequent element to see if their sum equals the target. 
  If a matching pair is found, the function returns true. If no matching pair is found, the function returns false.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
