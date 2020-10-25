/*
Test.assertEquals(cleanString('abc#d##c'), "ac")
Test.assertEquals(cleanString('abc####d##c#'), "" )
  Test.assertEquals(clean_string('831####jns###s#cas/*####-5##s##6+yqw87e##hfklsd-=-28##fds##'), "6+yqw8hfklsd-=-f")
  Test.assertEquals(clean_string('######831###dhkj####jd#dsfsdnjkf###d####dasns'), "jdsfdasns")
  Test.assertEquals(clean_string(''), "")
  Test.assertEquals(clean_string('#######'), "")
  Test.assertEquals(clean_string('####gfdsgf##hhs#dg####fjhsd###dbs########afns#######sdanfl##db#####s#a'), "sa")
  Test.assertEquals(clean_string('#hskjdf#gd'), "hskjdgd")
  Test.assertEquals(clean_string('hsk48hjjdfgd'), "hsk48hjjdfgd")
  Test.assertEquals(clean_string('fjnwui#NI#(*N#ION#Onfjen################Io4f'), "Io4f")
  Test.assertEquals(clean_string('####6d87hbaskjdnf###$$%W#$@#$2332fr#f'), "6d87hbaskj$$%$$2332ff")
  Test.assertEquals(clean_string('#9#9#9#9o#9#9#9#Oooooo#OOOooO#OO######'), "9OooooO")
  Test.assertEquals(clean_string('0###0###0'), "0")
  Test.assertEquals(clean_string('904rfn#jlkcn#####Djva2###*(#fsdgfd####fsdg###09849###mfenf##dnjn##kmfd;l#mg03###'), "904rfDj*fsf09mfednkmfd;m")
*/

function cleanString(s) {
    while (s.match(/[a-z]#/g)) {
        s = s.replace(/([a-z]#)/g, '');
    }

    if (s.includes('#')) {
        s = '';
    }

    return s;
};

console.log(cleanString("abc#d##c"));
console.log(cleanString("abc####d##c#"));
//console.log(cleanString("####gfdsgf##hhs#dg####fjhsd###dbs########afns#######sdanfl##db#####s#a"));
/*
console.log(cleanString("904rfn#jlkcn#####Djva2###*(#fsdgfd####fsdg###09849###mfenf##dnjn##kmfd;l#mg03###")); //904rfDj*fsf09mfednkmfd;m
console.log(cleanString("831####jns###s#cas/*####-5##s##6+yqw87e##hfklsd-=-28##fds##")); //6+yqw8hfklsd-=-f
 */
//83###jn##cas/###-#s##6+yqw87#hfklsd-=-2#fd#
//8##j#cas###6+yqw8hfklsd-=-f
//#ca##6+yqw8hfklsd-=-f
//#c#6+yqw8hfklsd-=-f
//#6+yqw8hfklsd-=-f