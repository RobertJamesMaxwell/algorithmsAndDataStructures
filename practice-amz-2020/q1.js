// IMPORT LIBRARY PACKAGES NEEDED BY YOUR PROGRAM
// SOME FUNCTIONALITY WITHIN A PACKAGE MAY BE RESTRICTED
// DEFINE ANY FUNCTION NEEDED
// FUNCTION SIGNATURE BEGINS, THIS FUNCTION IS REQUIRED
function subStringsLessKDist(inputString, num) {
  // WRITE YOUR CODE HERE

  let result = [];

  // Step 1: Get all unique subStrings of correct length
  // Example: democracy => democ, emocr, mocra, ocrac, cracy
  // Uses a Set to get unique values, then converts it to array for filtering in step 2
  const numberOfSubstrings = inputString.length - num + 1;
  const uniqueSubstrings = new Set();
  let substring = "";
  for (let i = 0; i < numberOfSubstrings; i++) {
    substring = inputString.substring(i, i + num);
    uniqueSubstrings.add(substring);
  }
  const uniqueSubstringsArray = Array.from(uniqueSubstrings);

  // Step 2: Filter substrings that contain exactly one character repeated once
  // Add to result set
  // Note: We are using the fact that a unique set of all characters from the substring will be exactly
  // 1 unit smaller in length than the substring
  result = uniqueSubstringsArray.filter((substring) => {
    const charArray = substring.split("");
    const uniqueChars = new Set(charArray);
    if (charArray.length - uniqueChars.size === 1) {
      return true;
    } else {
      return false;
    }
  });

  return result;
}
// FUNCTION SIGNATURE ENDS
