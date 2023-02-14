// for (let i = 1; i <= 7; i++) {
//   let navee = "  ";
//   for (let j = 1; j <= 7; j++) {
//     navee += i + "  ";
//   }
//   console.log(navee);
// }
// n = 5
// for i in range(1, n+1);
//   for j in range(1, i+1);
//     print(j, end=" ")
//   print()

// / Home Work 2
// 1; (k <= i ; k++)
//   run += i + " ";
// {
// console.log(run);
// }
// for (let i = n - 1; i >= 1; i--) {
// let run = "";
// for (let j = 1; j <= n - i; j++) {
//   run += " ";
// }
// for (let k = 1; k <=  let n = 4;
// for (let i = 1; i <= n; i++) {
// let run = "";
// for (let j = 1; j <= n - i; j++) {
//   run += " ";
// }
// for (let k =i; k++) {
//   run += i + " ";
// }
// console.log(run);
// }
// Home work 3
// let n = 4;
// for (let i = 1; i <= n; i++) {
// let run = "";
// for (let j = 1; j <= n - i; j++) {
//   run += " ";
// }
// for (let k = 1; k <= i; k++) {
//   run += k + " ";
// }
// console.log(run);
// }
// for (let i = n - 1; i >= 1; i--) {
// let run = "";
// for (let j = 1; j <= n - i; j++) {
//   run += " ";
// }
// for (let k = 1; k <= i; k++) {
//   run += k + " ";
// }
// console.log(run);
// }
// Home work 4
// let n = 15;
// for (let i = 1; i <= n; i++) {
// if (i % 3 == 0 && i % 5 == 0) {
//   console.log("Superstar Rajnikanth");
// } else if (i % 3 == 0) {
//   console.log("Superstar");
// } else if (i % 5 == 0) {
//   console.log("Rajnikanth");
// } else {
//   console.log(i);
// }
// }

let n = 3;
// Repeat n times
for (let i = 1; i <= n; i++) {
  //spaces + sequence of numbers
  console.log(getSpaces(n - i + 1) + getNumSequence(i));
}
for (let i = 2; i <= n; i--) {
  console.log(getSpaces(n - i + 1) + getReverse(i));
}

//console.log( getSpaces(3) + getNumSequence(1));

//console.log( getSpaces(2) + getNumSequence(2));

//console.log( getSpaces(1) + getNumSequence(3));

function getSpaces(n) {
  let str = "";
  for (let i = 1; i <= n; i++) {
    str = str + " ";
  }
  return str;
}

function getNumSequence(n) {
  let numseq_str = "";
  for (let i = 1; i <= n; i++) {
    numseq_str = numseq_str + i + " ";
  }
  return numseq_str;
}

// function getReverse(n) {
//   let num_str = "";
//   for (let i = 2; i <= n; i--) {
//     num_str = num_str + i + " ";
//   }
//   return num_str;
// }

//Reverse half diamond
//Repeat 2 times
// spaces + sequence in reverse of numbers
