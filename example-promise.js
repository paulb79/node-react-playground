// Callbacks; nb how both err and success are shown
function getTempCallback(location, callback) {
    callback(undefined, 78);
    callback('City not found');
}

getTempCallback('London', function(err, temp) {
    if(err) {
        console.log('error', err);
    } else {
        console.log('success', temp);
    }
});

// Promises; nb the correct behaviour occurs
function getTempPromise(location) {
    return new Promise(function (resolve, reject) {
        resolve(78);
        reject('City not found');
    });
}

getTempPromise('London').then(function(temp) {
    console.log('promise success', temp);
}, function(err) {
    console.log('promise error', err);
})

function addPromise(a, b) {
    return new Promise(function (resolve, reject) {
        if ((typeof a === "number") && (typeof b === "number")) {
            resolve(a+b)
        } else {
            reject("Please supply numbers")
        }
    })
}

addPromise(5, 6).then(function (result){
    console.log('Result: ', result);
}, function (err) {
    console.log('Error', err)
})

addPromise("paul", 6).then(function (result){
    console.log('Result: ', result);
}, function (err) {
    console.log('Error', err)
})
