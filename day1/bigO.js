const nemo = ['nemo'];
const everyone = ['dory', 'bruce', 'marlin', 'nemo', 'gill', ' bloat', 'nigel', 'squirt'];
const large = new Array(1000000).fill("nemo");

function findNemo(array) {
    let t0 = performance.now(); // Start time before the loop

    for (let i = 0; i < array.length; i++) {
        if (array[i] === 'nemo') {
            console.log('Found NEMO!');
        }
    }

    let t1 = performance.now(); // End time after the loop
    console.log('Call to find Nemo took ' + (t1 - t0) + ' milliseconds');
}

findNemo(nemo); // Invoke the function

findNemo(everyone); // Invoke the function


findNemo(large); // Invoke the function