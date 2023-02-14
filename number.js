// do number pattern like this 
// 1 
// 1 2 
// 1 2 3
// 1 2 3 4 
// this should work for all the number 

let n = 10;

console.log(onehalf(n));

function onehalf(n) {
  for (let i = 1; i <= n; i++) {
    console.log(number(i));
  }
}

function number(n) {
  let run = "";
  for (let i = 1; i <= n; i++) {
    run += i + " ";
  }
  return run;
}
