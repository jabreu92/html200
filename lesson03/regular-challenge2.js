/** Regular Challenge 2 Program **/
let sentence = 'Bacon and eggs are delicious.';
let array =[];
let startOfWord = 0;

for (let i =0; i <sentence.length; i++){

  let char = sentence[i];
  
  if(char === ' '){
   let subString = sentence.substring(startOfWord,i);
    array.push(subString);
    startOfWord = i+1;
  }
}

array.push(sentence.substring(startOfWord,sentence.length-1));
let thirdItem = array.splice(2,1) + '';
console.log(thirdItem);

