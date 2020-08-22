const array1 = ['n', 's', 'n', 's', 'n', 's', 'n', 's', 'n', 's']; //true
const array2 = ['w', 'e', 'w', 'e', 'w', 'e', 'w', 'e', 'w', 'e', 'w', 'e']; //false
const array3 = ['w']; //false
const array4 = ['n', 'n', 'n', 's', 'n', 's', 'n', 's', 'n', 's']; //false

function isValidWalk(walk) {
    let n = 0, w = 0, s = 0, e = 0;

    for (let i of walk) {
        i === 'n' ? n++ : i === 'w' ? w++ : i === 's' ? s++ : i === 'e' ? e++ : 'noMatch';
    }

    return (n === s) && (w === e) && walk.length === 10 ? true : false;
}

console.log(isValidWalk(array1));
console.log(isValidWalk(array2));
console.log(isValidWalk(array3));
console.log(isValidWalk(array4));
