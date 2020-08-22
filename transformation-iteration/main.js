/* 
example test cases:
Test.assertSimilar(transform('car','see'),["car", "sar", "ser", "see"]);
Test.assertSimilar(transform('floor','brake'),["floor", "bloor", "broor", "braor", "brakr", "brake"]);
Test.assertSimilar(transform('kata','math'),["kata", "mata", "math"]);
Test.assertSimilar(transform('deer','beer'),['deer','beer']);
Test.assertSimilar(transform('a fall to the floor', 'braking the door in'),['a fall to the floor','b fall to the floor','brfall to the floor','braall to the floor','brakll to the floor','brakil to the floor','brakin to the floor','brakingto the floor','braking o the floor','braking t the floor','braking ththe floor','braking thehe floor','braking the e floor','braking the d floor','braking the dofloor','braking the dooloor','braking the dooroor','braking the door or','braking the door ir','braking the door in']);
Test.assertSimilar(transform('Codewars','programs'),["Codewars", "podewars", "prdewars", "proewars", "progwars", "progrars", "programs"]);
*/

const pair1a = 'car', pair1b = 'see';
const pair2a = 'floor', pair2b = 'brake';
const pair3a = 'a fall to the floor', pair3b = 'braking the door in';
const pair4a = 'Codewars', pair4b = 'programs';
const pair5a = 'kata', pair5b = 'math';

function transform(source, target) {

    let iterationsArray = [source];
    let chars = source.split('');

    for (let i = 0; i < source.length; i++) {

        if (source[i] !== target[i]) {

            chars[i] = target[i];
            iterationsArray.push(chars.join(''));
        }
    }
    return iterationsArray;
}

console.log(transform(pair3a, pair3b));



