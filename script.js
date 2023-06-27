const numbers = [1,2,3,5];
const moreNum = new Array(5); //array of 5 empty of length .
const Tabb = Array.of(1,2);
console.log("Tabb"); // create array containe 1 and 2.
const vtab = Array.from('medium');// create array containe  'm' 'e' 'd' 'i' 'u' 'm' .
console.log(vtab);


const obje =  [30,'med', {vad:[1,2,5,]}]; // array of objects .

const person = [[30,12,33],[15,2,23,56,4]];
for(const data of person){
    for(const da of data){
        console.log(da);// for display array elements .
    }
}


// adding data to array

const hobbies = ['sport', 'Cooking'];
hobbies.push('Reading');//add reading in the end of array
hobbies.unshift('Coding'); // adding element in the first position of array
hobbies.pop();//remove the last  element from array
hobbies.shift();//remove the first element from array


hobbies.splice();//Removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements.
hobbies.splice(0,0,'swimming');// in the first position 0 don't remove (the second parameter is 0) and add 'swimming' to the hobbies array.
