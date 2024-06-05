function commonChars(words) {
  // Step 1: Create a frequency map for the first word
  const firstWord = words[0];
  const charCount = {};

  // Populate the frequency map with characters from the first word
  for (const char of firstWord) {
    if (charCount[char]) {
      charCount[char]++;
    } else {
      charCount[char] = 1;
    }
  }

  // Step 2: Iterate over the remaining words to update the frequency map
  for (let i = 1; i < words.length; i++) {
    const currentWord = words[i];
    const currentCount = {};

    // Count characters in the current word
    for (const char of currentWord) {
      if (currentCount[char]) {
        currentCount[char]++;
      } else {
        currentCount[char] = 1;
      }
    }

    // Update the main frequency map to keep minimum counts
    for (const char in charCount) {
      if (currentCount[char]) {
        charCount[char] = Math.min(charCount[char], currentCount[char]);
      } else {
        delete charCount[char]; // Remove character if not found in current word
      }
    }
  }

  // Step 3: Build the result array based on the final frequency map
  const result = [];
  for (const char in charCount) {
    for (let i = 0; i < charCount[char]; i++) {
      result.push(char);
    }
  }

  return result;
}

// Example usage:
console.log(commonChars(["bella", "label", "roller"])); // Output: ["e", "l", "l"]
console.log(commonChars(["cool", "lock", "cook"]));     // Output: ["c", "o"]

