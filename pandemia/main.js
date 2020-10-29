/*
describe("Pandemia",()=>{
    it("example tests",()=>{
        assert.approximately( infected("01000000X000X011X0X"), 73.33333333333333, EPSILON );
        assert.approximately( infected("01X000X010X011XX"), 72.72727272727273, EPSILON );
        assert.approximately( infected("XXXXX"), 0, EPSILON );
        assert.approximately( infected("0000000010"), 100, EPSILON );
        assert.approximately( infected("X00X000000X10X0100"), 42.857142857142854, EPSILON );
    });
});
*/

function infected(s) {
    let stringArr = s.split('X').filter(str => str !== "");
    let allPeople = stringArr.join('');

    if (s === "" || stringArr.every(el => el === 'X')) {
        return 0;
    }

    let infectedUnits = [];

    stringArr.forEach(u => {
        if (u.includes("1")) {
         infectedUnits += u;
        }
    });

    return 100 * (infectedUnits.length / allPeople.length);
}