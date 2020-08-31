/* test cases:
    Test.describe("Sample tests", function() {
    Test.it("Should pass Sample tests", function() {
    Test.assertDeepEquals(arrayDiff([], [4,5]), [], "a was [], b was [4,5]");
    Test.assertDeepEquals(arrayDiff([3,4], [3]), [4], "a was [3,4], b was [3]");
    Test.assertDeepEquals(arrayDiff([1,8,2], []), [1,8,2], "a was [1,8,2], b was []");
  });
});
 */

let arr3 = ['2', '1', '1', '2', '2', '2', '3', '2'];
let arr4 = ['1', '2'];

function arrayDiff(a, b) {
    let cleanedArray = [];

    function isInArrayB(elA, arrB) {
        return arrB.includes(elA);
    }

    function filterArrA(inputArray) {
        inputArray.forEach(elementA => {
            if (isInArrayB(elementA, b) === false) {
                cleanedArray.push(elementA);
            }
        });
        return cleanedArray;
    }

    return filterArrA(a);
}

console.log(arrayDiff(arr3, arr4));

