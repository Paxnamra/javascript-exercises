/*
Test.assertEquals(ipToInt32("128.32.10.1"),2149583361, "wrong integer for ip: 128.32.10.1")
 */

function ipToInt32(ip){
    let ipToBinary = ip.split('.').map(x => toBinary(x)).join('');
    return parseInt(ipToBinary, 2);
}

function toBinary(str) {
    str = parseInt(str, 10);
    let binaryStr = "";
    let difference = 0;


    while (str > 0) {
        str = Math.trunc(str);
        if (binaryStr.length < 8) {
            binaryStr = ((str % 2 === 0) ? "0" : "1") + binaryStr;
            str /= 2;
        }
    }

    if (binaryStr.length < 8) {
        difference = 8 - binaryStr.length;
        binaryStr = "0".repeat(difference) + binaryStr;
    }

    return binaryStr;
};