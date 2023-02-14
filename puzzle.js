// let n = 3;
// let str = "";
// for (let i = n; i >= 1; i--) {
//   str += i + "  ";
// }

// console.log(str);


let i = 0 ;

//  while la condition srtictly follwed pannu 
while (i <= 10){
  if (i % 2 !== 0){
    console .log("odd Number"+i)
  }
 i++;
 console.log(i);
}

//  but do la appadi kediyathu so

// do atha allavuku use panna matom 
do {
  console.log(i);
  if (i % 2 !== 0){
    console .log("odd while do Number"+i)
  }
  i++;
}while(i <= 10)  /*entha condition true ahh false 
ahh nu pakathu do condition than first pakkumm*/ 

////////////////////////////////////////////////

let n=4 ;
for (let i=n; i>=1;i--){
let str="";
for( j=i; j>=1;j--){
  str += j+" ";
}
console.log(str);

}

/////////////////////////////////////////////