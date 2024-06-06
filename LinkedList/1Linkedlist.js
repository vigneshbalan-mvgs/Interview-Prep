//const basket = ['apples', 'grapes', "pears"];
//linked list = apples-- > grapes-- > pears
//
//apples
//8947 -- > grapes
//8742 -- > pears

const obj1 = { a: true };
const obj2 = obj1;

obj1.a = 'booya'

delete obj1

obj2.a = 'hello'
console.log(obj2)
//console.log(obj1)
//
//
//
//pointer is just a reference to privious data
