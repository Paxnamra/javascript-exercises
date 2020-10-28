/*
Test.assertEquals(removeUrlAnchor('www.codewars.com#about'), 'www.codewars.com');
*/

function removeUrlAnchor(url){
    return url.includes('#') ? url.slice(0, url.search(/#/g)) : url;
}