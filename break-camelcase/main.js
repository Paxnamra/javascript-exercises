/* Test cases:
Test.assertEquals(solution('camelCasing'), 'camel Casing', 'Unexpected result')
Test.assertEquals(solution('camelCasingTest'), 'camel Casing Test', 'Unexpected result')
 */

// complete the function
function solution(string) {
    let camel = arrayString(string);

    function arrayString(a) {
        let camelCased = [];
        for (let i = 0; i < a.length; i++) {
            let ch = a.charAt(i);

            if (ch >= 'A' && ch <= 'Z') {
                camelCased.push(" ");
                camelCased.push(ch);
            } else {
                camelCased.push(ch);
            }
        }
        return camelCased;
    }

    return camel.join("");
}

console.log(solution("camelCase"));
console.log(solution("camelCaseCapitalsCapitalizedWordEvenMore"));