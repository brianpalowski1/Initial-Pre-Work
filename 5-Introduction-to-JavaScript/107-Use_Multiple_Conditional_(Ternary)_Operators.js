// you can chain a multiple conditionals together


function checkSign(num) {
  return num > 0 ? "positive" : num < 0 ? "negative": num === 0 ? "zero": "";
}

checkSign(10);
