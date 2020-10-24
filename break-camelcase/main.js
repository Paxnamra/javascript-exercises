/* Test cases:
Test.assertEquals(solution('camelCasing'), 'camel Casing', 'Unexpected result')
Test.assertEquals(solution('camelCasingTest'), 'camel Casing Test', 'Unexpected result')
 */

// complete the function
function solution(string) {
    return string.replace(/[A-Z]/g, val => ' ' + val);
}

console.log(solution("camelCase"));
console.log(solution("camelCaseCapitalsCapitalizedWordEvenMore"));