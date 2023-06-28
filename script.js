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


hobbies.slice();//Returns a copy of a section of an array. For both start and end, a negative index can be used to indicate an offset from the end of the array. For example, -2 refers to the second to last element of the array.


//adding array to array with concat() function

hobbies.concat(['writing' ,'cors', 'cheese']); //Combines two or more arrays. This method returns a new array without modifying any existing arrays.

// retrieving index in the array
console.log(hobbies.indexOf('sport'));// Returns the index of the first occurrence of a value in an array, or -1 if it is not present.
//find calls predicate once for each element of the array, in ascending order, 
//until it finds one where predicate returns true. If such an element is found, 
//find immediately returns that element value. Otherwise, find returns undefined.
//Returns the value of the first element in the array where predicate is true, and undefined otherwise.

const persData = [{name:'med'},{name: 'ali'}];

const med = persData.find((per, idx, persons) => {
    return per.name === 'med';
});

hobbies.includes('cors') // Determines whether an array includes a certain element, returning true or false as appropriate.


const prices = [10.99, 20.99, 30.99,24,63.5,64.5];
const tax = 0.19;
const taxAdjustedPrices = [];

// using a simple for loop

for( const price of prices){
    taxAdjustedPrices.push(price*(1+tax));

}

//or we can use forEach loop

prices.forEach((price , idx , prices) => {

const priceObj = {index:idx , taxAdjPrice: price * (1+tax)};

 taxAdjustedPrices.push(priceObj);
    // or taxAdjustedPrices.push(price*(1+tax));

});


// using example of map function

const updatedPrices = prices.map((price , idx , prices) => {

    const priceObj = {index:idx , taxAdjPrice: price * (1+tax)};
    return priceObj;
});


 // sort : Sorts an array in place. This method mutates the array and returns a reference to the same array.
 // Function used to determine the order of the elements. 
 //  It is expected to return a negative value if the first argument is less than the second argument,
 // zero if they're equal, and a positive value otherwise. If omitted, the elements are sorted in ascending, ASCII character order. 

const sortPrices = prices.sort((a ,b) => {

    if(a>b){
        return 1;
    }else if(a===b){

        return 0;
    } else{
        return -1  ;
    }
});

// Reverses the elements in an array in place. 
// This method mutates the array and returns a reference to the same array.
sortPrices.reverse();



// Returns the elements of an array that meet the condition specified in a callback function.
// A function that accepts up to three arguments. The filter method calls the predicate function one time for each element in the array.
const filtredArray = prices.filter((price , index , prices) => {
    return price >6 ;
});

//with the arrow function we can make short the expression 

const filtredArray1 = prices.filter( p=> p>6);

filtredArray1.reduce();


// using forEach loop and reduce function for calculate the sum of array elements 
let sum = 0;
prices.forEach((price) => {
sum+= price;
});

//reduce version 

const summ = prices.reduce((prevValue, currentValue) =>{
    return prevValue + currentValue;
}, 0);

// we can optimaze the reduce function 

const summ1 = prices.reduce((prevValue , currentValue) => prevValue + currentValue , 0);


// we can use map and reduce function bothly in the same instruction 

const objjArray  = [{price: 12.52},{price:254.23},{price:145.25},{price: 152.323}];

const addition = objjArray.map(objt => objt.price).reduce((p ,c) => p+c,0 ); 


 More On Arrays &Iterables 19. Arrays & Strings - split() and join()