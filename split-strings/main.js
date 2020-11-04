/*
const { assert } = require('chai');

describe("Split Strings", () => {
  it("Basic tests", () => {
    assert.deepEqual(solution("abcdef"), ["ab", "cd", "ef"]);
    assert.deepEqual(solution("abcdefg"), ["ab", "cd", "ef", "g_"]);
    assert.deepEqual(solution(""), []);
  });
});
 */

function solution(str) {
    str = (str.length % 2 === 0) ? str : str + "_";
    let charArr = [];

    for (let i = 0, j = 0; i < str.length; i += 2) {
        j = (!(j > str.length)) ? j += 2 : j -= 1;

        let part = str.slice(i, j);
        charArr.push(part);
    }

    return charArr;
}