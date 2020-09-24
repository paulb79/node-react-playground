// Arrow functions ES6

var names = ['Paul', 'Miah', 'Eddie', 'Sarah'];

names.forEach(function (name) {
    console.log('foreach', name);
});

names.forEach((name) => {
    console.log('arrowfunc', name);
})

// reduces code bloat
names.forEach((name) => console.log(name));

var returnMe = (name) => name + '!';
console.log(returnMe('Paul'));

function add(a, b) {
    return a + b;
}

var addStatement = (a, b) => {
    return a + b;
}

console.log(addStatement(5, 7));
var addExpression = (a, b) => a + b;
console.log(addExpression(5, 7));

