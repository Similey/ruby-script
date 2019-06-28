// let Collection = require('ruby-script');
let Collection = require('C:/Users/blewittj/WebstormProjects/ruby-script/ruby-sript/index.js');


test('should create a collection', () => {
    let c = new Collection([1, 2, 3, 4]);
    expect(c.length).toBe(4);
    expect(c[0]).toBe(1);
    expect(c[1]).toBe(2);
    expect(c[2]).toBe(3);
    expect(c[3]).toBe(4);
});

describe('clear', () => {
    test('should removes all elements of this', () => {
        let c = new Collection([1, 2, 3, 4]);
        c.clear();
        expect(c.length).toBe(0);
        expect(typeof c.clear === 'function').toBe(true)
    })
});

describe('collect', () => {
    test('should invoke the given function once for each element of collection', () => {
        let c = new Collection([1, 2, 3, 4]);
        let collect = c.collect((n) => {
            return n * 2
        });

        expect(collect.length).toBe(4);
        expect(collect[0]).toBe(2);
        expect(collect[1]).toBe(4);
        expect(collect[2]).toBe(6);
        expect(collect[3]).toBe(8);
        expect(typeof collect.collect === 'function').toBe(true)

    });

    test('should create a new collection with the result returned by the function', () => {
        let c = new Collection([1, 2, 3, 4]);
        let collect = c.collect((n) => {
            return n * 2
        });

        expect(c.length).toBe(4);
        expect(collect[0]).toBe(2);
        expect(collect[1]).toBe(4);
        expect(collect[2]).toBe(6);
        expect(collect[3]).toBe(8);
        expect(typeof c.collect === 'function').toBe(true)
    });

    test('should return the collection unaltered if no block is given', () => {
        let c = new Collection([1, 2, 3, 4]);
        let collect = c.collect();

        expect(c.length).toBe(4);
        expect(collect[0]).toBe(1);
        expect(collect[1]).toBe(2);
        expect(collect[2]).toBe(3);
        expect(collect[3]).toBe(4);
        expect(typeof collect.collect === 'function').toBe(true)
    });
});

describe('combination', () => {
    it('should all combinations for 1', () => {
        let collection = new Collection([1, 2, 3, 4]);
        combo = collection.combination(1);
        result = new Collection([[1], [2], [3], [4]]);
        combo.forEach((x, i) => {
            expect(x[0]).toBe(result[i][0]);
            expect(typeof x.combination === 'function').toBe(true)
        });
        expect(typeof combo.combination === 'function').toBe(true)
    });

    it('should all combinations for 2', () => {
        let collection = new Collection([1, 2, 3, 4]);
        combo = collection.combination(2);
        result = new Collection([[1, 2], [1, 3], [1, 4], [2, 3], [2, 4], [3, 4]]);
        combo.forEach((x, i) => {
            expect(x[0]).toBe(result[i][0]);
            expect(x[1]).toBe(result[i][1]);
            expect(typeof x.combination === 'function').toBe(true)
        });
        expect(typeof combo.combination === 'function').toBe(true)
    });

    it('should all combinations for 3', () => {
        let collection = new Collection([1, 2, 3, 4]);
        combo = collection.combination(3);
        result = new Collection([[1, 2, 3], [1, 2, 4], [1, 3, 4], [2, 3, 4]]);
        combo.forEach((x, i) => {
            expect(x[0]).toBe(result[i][0]);
            expect(x[1]).toBe(result[i][1]);
            expect(x[2]).toBe(result[i][2]);
            expect(typeof x.combination === 'function').toBe(true)
        });
        expect(typeof combo.combination === 'function').toBe(true)
    });

    it('should all combinations for 4', () => {
        let collection = new Collection([1, 2, 3, 4]);
        combo = collection.combination(4);
        result = new Collection([[1, 2, 3, 4]]);
        combo.forEach((x, i) => {
            expect(x[0]).toBe(result[i][0]);
            expect(x[1]).toBe(result[i][1]);
            expect(x[2]).toBe(result[i][2]);
            expect(x[3]).toBe(result[i][3]);
            expect(typeof x.combination === 'function').toBe(true)
        });
        expect(typeof combo.combination === 'function').toBe(true)
    });

    it('should 0 combinations for 0', () => {
        let collection = new Collection([1, 2, 3, 4]);
        combo = collection.combination(0);
        result = new Collection([[]]);
        combo.forEach((x, i) => {
            expect(x[0]).toBe(result[i][0]);
            expect(typeof x.combination === 'function').toBe(true)
        });
        expect(typeof combo.combination === 'function').toBe(true)
    });

    it('should empty collection for out of bounds values', () => {
        let collection = new Collection([1, 2, 3, 4]);
        combo = collection.combination(5);
        expect(combo.length).toBe(0);
        expect(typeof combo.combination === 'function').toBe(true)

    });

});

describe('compact', () => {
    it('should all combinations for 5', () => {
        let collection = new Collection([1, undefined, 2, null, 3]);
        let comp = collection.compact();

        expect(comp[0]).toBe(1);
        expect(comp[1]).toBe(2);
        expect(comp[2]).toBe(3);

        expect(typeof comp.compact === 'function').toBe(true)
    });
});

describe('concat', () => {
    it('should append the elements of another array to this', () => {
        let collection = new Collection([1, 2, 3]);
        collection.concat([4]);

        expect(collection.length).toBe(4);
        expect(collection.includes(4)).toBe(true);
    });

    it('should append the elements of multiple arrays to this', () => {
        let collection = new Collection([1, 2, 3]);
        let concat1 = [4];
        let concat2 = [5];
        collection.concat(concat1, concat2);

        expect(collection.length).toBe(5);
        expect(collection.includes(4)).toBe(true);
        expect(collection.includes(5)).toBe(true);
    });

    it('should append the elements of another collection to this', () => {
        let collection = new Collection([1, 2, 3]);
        let concat = new Collection([4]);
        collection.concat(concat);

        expect(collection.length).toBe(4);
        expect(collection.includes(4)).toBe(true);
    });

    it('should append the elements of multiple collections to this', () => {
        let collection = new Collection([1, 2, 3]);
        let concat1 = new Collection([4]);
        let concat2 = new Collection([5]);
        collection.concat(concat1, concat2);

        expect(collection.length).toBe(5);
        expect(collection.includes(4)).toBe(true);
        expect(collection.includes(5)).toBe(true);
    });

    it('should append the elements of multiple one array and one collection', () => {
        let collection = new Collection([1, 2, 3]);
        let concat1 = [4];
        let concat2 = new Collection([5]);
        collection.concat(concat1, concat2);

        expect(collection.length).toBe(5);
        expect(collection.includes(4)).toBe(true);
        expect(collection.includes(5)).toBe(true);
    });
});

describe('count', () => {
    test('should return number of elements in collection', () => {
        let collection = new Collection(["1", "1", 2, 3]);
        expect(collection.count()).toEqual(4);
    });

    test('should return count of elements which equal the given parameter', () => {
        let collection = new Collection(["1", "1", 2, [3], new Collection([4])]);
        let param1 = '1';
        let param2 = 2;
        let param3 = [3];
        let param4 = new Collection([4]);

        expect(collection.count(param1)).toEqual(2);
        expect(collection.count(param2)).toEqual(1);
        expect(collection.count(param3)).toEqual(1);
        expect(collection.count(param4)).toEqual(1);
    });

    test('should return count of elements for which the given block returns a true value', () => {
        let collection = new Collection(["1", "1", 2, 3]);
        expect(collection.count((x) => {
            return x % 2 === 0
        })).toEqual(1);
    });

    test('should return count of 0 when no elements match', () => {
        let collection = new Collection(["1", "1", 2, 3]);
        expect(collection.count(1)).toEqual(0);
    });

    test('should return count of element with longer arrays', () => {
        let collection = new Collection([new Collection([1,2,3]), [2,3,4,5,6]]);
        // expect(collection.count([1,2,3])).toEqual(1);
        expect(collection.count([2,3,4,5,6,7])).toEqual(0);
    });

    test('should return count of element with decimals', () => {
        let collection = new Collection([1.1, 2]);
        expect(collection.count(1.1)).toEqual(1);
        expect(collection.count(1)).toEqual(0);
        expect(collection.count(2)).toEqual(1);
    })
});
