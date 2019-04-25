// This section went over global scope which  defined outside of a function block have Global scope 

// Declare your variable here
var myGlobal = 10;

function fun1() {
  // Assign 5 to oopsGlobal Here
  oopsGlobal = 5
}

// Only change code above this line
function fun2() {
  var output = "";
  if (typeof myGlobal != "undefined") {
    output += "myGlobal: " + myGlobal;
  }
  if (typeof oopsGlobal != "undefined") {
    output += " oopsGlobal: " + oopsGlobal;
  }
  console.log(output);
}
