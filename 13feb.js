/**
let n = 15;
let m = 5;

 Write code to print 
if n is a multiple of m 
or n is not a multiple of m

For the sample input put it should print

 15 is a multiple of 5
 
 hint: 12%3 gives 0.
**/

let n = 176;
let m = 2;
let run = n + " is a multiple of " + m;
let go = n + " is not a multiple of " + m;
if (n % m == 0) {
  console.log(run);
} else {
  console.log(go);
}

/**
Write code to print if n is a prime Number

for example if n = 11, then its divisible only by 1 and 11 
(Hint: only n%1 == 0 and n%11==0,  ) no other number can divide 11

but if n = 12 then n%1 ==0 and n%2==0, n%3 == 0, n%4 == 0, n%6==0 hence its not a prime number

Your code should work for any value of n
*/

let a = 139;
let prime = a + " is a prime Number ";
let notprime = a + " is not a prime Number ";

if ((a % 1 == 0) & (1 % a == 0)) {
  console.log(prime);
} else {
  console.log(notprime);
}

/**
*
Try this if you are comfortable with linear search.

int a[] = [13, 11, 13,4, 10, 9, 1];
int x[] = [11, 13, 4, 17];
// Your program should print
// 11 is found 1 time
// 13 is found 2 times
// 4 is found 1 time
// 17 is NOT found
*/

const k = [13, 11, 13, 4, 10, 9, 1];
const x = [11, 13, 4, 17];

for (let i = 0; i < x.length; i++) {
  let count = 0;
  for (let j = 0; j < k.length; j++) {
    if (x[i] === a[j]) {
      count++;
    }
  }
  if (count === 0) {
    console.log(`${x[i]} is not found`);
  } else {
    console.log(`${x[i]} is found ${count} time(s)`);
  }
}
