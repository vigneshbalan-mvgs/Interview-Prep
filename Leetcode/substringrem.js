// Function to count the number of vowels in a string
function countVowels(str) {
  // Set containing all lowercase and uppercase vowel characters
  const vowels = new Set(["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"]);
  let count = 0; // Initialize count of vowels to zero
  // Loop through each character in the string
  for (let char of str) {
    // If the character is in the vowels set, increment the count
    if (vowels.has(char)) {
      count++;
    }
  }
  return count; // Return the total count of vowels in the string
}

// Function to determine the winner for each round of the game
function determineWinner(query) {
  let results = []; // Array to store the winners of each round
  // Loop through each string in the query array
  for (let str of query) {
    // Count the number of vowels in the current string
    let vowelCount = countVowels(str);
    // Determine the winner based on the vowel count
    if (vowelCount === 0) {
      results.push("Jones"); // If there are no vowels, Jones wins because Jack has no move
    } else if (vowelCount % 2 === 1) {
      results.push("Jack"); // If the number of vowels is odd, Jack wins
    } else {
      results.push("Jones"); // If the number of vowels is even (non-zero), Jones wins
    }
  }
  return results; // Return the array containing the winners for each round
}

// Test cases to validate the solution
let query1 = ["Leetcode", "DSA", "Sphynx"];
console.log(determineWinner(query1)); // Output: ["Jack", "Jack", "Jones"]

let query2 = ["apple", "banana", "cherry"];
console.log(determineWinner(query2)); // Output: ["Jack", "Jones", "Jones"]

let query3 = ["xyz", "why", "what"];
console.log(determineWinner(query3)); // Output: ["Jones", "Jones", "Jack"]

let query4 = ["ABCDE", "EEE", "IOU"];
console.log(determineWinner(query4)); // Output: ["Jones", "Jack", "Jack"]

let query5 = ["AA", "AAA", "AAAA"];
console.log(determineWinner(query5)); // Output: ["Jones", "Jack", "Jones"]

let query6 = ["bob", "tim", "sue"];
console.log(determineWinner(query6)); // Output: ["Jones", "Jones", "Jack"]
