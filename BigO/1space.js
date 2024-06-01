function booo(n) {
  for (let i = 0; i < n.length; i++) {
    console.log("boooooooo!");
  }
}

booo([1, 2, 3, 4, 5]); // O(1)

function arrayOfHintTimes(n) {
  const hiArray = [];
  for (let i = 0; i < n; i++) {
    hiArray[i] = "hi";
  }
  return hiArray;
}

console.log(arrayOfHintTimes(6)); // O(n)

