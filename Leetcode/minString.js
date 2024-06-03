// Function to count the frequency of characters in a string
function countCharacters(str) {
  let charCount = new Map(); // Map to store character frequencies
  // Loop through each character in the string
  for (let char of str) {
    // Increment the count of the character in the map
    charCount.set(char, (charCount.get(char) || 0) + 1);
  }
  return charCount; // Return the map containing character frequencies
}

// Function to determine the minimum number of operations to make two strings anagrams
function minOperations(s, t) {
  let sCharCount = countCharacters(s); // Count character frequencies in string s
  let tCharCount = countCharacters(t); // Count character frequencies in string t

  let operations = 0; // Initialize the number of operations to zero

  // Loop through each character in the map for string s
  sCharCount.forEach((count, char) => {
    // Calculate the absolute difference in frequencies between s and t
    let diff = Math.abs((tCharCount.get(char) || 0) - count);
    operations += diff; // Add the difference to the total number of operations
  });

  // Add the frequencies of characters in t that are not present in s
  tCharCount.forEach((count, char) => {
    if (!sCharCount.has(char)) {
      operations += count;
    }
  });

  return operations; // Return the total number of operations
}

// Test cases to validate the solution
let s1 = "abc", t1 = "bcd";
console.log(minOperations(s1, t1)); // Output: 2

let s2 = "apple", t2 = "pear";
console.log(minOperations(s2, t2)); // Output: 4
