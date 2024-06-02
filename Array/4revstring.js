// create a function that reverse a string:
// 'hi my name is Andrei' should be:
// 'ierdnA si eman vM iH'
//

function reverse(str) {
  // check input
  if (!str || str.length < 2 || typeof str != "string") {
    return "hmm that is not good ";
  }

  // first make it a array
  const backwards = [];
  const totalItems = str.length - 1;
  for (let i = totalItems; i >= 0; i--) {
    backwards.push(str[i]);
    // we can use split()
  }
  console.log(backwards);
  return backwards.join("");
  //return backwards.toString();
}
function reverse2(str) {
  return str.split("").reverse().join("");
}

const reverse3 = (str) => [...str].reverse().join("");

reverse("Hello my name is vignesh balan mvgs");
reverse2("Hello my name is vignesh balan mvgs");
reverse3("Hello my name is vignesh balan mvgs");
