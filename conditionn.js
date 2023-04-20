// condition
// 1. <

console.log(2 < 47);
//  true
console.log(677 < 3);
// false
console.log(788888 < 14124441);
// true
console.log(23 < 45);
// true
console.log(3 < 1);
// false

// 2. >

console.log(23 > 2);
// true
console.log(45 > 4);
// true
console.log(2 > 34);
// false
console.log(34 > 78);
// false
console.log(7 > 2);
// true

// 3. =

let a = "ajmal";
let b = "naveena";
let e = 5;
console.log((a = b));
console.log(a == b);
console.log(a === e);
// naveena
// true
// false

let c = 2;
let d = "4";
console.log((c = d));
console.log(c == d);
console.log(c === d);
// 4
// true
// true

let f = 2;
let g = "4";
let h = 4;
console.log((f = g));
console.log(g == h);
console.log(h === g);
// 4
// true
// false

// 4. !
console.log(f != g);
// false

console.log(6 > 4 && 2 <= 14);
// true
console.log(6 > 4 && 6 > 8);
// false
console.log(4 > 6 && 6 > 8);
// false
console.log(7 < 25 || 15 > 36);
// true
console.log(14 > 7 && 5 <= 5);
// true
console.log(14 > 7 && 5 < 5);
// false
console.log(9 != 7 && !0);
// true
console.log(6 > 7 || 34 < 45);
// true
console.log(true && true);
// true
console.log(true || false);
// true
console.log(true && false);
// false
console.log(false && false);
// false
