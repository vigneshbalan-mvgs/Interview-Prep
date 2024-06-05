//Google question 
//given an array= [2,5,1,2,3,5,1,2,4]:
//it should be return 2
//
//given an array = [2,1,1,2,3,5,1,2,4]
//It should be return 1
//
//given an array = [2,3,4,5]
//it should return undefined
//

function firstRecurringCharacter(input) {
  for (let i = 0; i < input.length; i++) {
    for (let j = i + 1; j < input.length; j++) {
      if (input[i] === input[j]) {
        return input[i];
      }
    }
  }
  return undefined
}//O(n^2)

function firstRecurringCharacter1(input) {
  let map = {}
  for (let i = 0; i < input.length; i++) {
    if (map[input[i]] !== undefined) {
      return input[i];
    }
    else {
      map[input[i]] = i
    }
  }
  console.log(map)
  return undefined
}

firstRecurringCharacter1([1, 2, 5, 1, 2, 3, 5, 1, 2, 4])
firstRecurringCharacter([1, 2, 5, 1, 2, 3, 5, 1, 2, 4])
