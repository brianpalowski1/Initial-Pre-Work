// This section went over the inequality operator and how it means "Not Equal" and returns false where equality would return true and vice versa. the inequality operator will convert data types of values while comparing.

// Setup
function testNotEqual(val) {
  if (val != 99) { // Change this line
    return "Not Equal";
  }
  return "Equal";
}

// Change this value to test
testNotEqual(10);
