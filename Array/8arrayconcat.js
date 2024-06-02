let nums = [];
for (let i = 0; i < 1000; i++) {
  nums.push(1);
  nums.push(2);
  nums.push(3);
  nums.push(5);
  nums.push(7);
}

var getConcatenation = function (nums) {
  let ans = new Array(nums.length * 2); // just make the ans array 2x

  for (let i = 0; i < nums.length; i++) { // loop through the array until it ends
    ans[i] = nums[i]; // ans[i] => 1, nums[i] => 1
    ans[i + nums.length] = nums[i]; // ans[i+nums.length] = nums[i] --> just putting everything after the last element of the array
  }
  return ans;
};

console.time("getConcatenation");
console.log(getConcatenation(nums));
console.timeEnd("getConcatenation");

// optimal solution
const getConcatenation2 = function (nums) {
  let n = nums.length;
  let output = [...nums];
  for (let i = 0; i < n; i++) {
    output.push(nums[i]);
  }
  return output;
};

console.time("getConcatenation2");
console.log(getConcatenation2(nums));
console.timeEnd("getConcatenation2");
