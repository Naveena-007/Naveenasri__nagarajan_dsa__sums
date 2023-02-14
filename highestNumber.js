let a = [5, 8, 9];
let max = a[0];
for (let i = 1; i < a.length; i++) {
  if (max < a[i]) {
    max = a[i];
  }
}
console.log(max);

let b = [5, 8, 9];
let min = a[0];
for (let i = 1; i < a.length; i++) {
  if (min > a[i]) {
    min = a[i];
  }
}
console.log(max);
