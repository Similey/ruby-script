# ruby-script
Creating a Ruby-Array like class called Collection

## GitHubRepo
Feel free to contribute or log issues!

https://github.com/Jonny-B/ruby-script

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

### Collection

### isCollection
 Removes all elements of _this_.
 
```js
let collection = new Collection([1,2,3,4]);

collection.isCollection();
//=> true
```

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

### count
Return the number of elements in collection.

If an argument is given, counts the number of elements which equal argument using _===_.

If a block is given, counts the number of elements for which the block returns true.

```js
let collection = new Collection(['1','1',2,[3,4]]);

collection.count(4);
//=> 4

collection.count('1');
//=> 2

collection.count(1);
//=> 0

collection.count(2);
//=> 1

collection.count([3,4]);
//=> 1

collection.count([3,4,5]);
//=> 0
```

### cycle
Returns an extended Collection with values duplicated _n_ times.

Calls the given block for each element _n_ times or forever if _null_ is given and returns result of block as new
Collection.

Returns _null_ if a non-positive integer or the Collection is empty.

```js
collection = new Collection([1,2,3]);

collection.cycle(2);
//=> [1,2,3,1,2,3]

collection.cycle(2, (n) => {return n*2});
//=> [2,4,6,2,4,6]

collection.cycle(-2, (n) => {return n*2});
//=> null

collection2 = new Collection([]);
collection2.cycle(2, (n) => {return n*2});
//=> null
```

### delete
Deletes all items from _this_ that are equal to argument.

Returns the last deleted item, or _null_ if no matching item is found.

If the optional code block is given, the result of the block is return if the item is not found. (To remove nil or 
undefined elements use _.compact_).

Returns _null_ if no block is provided and item is not found.

```js
collection = new Collection([1,2,3,4,2]);

collection.delete(2);
//=> 2
//=> collection -> [1,3,4]

collection.delete(1);
//=> 1
//=> collection -> [2,3,4,2]

collection.delete(5, () => {return 'not found'});
//=> 'not found'
//=> collection -> [1,2,3,4,2]

collection.delete(5, () => {return 'not found'});
//=> null
```

### delete_at
Deletes the element at the specified index, returning that element, or null if the index is out of range.

See also .slice

```js
collection = new Collection([1,2,3,4,5]);

collection.delete_at(2);
//=> 3
//=> collection -> [1,2,4,5]

collection.delete_at(10);
//=> null
```

### delete_if
Deletes every element of this for which block evaluates to true.

The array is changed instantly every time the block is called, not after the iteration is over.

Returns the collection unaltered if no block is given.

```js
collection = new Collection([1,2,3,4,5]);

collection.delete_if((x) => {return x%2 === 0});
//=> collection -> [1,3,5]

collection.delete_if();
//=> [1,2,3,4,5]
```

### dig
Extracts the nested value specified by the sequence of ids by calling dig at each step, returning _undefined_ if any intermediate step is _undefined_.

```js
collection = new Collection([[1, [2, 3]]]);

collection.dig(0,1,1);
//=> 3

collection.dig(1,2,3);
//=> undefined

collection.dig(0,0);
//=> error
```

### drop
Drops first n elements from Collection and returns the rest of the elements in an array.

If a negative number is given, raise an ArgumentError

See also .take
```js
collection = new Collection([1, 2, 3, 4, 5]);

collection.drop(3);
//=> [4 ,5]

collection.drop(-1);
//=> Argument Error

collection.drop('1');
//=> Argument Error
```

### drop_while
Drops elements up to, but not including, the first element for which the block return _null_ or _false_ and returns an 
_collection_ containing the remaining elements
```js
collection = new Collection([1, 2, 3, 4, 5]);

collection.drop_while((i) => {return i < 3});
//=> [3, 4, 5]

collection2 = new Collection([3,4,5]);
collection2.drop_while((i) => {return collection[i] > i});
//=> [5]
```

### each
Calls the given function once for each element in _this_, passing that element as a parameter. Returns the _Collection_
itself.

If no block is given, returns the _Collection_ itself.
```js
collection = new Collection([1, 2, 3]);

collection.each((x) => {`${console.log(x)} --`})
//=> produces -> 1 -- 2 -- 3 --
```

### each_index
Same as _.each_, but passes the _index_ of the element instead of the element itself.

If no block is given, returns _this_.
```js
collection = new Collection([1, 2, 3]);

collection.each((x) => {`${console.log(x)} --`})
//=> produces -> 0 -- 1 -- 2 --
```

### each_with_index
Calls _callback_ with _two_ arguments, the element and its index, for each item in _Collection_.
Given arguments are passed through to _.each_.

If no callback is given, returns _this_

```js
collection = new Collection(['a', 'b', 'c']);

collection.each_with_index((x, i) => {`${console.log(x)} ${i} --`})
//=> produces -> a 0 -- b 1 -- c 2
```

### empty
Returns true if _this_ contains no elements.

```js
collection = new Collection(['a', 'b', 'c']);
collection.empty();
//=> false

emptyCollection = new Collection([]);
emptyCollection.empty();
//=> true
```

### eql
Returns true if _this_ and _other_ are are both collections, or _other_ is an array, with the same content.

```js
collection = new Collection([1,2,3]);

collection.equal(new Collection([1,2,3]));
//=> true

collection.equal([1,2,3]);
//=> true

collection.equal([1,2]);
//=> false
```
