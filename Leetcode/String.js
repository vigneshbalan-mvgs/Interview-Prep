function minLength(seq) {
  let stack = [];

  for (let char of seq) {
    if (
      stack.length > 0 &&
      ((char === "B" && stack[stack.length - 1] === "A") ||
        (char === "B" && stack[stack.length - 1] === "B"))
    ) {
      stack.pop(); // Remove the 'AB' or 'BB'
    } else {
      stack.push(char); // Push the current character
    }
  }

  return stack.length;
}

// Test case
console.log(minLength("BABBA")); // Output: 1
console.log(minLength("BAA")); // Output: 3
console.log(minLength("BAABABABABABABABA")); // Output: 3
