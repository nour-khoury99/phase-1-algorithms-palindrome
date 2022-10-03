function isPalindrome(word) {
  // Write your algorithm here
  const len = word.length;

  for(let i =0 ; i<len / 2 ;i ++){
    if(word[i] == word[len -1 -i]){
      return 'not palindrom';
    }else {
      return 'palindrome';
    }
  }
}

isPalindrome('nour')
isPalindrome('mom')

/* 
  Add your pseudocode here

  find the length of the word 

  got through half of the word 
  check if the first and last string are the same 

  return ture if it is a palindrom 
  else false
*/

/*
  Add written explanation of your solution here

  palindrom mean the reading of the worl will not change when you switch letter 
  funciton that will check if it is a plaindrom or not 

  
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
