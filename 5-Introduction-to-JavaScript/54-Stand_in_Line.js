// In this section I had to add an element to end of an array and remove the first element in a array the function needs to return the elemenet that was removed.


function nextInLine(arr, item) {
  // Your code here

  arr.push(item);
  var test = arr.shift();
  return test;  // Change this line
}

// Test Setup
var testArr = [1,2,3,4,5];

// Display Code
console.log("Before: " + JSON.stringify(testArr));
console.log(nextInLine(testArr, 6)); // Modify this line to test
console.log("After: " + JSON.stringify(testArr));
