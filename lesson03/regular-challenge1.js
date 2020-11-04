/** Regular Challenge Program 1 **/
let array =['As','Above','So','Below','!'];
console.log(`Here is the array of length ${array.length} : ${array} `);
array.push('Yngwie');
console.log('Added an element to the end of the array');
console.log(`Now the array is of size ${array.length} with elements: ${array} `);
console.log('Now we will remove the third element of the array that is on location 2');
array.splice(2,1);
console.log(`Here is the array with the third element removed with a size of ${array.length}  ${array}`);
const theString = array.join(',');
console.log(`Here is a string of the array we are working thatr joins the elements and are seperated by comma`);
console.log(theString);