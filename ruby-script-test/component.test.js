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
        expect(c.length).toBe(0)
    })
});

describe('collect', () => {
    test('should invoke the given function once for each element of collection', () => {
        let c = new Collection([1, 2, 3, 4]);
        let i = 0;
        let collect = c.collect((n) => {
            return i += 1
        });

        expect(c.length).toBe(4);
        expect(i).toBe(4);
    });

    test('should create a new array with the result returned by the function', () => {
        let c = new Collection([1, 2, 3, 4]);
        let collect = c.collect((n) => {
            return n * 2
        });

        expect(c.length).toBe(4);
        expect(collect[0]).toBe(2);
        expect(collect[1]).toBe(4);
        expect(collect[2]).toBe(6);
        expect(collect[3]).toBe(8);
    });

    test('should return the collection unaltered if no block is given', () => {
        let c = new Collection([1, 2, 3, 4]);
        let collect = c.collect();

        expect(c.length).toBe(4);
        expect(collect[0]).toBe(1);
        expect(collect[1]).toBe(2);
        expect(collect[2]).toBe(3);
        expect(collect[3]).toBe(4);
    });
});
