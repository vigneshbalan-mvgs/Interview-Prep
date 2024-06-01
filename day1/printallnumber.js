function printall(numbers){
    console.log('there are the numbers');
   numbers.forEach(function(number) {
        console.log(number);
    });
    
    console.log('all these are their sums: ');
    numbers.forEach(function(firstNumber){
        numbers.forEach(function(secondNumber){
            console.log(firstNumber + secondNumber);
        });
    });
}

printall([1,2,3,4,5])

//forth rules
//O(x^2+3x+100+x/2)
//O(x^2+x+x)
//O(x^2)
//if it have 3 nested loops
//O(n^3)
