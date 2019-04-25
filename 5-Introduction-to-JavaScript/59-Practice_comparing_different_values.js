// This section went over the  the strict equality operator and how it will compare both the data type and value as-is, without converting one type to the other.


// Setup
function compareEquality(a, b) {
  if (a === b) { // Change this line
    return "Equal";
  }
  return "Not Equal";
}

// Change this value to test
compareEquality(10, "10");
