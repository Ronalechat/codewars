// GET THE MIDDLE CHARACTER

/*
Instructions: //////////////////////////////////////////////////////
You are going to be given a word. Your job is to return the middle character of the word. If the word's length is odd, return the middle character. If the word's length is even, return the middle 2 characters.

Examples:

Kata.getMiddle("test") should return "es"

Kata.getMiddle("testing") should return "t"

Kata.getMiddle("middle") should return "dd"

Kata.getMiddle("A") should return "A"
Input

A word (string) of length 0 < str < 1000

Output

The middle character(s) of the word represented as a string.
*/

// SOLUTION: ///////////////////////////////////////////////////

function getMiddle(s) {
  var wordLength = s.length

  if (wordLength%2 === 0) {
    //evens -- Divide by 2, minus 1
    var evenMidPoint = ((wordLength / 2) - 1)
    return s.substr(evenMidPoint, 2)
  } else {
    var oddMidPoint = Math.floor(wordLength/2);
    return s.charAt(oddMidPoint)
  }
};

// Best practice, according to Code wars:
/*
function getMiddle(s)
{
  return s.substr(Math.ceil(s.length / 2 - 1), s.length % 2 === 0 ? 2 : 1);
}
*/


// Example tests:////////////////////////////////////////////////
// Test.describe("GetMiddle", function() {
//   Test.it("Tests", function() {
//     Test.assertEquals(getMiddle("test"),"es");
//     Test.assertEquals(getMiddle("testing"),"t");
//     Test.assertEquals(getMiddle("middle"),"dd");
//     Test.assertEquals(getMiddle("A"),"A");
//   });
// });
