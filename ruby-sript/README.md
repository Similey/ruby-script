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
 Removes all elements of collection
 
```js
let collection = new Collection([1,2,3,4]);

collection.clear();
//=> []
```

### collect
Invokes the given function once for each element of collection.

Creates a new array with the result returned by the function.

Returns the collection unaltered if no block is given.

```js
let collection = new Collection([1,2,3,4]);

collection.collect((n) => {return n+1})
//=> [2,3,4,5]
```
