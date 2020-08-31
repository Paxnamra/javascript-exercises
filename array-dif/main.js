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
    return a.filter(e => !b.includes(e));
}

console.log(arrayDiff(arr3, arr4));

