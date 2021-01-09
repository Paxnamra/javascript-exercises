function zero(a) {
    const self = 0;
    //if a returns full function chain then finish the operation
    //cast passed down numbers to Number and recognize, then assign proper math operator //do a function to extract op sign to actual * or - or + or //
    const chain = self + " " + a;
    //console.log(chain);
    return a === undefined ? self : a;
        //if b function name then a + b
}

function one() { return 1; }
function two() { return 2; }
function three() { return 3; }
function four() { return 4; }
function five() { return 5; }
function six(s) {
    const self = 6;
    return s === undefined ? self : s;
}
function seven() { return 7; }
function eight() { return 8; }
function nine() {
    return 9; }

function plus(number) {
    console.log("This is number: " + number)
    return "+ " + number;
}

function minus(number) {
    return "- " + number;
}
function times(number) {
    return "* " + number;
}
function dividedBy(number) {
    return "/ " + number;
}

//console.log(zero(plus(nine())));
//console.log(five(times(six)));
//console.log(six());
console.log(eight());
console.log(six());

zero(plus(nine()));