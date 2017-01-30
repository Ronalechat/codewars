// Instructions: ///////////////////////////////////////

/*
Create a function named divisors that takes an integer and returns an array with all of the integer's divisors(except for 1 and the number itself). If the number is prime return the string '(integer) is prime' (use Either String a in Haskell).

Example:

divisors(12); //should return [2,3,4,6]
divisors(25); //should return [5]
divisors(13); //should return "13 is prime"
You can assume that you will only get positive integers as inputs.
*/

// Solution: /////////////////////////////////////////////////

function divisors(integer) {
  var divisorArray = [];
  for (i = 2; i < integer; i++){
    if (integer % i === 0) {
      divisorArray.push(i)
    }
  }

  if (divisorArray.length > 0) {
    return divisorArray
  } else {
   return integer + " is prime"
  }
};

// Best practice""////////////////////////////////////////////////
/*
function divisors(integer) {
  var res = []
  for (var i = 2; i <= Math.floor(integer / 2); ++i) if (integer % i == 0) res.push(i);
  return res.length ? res : integer + ' is prime'
};
*/
