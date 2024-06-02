const strings = ["a", "b", "c", "d", "e"];
//4*4 = 16 bytes  of storage

console.log(strings[2]);

//push();
strings.push("f"); //O(1)

console.log(strings);

//pop
strings.pop();
strings.pop(); //O(1)

//unshift
strings.unshift("x"); //add at the starting "a" ==> "x"
//O(n)

//splice();
strings.splice(2, 0, "alien"); //O(n/2) ==> O(n)

console.log(strings);
