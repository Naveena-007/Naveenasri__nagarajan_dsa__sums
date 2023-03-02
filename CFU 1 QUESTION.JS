// 1. Given 2 numbers it should print if they are equal or not equal,
// let a = 10;
// let b = 20;
// It should either a is equal to b or a is NOT equal to b

let a = 20;
let b = 20;

if (a === b) {
  console.log("a is equal to b");
} else {
  console.log("a is not equal to b");
}

// 2. For a given positive integer n, it should print every number from 1 to n except x
// for eg:
// let n = 10;
// let x = 5;
// Your program should print 1 2 3 4 6 7 8 9 10
// (everything from 1 to 10 except 5)

let str = "";
let n = 10;
let x = 5;

for (let i = 1; i <= n; i++) {
  if (i !== x) {
    str += i + " ";
  }
}

console.log(str);

// 3. Given an array, print the sum of all even numbers in the array
// let a = [4, 3, 17, 10, 11];
// it should print 14

let c = [4, 3, 17, 10, 11];
let sum = 0;
for (let i = 0; i < c.length; i++) {
  if (c[i] % 2 === 0) {
    sum += c[i];
  }
}
console.log(sum);

// 4. Given an array of length n and k (k < n) find the maximum sum of k consecutive numbers.
// for eg:
// let a = [4,5, 10, 11, 1];
// let k = 3;
// The maximum is 26.
let m = [4, 5, 10, 11, 1];
let k = 3;
let maxSum = 0;
for (let i = 0; i <= m.length - k; i++) {
  let sum = 0;
  for (let j = 0; j < k; j++) {
    sum += m[i + j];
  }
  if (sum > maxSum) {
    maxSum = sum;
  }
}
console.log(maxSum);
