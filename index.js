function isPalindrome(word) {
  // Write your algorithm here
  let reverse = word.split("").reverse().join("")
  if( reverse === word)
    return true
  else 
    return false
}

/* 
  Add your pseudocode here
  create new variable that is the reverse of the string
    if word is equal to reverse word
      return true
    else 
      return false
  */

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
