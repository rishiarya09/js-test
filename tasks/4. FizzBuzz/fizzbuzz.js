export function getFizzBuzzUntil(n) {
  // TODO: write your code here
  let fizz_buzz_array = [];
let a = [3,5];
let words = ["Fizz", "Buzz"];
for(let i = 1; i <= n; i++){
  let str = "";
  for(let j =0; j <a.length; j++){
    if((i % a[j])==0){
      str = str +  words[j];
    }
    }
    if(str!=""){
    fizz_buzz_array.push(str);
    }else {
    fizz_buzz_array.push(i);
    }
}
return fizz_buzz_array;
}
