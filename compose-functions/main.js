var compose = function(num, ...combinators) {
    return (combinators === []) ? num : combinators.reduce((acc, func) => func(acc), num);
}

var doubleTheValue = function(val) { return val * 2; }
var addOneToTheValue = function(val) { return val + 1; }

console.log(compose(5, doubleTheValue)); // should === 10
console.log(compose(5, doubleTheValue, addOneToTheValue)); // should === 11