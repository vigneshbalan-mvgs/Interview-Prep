// reference type
//
var object1 = { value: 15 };
var object3 = { value: 10 };
var object2 = object1;

console.log(object1, object2, object3);
object1.value = 10;
console.log(object1, object2, object3);
/*
output will be like object1.value = 15;
object2.value = 15;
object3.value = 10;

if we add any other changes in object1 that also the base object for object2 it going to change the object2
*/

// context vs scope

console.log("context vs scope");

const object4 = {
  a: function () {
    console.log(this);
  },
};

object4.a();

//instantiation

class Player {
  constructor(name, type) {
    console.log("wizard", this);
    this.name = name;
    this.type = type;
  }
  introduce() {
    console.log(`Hi I am ${this.name}, I'm a ${this.type}`);
  }
}

class Wizard extends Player {
  constructor(name, type) {
    super(name, type);
    console.log("wizard ", this);
  }
  play() {
    console.log(`weeee I'm a ${this.type}`);
  }
}

const Wizard1 = new Wizard("mvgs", "Healer");
const Wizard2 = new Wizard("shawn", "Dark Magic");

Wizard2.introduce();
Wizard1.introduce();
