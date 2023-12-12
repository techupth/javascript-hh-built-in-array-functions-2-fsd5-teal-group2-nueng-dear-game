function isPalindrome(string) {
  const length = string.length;

  let reversedString = "";

  for (let i = length - 1; i >= 0; i--) {
    reversedString += string[i];
  }
  return string === reversedString;
}

//Example case
console.log(isPalindrome("reviver")); // true
console.log(isPalindrome("บวบ")); // true
console.log(isPalindrome("deliver")); // false
