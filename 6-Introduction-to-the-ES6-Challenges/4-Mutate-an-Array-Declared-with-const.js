// When declaring an obj with const you can change its values by selecting their properties and assigning their value

const s = [5, 7, 2];
function editInPlace() {
  "use strict";
  // change code below this line
s[0]= 2;
s[1]=5;
s[2]=7;
  // s = [2, 5, 7]; <- this is invalid

  // change code above this line
}
editInPlace();
