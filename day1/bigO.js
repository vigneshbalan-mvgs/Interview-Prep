const nemo = ['nemo'];
const everyone = ['dory', 'bruce', 'marlin', 'nemo', 'gill', ' bloat', 'nigel', 'squirt'];
const large = new Array(1000000).fill("nemo");

function findNemo(array) {

    for (let i = 0; i < array.length; i++) {
        if (array[i] === 'nemo') {
            console.log('Found NEMO!');
        }
    }

}

findNemo(nemo); // Invoke the function

findNemo(everyone); // Invoke the function


findNemo(large); // O(n)