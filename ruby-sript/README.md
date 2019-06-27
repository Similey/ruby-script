# ruby-script
   Extends Array with Ruby like methods
   
## Usage

```
npm install ruby-script
```
```js
let Collection = require('ruby-script');

let collection = new Collection([1,2,3,4]);

collection.collect((n) => {return n+1})
//=> [2,3,4,5]
```

# API

# Collection

### clear
 Removes all elements of _this_.
 
```js
let collection = new Collection([1,2,3,4]);

collection.clear();
//=> []
```

### collect
Invokes the given function once for each element of collection.

Creates a new collection with the result returned by the function.

Returns the collection unaltered if no block is given.

```js
let collection = new Collection([1,2,3,4]);

collection.collect((n) => {return n+1})
//=> [2,3,4,5]
```
### combination
 
When invoked, yields all combinations of length _n_ of elements from the array and returns the combinations
as a collection of collections.
 
```js
let collection = new Collection([1,2,3,4]);

collection.combination(1);
//=> [[1],[2],[3],[4]]
collection.combination(2);
//=> [[1,2],[1,3],[1,4],[2,3],[2,4],[3,4]]
collection.combination(3);
//=> [[1,2,3], [1,2,4], [1,3,4], [2,3,4]]
collection.combination(4);
//=> [[1,2,3,4]]
collection.combination(0);
//=> [[]]
collection.combination(5);
//=> []
```

### compact
Returns a copy of _this_ with all instances of _undefined_ and _null_ removed.

```js
let collection = new Collection([1,undefined,2,null,3,4]);

collection.compact()
//=> [1,2,3,4]
```

### concat
Overrides Arrays concat on the Collection class.

Appends the elements of array/collection to self.

Optional second argument allows second array to be appended.
```js
let collection = new Collection([1,2,3]);

collection.concat(4);
//=> [1,2,3,4]

let collection2 = new Collection([4]);
collection.concat(collection2);
//=> [1,2,3,4]

collection2 = new Collection([5]);
collection.concat(4, collection2)
//=> [1,2,3,4,5]
```
