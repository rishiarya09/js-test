export function encryptCaesar(inputString, key) {
  // TODO: write your code here
  const alphabets = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N","O","P","Q","R", "S","T","U","V","W","X","Y","Z"];
    let encrypted_letters = [];
  
    if(typeof(inputString) == "string"){
        let inputstring = inputString.toUpperCase();
     for(var i =0; i< inputstring.length; i++){
         var index_of_element = alphabets.findIndex((element) => element === inputstring[i]);
         let next_index = parseInt(index_of_element)+key
         if(next_index > 26){
            next_index -= 26;
            encrypted_letters.push(alphabets[next_index]);
         } else {
            encrypted_letters.push(alphabets[next_index]);
         }
     }
     return encrypted_letters.join('');
    }

}
