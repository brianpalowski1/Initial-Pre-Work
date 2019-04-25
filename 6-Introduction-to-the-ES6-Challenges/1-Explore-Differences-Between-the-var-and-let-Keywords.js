//let was introduced in ES6 to solve this potential issue with the var keyword.ariables with the var

let catName;
let quote;
function catTalk() {
  "use strict";

  catName = "Oliver";
  quote = catName + " says Meow!";

}
catTalk();
