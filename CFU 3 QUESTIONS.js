// 1.Display multiplication table using loop

let end = 10;
let table = 2;
for (let i = 1; i <= end; i++) {
  let str = "";
  str = i * table;
  console.log(str);
}

// 2. Display from 1 to 10 except the n value

let n = 5;
let m = 10;
let str = "";

for (let i = 0; i <= 10; i++) {
  if (i !== n) {
    str += i + " ";
  }
}
console.log(str);

//3)Program that checks whether the given character is alphanumeric or not.

// for (let i = a; i <= z; i++) {
//   console.log(i);
// }

// // Get input from user
// const char = prompt("Enter a character:");

// // Check if the character is alphanumeric
// if (/^[a-z0-9]+$/i.test(char)) {
//   console.log(`${char} is alphanumeric.`);
// } else {
//   console.log(`${char} is not alphanumeric.`);
// }

// 4)Program that check whether a given character is an alphabet or not.
// function to check if a character is an alphabet or not
function isAlphabet(ch) {
  // convert the character to lowercase
  ch = ch.toLowerCase();

  // check if the character is between 'a' and 'z'
  if (ch >= "a" && ch <= "z") {
    return true;
  }

  // if the character is not between 'a' and 'z', return false
  return false;
}

// test the function
console.log(isAlphabet("a")); // true
console.log(isAlphabet("B")); // true
console.log(isAlphabet("4")); // false
console.log(isAlphabet("*")); // false
