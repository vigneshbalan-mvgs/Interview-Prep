let user = {
  age: 54,
  name: "kylie",
  magic: true,
  scream: function () {
    console.log("ahhhhh");
  },
};

console.log(user.age); // O(1)
console.log(user.spell = "abra kadabra"); // O(1)
console.log(user); // O(1)
user.scream();

//O(n)

const a = new Map(); // it maintain intersertion order

const b = new Set(); // also a hastables
