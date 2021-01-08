/*
Test.assertEquals(generateHashtag(""), false, "Expected an empty string to return false")
Test.assertEquals(generateHashtag(" ".repeat(200)), false, "Still an empty string")
Test.assertEquals(generateHashtag("Do We have A Hashtag"), "#DoWeHaveAHashtag", "Expected a Hashtag (#) at the beginning.")
Test.assertEquals(generateHashtag("Codewars"), "#Codewars", "Should handle a single word.")
Test.assertEquals(generateHashtag("Codewars Is Nice"), "#CodewarsIsNice", "Should remove spaces.")
Test.assertEquals(generateHashtag("Codewars is nice"), "#CodewarsIsNice", "Should capitalize first letters of words.")
Test.assertEquals(generateHashtag("code" + " ".repeat(140) + "wars"), "#CodeWars")
Test.assertEquals(generateHashtag("Looooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooong Cat"), false, "Should return false if the final word is longer than 140 chars.")
Test.assertEquals(generateHashtag("a".repeat(139)), "#A" + "a".repeat(138), "Should work")
Test.assertEquals(generateHashtag("a".repeat(140)), false, "Too long")
*/

function generateHashtag(str) {
    let sample = noSpacesLength(str);

    let arrayed = (sample.length === 0 || sample.length > 140) ? false : str.split(" ");

    for (let i = 0; i < arrayed.length; i++) {
        let temp = arrayed[i].charAt(0).toUpperCase() + arrayed[i].slice(1).toLowerCase();
    }


    return arrayed;
}


function noSpacesLength(str) {
    const pattern = /\S/g
    return [...str.matchAll(pattern)];
}

console.log(generateHashtag(""));
console.log(generateHashtag(" ".repeat(200)));
console.log(generateHashtag(" ".repeat(5) + "abcd"));
console.log(generateHashtag("Codewars Is Nice"));

console.log(generateHashtag("trololololo ooo oool ll"))
console.log(generateHashtag("Looooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooong Cat"));
console.log(generateHashtag("a".repeat(140)));