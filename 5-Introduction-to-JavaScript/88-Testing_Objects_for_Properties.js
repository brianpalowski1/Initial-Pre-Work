// This section went over a method named .hasOwnProperty() which will return true or fasle


// Setup
var myObj = {
  gift: "pony",
  pet: "kitten",
  bed: "sleigh"
};

function checkObj(checkProp) {
  // Your Code Here
if(myObj.hasOwnProperty(checkProp)){
  return myObj[checkProp];
}else{
  return "Not Found"
}
}

// Test your code by modifying these values
checkObj("gift");
