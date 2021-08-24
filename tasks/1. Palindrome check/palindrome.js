export function isPalindrome(inputString) {
  // TODO: write your code here
  var x = inputString;
  if(typeof(x) == "string"){
    for(var i =0; i<= x.length/2; i++){
        if(x[i] !== x[x.length-1-i]){
            return false           
        }
    }
    return true;
}
}