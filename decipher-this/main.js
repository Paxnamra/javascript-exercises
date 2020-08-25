/**
 * Test.assertEquals(decipherThis('72eva 97 103o 97t 116sih 97dn 115ee 104wo 121uo 100o'), 'Have a go at this and see how you do');
 */

function decipherThis(str) {
    let lettersArray = [];
    let num = '';

    str.split('').forEach(element => {
        if (!isNaN(Number(element)) && element !== ' ') {
            num += element;
        } else {
            if (num !== '') {
                lettersArray.push(String.fromCharCode(num));
                num = '';
            }
            lettersArray.push(element);
        }
    });

    let swapString = [];

    lettersArray.join('').split(' ').forEach(e => {
        if (e.length > 2) {
            let temp = e.split('');

            temp[1] = e[e.length - 1];
            temp[e.length - 1] = e[1];

            swapString.push(temp.join(''));
        } else {
            swapString.push(e);
        }

    });
    return swapString.join(' ');
};

const integerToChar = function (str) {
    let num = '';
    for (i = 0; i < str.length; i++) {
        console.log(num);
        (s === number) ? num += num : '';
    }
    return undefined;
};

/*
const integerToCharRR = stringInput => stringInput.split('').reduce((acc, nextValue) => {
    //s.forEach(a => console.log(a));

    let someValue = '';
/*
    if (!isNaN(Number(nextValue))) {
        someValue += nextValue;
    } else {
        someValue = '';
    }

    while (!isNaN(Number(nextValue))) {
        someValue += nextValue;
    }

    //acc.push(nextValue);

    //return acc;
}, []);
*/

//return aarr.forEach(a => console.log(a));

//const forEachResult = stringInput => stringInput.split('').forEach()


const emptyArr = undefined;
const inputString = '72eva 97 103o 97t 116sih 97dn 115ee 104wo 121uo 100o'; //Have a go at this and see how you do
console.log(decipherThis(inputString));
//console.log(decipherThis(emptyArr));
