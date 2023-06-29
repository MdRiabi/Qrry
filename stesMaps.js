const ids = new Set(['Hi', 'from', 'set!']);
 ids.add(2);
 if (ids.has('Hi')) {
   ids.delete('Hi');
 }

 for (const entry of ids.entries()) {
   console.log(entry[0]);
 }
 //24. Working with Maps

 const person1 = {name: 'med', lastName: 'riabi'};
 const person2 = {name: 'ali'};

 const daraPerson = new Map([[person1 , [{name:'jhon', price:100}]]]);
 console.log(daraPerson);
 daraPerson.delete()
 // .entries()  -> Returns an iterable of key, value pairs for every entry in the map.

 // .get() -> Returns a specified element from the Map object. If the value that is associated to the provided key is an object, 
 //then you will get a reference to that object and any change made to that object will effectively modify it inside the Map.

// .has() -> @returns — boolean indicating whether an element with the specified key exists or not.

// .keys() -> Returns an iterable of keys in the map

// .set() -> Adds a new element with a specified key and value to the Map. 
// If an element with the same key already exists, the element will be updated.

// .size()  -> @returns — the number of elements in the Map.

//.values() -> Returns an iterable of values in the map

// .delete() -> @returns — true if an element in the Map existed and has been removed, or false if the element does not exist.


