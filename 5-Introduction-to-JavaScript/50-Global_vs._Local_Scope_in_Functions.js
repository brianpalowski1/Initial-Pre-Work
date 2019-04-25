// This is an example of local scope and how in this instance local scope in the functon takes precedence over global scope

// Setup
var outerWear = "T-Shirt";

function myOutfit() {
  // Only change code below this line

  var outerWear="sweater";

  // Only change code above this line
  return outerWear;
}

myOutfit();
