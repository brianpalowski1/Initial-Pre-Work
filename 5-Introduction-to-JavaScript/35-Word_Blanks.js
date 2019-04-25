// Mad Libs game i created a var with a string. Then cocatenated that string and passed in the arguments




function wordBlanks(myNoun, myAdjective, myVerb, myAdverb) {
  // Your code below this line
  var result = "";

    result += "a "+ myNoun+ " "+myAdjective+ " c "+ myVerb+ " "+ myAdverb+ ".";
  // Your code above this line
  return result;
}

// Change the words here to test your function
wordBlanks("dog", "big", "ran", "quickly");
