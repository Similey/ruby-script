let Collection = require('../ruby-sript/index');

describe('ruby-script', () => {
    it('should create a collection', () => {
        let c = new Collection([1, 2, 3, 4]);
        expect(c.length).toBe(4);
        expect(c[0]).toBe(1);
        expect(c[1]).toBe(2);
        expect(c[2]).toBe(3);
        expect(c[3]).toBe(4);
    });

    describe('isCollection', () => {
        it('should return true', () => {
            let c = new Collection([1, 2, 3, 4]);
            expect(c.isCollection()).toBe(true);
        })
    });

    describe('clear', () => {
        it('should removes all elements of this', () => {
            let c = new Collection([1, 2, 3, 4]);
            c.clear();
            expect(c.length).toBe(0);
        });

        it('should return a collection', () => {
            let c = new Collection([1, 2, 3, 4]);
            c.clear();
            expect(c.isCollection()).toBe(true)
        });
    });

    describe('collect', () => {
        it('should invoke the given function once for each element of collection', () => {
            let c = new Collection([1, 2, 3, 4]);
            let collect = c.collect((n) => {
                return n * 2
            });

            expect(collect.length).toBe(4);
            expect(collect[0]).toBe(2);
            expect(collect[1]).toBe(4);
            expect(collect[2]).toBe(6);
            expect(collect[3]).toBe(8);

        });

        it('should return a collection', () => {
            let c = new Collection([1, 2, 3, 4]);

            expect(c.isCollection()).toBe(true)
        });

        it('should create a new collection with the result returned by the function', () => {
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

        it('should return the collection unaltered if no block is given', () => {
            let c = new Collection([1, 2, 3, 4]);
            let collect = c.collect();

            expect(c.length).toBe(4);
            expect(collect[0]).toBe(1);
            expect(collect[1]).toBe(2);
            expect(collect[2]).toBe(3);
            expect(collect[3]).toBe(4);
        });
    });

    describe('combination', () => {
        it('should all combinations for 1', () => {
            let collection = new Collection([1, 2, 3, 4]);
            combo = collection.combination(1);
            result = new Collection([[1], [2], [3], [4]]);
            combo.forEach((x, i) => {
                expect(x[0]).toBe(result[i][0]);
                expect(x.isCollection()).toBe(true)
            });
            expect(combo.isCollection()).toBe(true)
        });

        it('should all combinations for 2', () => {
            let collection = new Collection([1, 2, 3, 4]);
            combo = collection.combination(2);
            result = new Collection([[1, 2], [1, 3], [1, 4], [2, 3], [2, 4], [3, 4]]);
            combo.forEach((x, i) => {
                expect(x[0]).toBe(result[i][0]);
                expect(x[1]).toBe(result[i][1]);
                expect(x.isCollection()).toBe(true)
            });
            expect(combo.isCollection()).toBe(true)
        });

        it('should all combinations for 3', () => {
            let collection = new Collection([1, 2, 3, 4]);
            combo = collection.combination(3);
            result = new Collection([[1, 2, 3], [1, 2, 4], [1, 3, 4], [2, 3, 4]]);
            combo.forEach((x, i) => {
                expect(x[0]).toBe(result[i][0]);
                expect(x[1]).toBe(result[i][1]);
                expect(x[2]).toBe(result[i][2]);
                expect(x.isCollection()).toBe(true)
            });
            expect(combo.isCollection()).toBe(true)
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
                expect(x.isCollection()).toBe(true)
            });
            expect(combo.isCollection()).toBe(true)
        });

        it('should 0 combinations for 0', () => {
            let collection = new Collection([1, 2, 3, 4]);
            combo = collection.combination(0);
            result = new Collection([[]]);
            combo.forEach((x, i) => {
                expect(x[0]).toBe(result[i][0]);
                expect(x.isCollection()).toBe(true)
            });
            expect(combo.isCollection()).toBe(true)
        });

        it('should empty collection for out of bounds values', () => {
            let collection = new Collection([1, 2, 3, 4]);
            combo = collection.combination(5);
            expect(combo.length).toBe(0);
            expect(combo.isCollection()).toBe(true)

        });

    });

    describe('compact', () => {
        it('should all combinations for 5', () => {
            let collection = new Collection([1, undefined, 2, null, 3]);
            let comp = collection.compact();

            expect(comp[0]).toBe(1);
            expect(comp[1]).toBe(2);
            expect(comp[2]).toBe(3);

            expect(comp.isCollection()).toBe(true)
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
            expect(collection.count()).toBe(4);
        });

        test('should return count of elements which equal the given parameter', () => {
            let collection = new Collection(["1", "1", 2, [3], new Collection([4])]);
            let param1 = '1';
            let param2 = 2;
            let param3 = [3];
            let param4 = new Collection([4]);

            expect(collection.count(param1)).toBe(2);
            expect(collection.count(param2)).toBe(1);
            expect(collection.count(param3)).toBe(1);
            expect(collection.count(param4)).toBe(1);
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
            let collection = new Collection([new Collection([1, 2, 3]), [2, 3, 4, 5, 6]]);
            // expect(collection.count([1,2,3])).toEqual(1);
            expect(collection.count([2, 3, 4, 5, 6, 7])).toEqual(0);
        });

        test('should return count of element with decimals', () => {
            let collection = new Collection([1.1, 2]);
            expect(collection.count(1.1)).toEqual(1);
            expect(collection.count(1)).toEqual(0);
            expect(collection.count(2)).toEqual(1);
        })
    });

    describe('cycle', () => {
        test('should call block 2 times and return collection', () => {
            let collection = new Collection([1, 2, 3]);
            let cy = collection.cycle(2, (x) => {
                return x * 2
            });
            expect(cy.length).toBe(6);
            expect(cy[0]).toBe(2);
            expect(cy[1]).toBe(4);
            expect(cy[2]).toBe(6);
            expect(cy[3]).toBe(2);
            expect(cy[4]).toBe(4);
            expect(cy[5]).toBe(6);
            expect(cy.isCollection()).toBe(true);
        });

        test('should return an extended collection with duplicates of original values', () => {
            let collection = new Collection([1, 2, 3]);
            let cy = collection.cycle(2);
            expect(cy.length).toBe(6);
            expect(cy[0]).toBe(1);
            expect(cy[1]).toBe(2);
            expect(cy[2]).toBe(3);
            expect(cy[3]).toBe(1);
            expect(cy[4]).toBe(2);
            expect(cy[5]).toBe(3);
            expect(cy.isCollection()).toBe(true);
        });

        test('should return null if non-positive integer is passed', () => {
            let collection = new Collection([1, 2, 3]);
            let cy = collection.cycle(-2, (x) => {
                return x * 3
            });
            expect(cy).toBe(null);
        });

        test('should return null if collection is empty', () => {
            let collection = new Collection([]);
            let cy = collection.cycle(-2, (x) => {
                return x * 3
            });
            expect(cy).toBe(null);
        });
    });

    describe('delete', () => {
        test('should delete all 2s from collection', () => {
            let collection = new Collection([1, 2, 3, 4, 2]);
            collection.delete(2);
            expect(collection.length).toBe(3);
            expect(collection[0]).toBe(1);
            expect(collection[1]).toBe(3);
            expect(collection[2]).toBe(4);
        });

        test('should delete all 2s from collection', () => {
            let collection = new Collection([1, 2, 3, 4, 2]);
            let del = collection.delete(2);
            expect(del).toBe(2);
        });

        test('should delete all 2s from collection and not result of block', () => {
            let collection = new Collection([1, 2, 3, 4, 2]);
            collection.delete(2, () => {
                return 'not found'
            });
            expect(collection.length).toBe(3);
            expect(collection[0]).toBe(1);
            expect(collection[1]).toBe(3);
            expect(collection[2]).toBe(4);
        });

        test('should return result of block and not change collection', () => {
            let collection = new Collection([1, 2, 3, 4, 2]);
            let del = collection.delete(5, () => {
                return 'not found'
            });
            expect(del).toBe('not found');
            expect(collection.length).toBe(5);
            expect(collection[0]).toBe(1);
            expect(collection[1]).toBe(2);
            expect(collection[2]).toBe(3);
            expect(collection[3]).toBe(4);
            expect(collection[4]).toBe(2);
        });
    });

    describe('delete_at', () => {
        it('should return value at given index', () => {
            let collection = new Collection([1, 2, 3, 4, 5]);
            let del = collection.delete_at(2);

            expect(del).toEqual(3);
        });

        it('should modify the original collection removing value at given index', () => {
            let collection = new Collection([1, 2, 3, 4, 5]);
            let result = new Collection([1, 2, 4, 5]);
            collection.delete_at(2);

            expect(collection).toEqual(result);
        });

        it('should return null if given index is out of range', () => {
            let collection = new Collection([1, 2, 3, 4, 5]);
            let del = collection.delete_at(99);

            expect(del).toEqual(null)
        });
    });

    describe('delete_if', () => {
        it('should delete every element for which block evaluates true', () => {
            let collection = new Collection([1, 2, 3, 4, 5]);
            let result = new Collection([1, 3, 5]);
            collection.delete_if((x) => {
                return x % 2 === 0
            });

            expect(collection).toEqual(result);
        });

        it('should modified collection after each block and not once at the end', () => {
            //    I don't know how to test this
        });

        it('should return unaltered array if no block is provided', () => {
            let collection = new Collection([1, 2, 3, 4, 5]);
            let result = new Collection([1, 2, 3, 4, 5]);

            collection.delete_if(() => {
                return this.length === 1
            });

            expect(collection).toEqual(result);
        });
    });

    describe('dig', () => {
        it('should return nested value given a set of ids', () => {
            let collection = new Collection([1, [2, [3, [4, [5, [6, [7]]]]]]]);
            let dig1 = collection.dig(1);
            let dig2 = collection.dig(1, 1);
            let dig3 = collection.dig(1, 1, 1);
            let dig4 = collection.dig(1, 1, 1, 1);
            let dig5 = collection.dig(1, 1, 1, 1, 1,);
            let dig6 = collection.dig(1, 1, 1, 1, 1, 1);
            let dig7 = collection.dig(1, 1, 1, 1, 1, 1, 0);

            expect(dig1).toEqual([2, [3, [4, [5, [6, [7]]]]]]);
            expect(dig2).toEqual([3, [4, [5, [6, [7]]]]]);
            expect(dig3).toEqual([4, [5, [6, [7]]]]);
            expect(dig4).toEqual([5, [6, [7]]]);
            expect(dig5).toEqual([6, [7]]);
            expect(dig6).toEqual([7]);
            expect(dig7).toEqual(7);
        });

        it('should return null for no match', () => {
            let collection = new Collection([1, [2, [3, [4, [5, [6, [7]]]]]]]);

            let dig1 = collection.dig(2);
            let dig2 = collection.dig(1, 2);
            let dig3 = collection.dig(1, 1, 2);
            let dig4 = collection.dig(1, 1, 1, 2);
            let dig5 = collection.dig(1, 1, 1, 1, 2);
            let dig6 = collection.dig(1, 1, 1, 1, 1, 2);
            let dig7 = collection.dig(1, 1, 1, 1, 1, 1, 2);

            expect(dig1).toBe(undefined);
            expect(dig2).toBe(undefined);
            expect(dig3).toBe(undefined);
            expect(dig4).toBe(undefined);
            expect(dig5).toBe(undefined);
            expect(dig6).toBe(undefined);
            expect(dig7).toBe(undefined);
        });

        it('should error if called on a non collection return value', () => {
            let collection = new Collection([1, [2, [3, [4, [5, [6, [7]]]]]]]);

            expect(() => {
                collection.dig(1, 0, 0)
            }).toThrow('While digging an object was found from which dig could not be called')
        })
    });

    describe('drop', () => {
        it('should drop the 3 elements from Collection', () => {
            let collection = new Collection([1, 2, 3, 4, 5]);
            let drop = collection.drop(3);

            expect(drop).toEqual(new Collection([4, 5]));
        });

        it('should return a collection', () => {
            let collection = new Collection([1, 2, 3, 4, 5]);
            let drop = collection.drop(3);

            expect(drop.isCollection()).toEqual(true);
        });

        it('should throw argument error for negative number', () => {
            let collection = new Collection([1, 2, 3, 4, 5]);

            expect(() => {
                collection.drop(-1);
            }).toThrow('Argument Error')
        });

        it('should throw argument error for non number', () => {
            let collection = new Collection([1, 2, 3, 4, 5]);

            expect(() => {
                collection.drop('1');
            }).toThrow('Argument Error')
        })
    });

    describe('drop_while', () => {
        it('should drop each element until block returns false', () => {
            let collection = new Collection([1, 2, 3, 4, 5]);
            let dropWhile = collection.drop_while((i) => {
                return i < 3
            });

            expect(dropWhile).toEqual(new Collection([4, 5]));
        });

        it('should drop each element until block returns null', () => {
            let collection = new Collection([1, 2, 3, 4, 5]);
            let collection2 = new Collection([3, 4, 5]);
            let dropWhile = collection2.drop_while((i) => {
                return collection[i] > i
            });

            expect(dropWhile).toEqual(new Collection([5]));
        });

        it('should return a collection', () => {
            let collection = new Collection([1, 2, 3, 4, 5]);
            let dropWhile = collection.drop_while((i) => {
                return i < 3
            });

            expect(dropWhile.isCollection()).toEqual(true);
        });
    });

    describe('each', () => {
        it('should loop through each element in collection', () => {
            let collection = new Collection([1, 2, 3]);
            let result = 0;
            collection.each((i) => {
                return result += i
            });

            expect(result).toBe(6);
        });

        it('should return this', () => {
            let collection = new Collection([1, 2, 3]);
            let each = collection.each((i) => {
                return i
            });

            expect(each).toBe(collection);
        });

        it('should return this if no function is passed as argument', () => {
            let collection = new Collection([1, 2, 3]);
            let each = collection.each();

            expect(each).toBe(collection);
        })
    });

    describe('each_index', () => {
        it('should loop through each element in collection passing in the index instead of element', () => {
            let collection = new Collection([1, 2, 3]);
            let result = 0;
            collection.each_index((i) => {
                return result += i
            });

            expect(result).toBe(3);
        });

        it('should return this', () => {
            let collection = new Collection([1, 2, 3]);
            let each = collection.each_index((i) => {
                return i
            });

            expect(each).toBe(collection);
        });

        it('should return this if no function is passed as argument', () => {
            let collection = new Collection([1, 2, 3]);
            let each = collection.each_index();

            expect(each).toBe(collection);
        })
    });

    describe('each_with_index', () => {
        it('should loop through each element in collection passing in the element and index', () => {
            let collection = new Collection([1, 2, 3]);
            let result = 0;
            collection.each_with_index((x, i) => {
                return result += (x + i)
            });

            expect(result).toBe(9);
        });

        it('should return this', () => {
            let collection = new Collection([1, 2, 3]);
            let each = collection.each_with_index((i) => {
                return i
            });

            expect(each).toBe(collection);
        });

        it('should return this if no function is passed as argument', () => {
            let collection = new Collection([1, 2, 3]);
            let each = collection.each_with_index();

            expect(each).toBe(collection);
        })
    });

    describe('empty', () => {
        it('should return true if collection has no elements', () => {
            let collection = new Collection([]);
            let empty = collection.empty();

            expect(empty).toBe(true);
        });

        it('should return false if collection HAS elements', () => {
            let collection = new Collection([1]);
            let empty = collection.empty();

            expect(empty).toBe(false);
        })
    });

    describe('eql', () => {
        it('should return true if collections have the same values', () => {
            let collection = new Collection([1, 2, 3]);
            let eql = collection.eql(new Collection([1, 2, 3]));

            expect(eql).toBe(true);
        });

        it('should return true if collection and array have the same values', () => {
            let collection = new Collection([1, 2, 3]);
            let eql = collection.eql([1, 2, 3]);

            expect(eql).toBe(true);
        });

        it('should return false if collections are NOT the same object', () => {
            let collection = new Collection([1, 2, 3]);
            let eql = collection.eql({});

            expect(eql).toBe(false);
        });

        it('should return false if collections do NOT have the same values', () => {
            let collection = new Collection([1, 2, 3]);
            let collection2 = new Collection([1, 2]);
            let eql = collection.eql([1, 2]);
            let eql2 = collection2.eql([1, 2, 3]);

            expect(eql).toBe(false);
            expect(eql2).toBe(false);
        });
    });

    describe('unshift', () => {
        it('should prepends object to of this, moving other elements upwards', () => {
            let collection = new Collection([2, 3, 4]);
            expect(collection.unshift('a', 'b')).toEqual(['a', 'b', 2, 3, 4]);
        });

        it('should return this', () => {
            let collection = new Collection([2, 3, 4]);
            expect(collection.unshift(0, 1)).toBe(collection);
        })

    });

    describe('values_at', () => {
        it('should return a collection containing the elements of this to the given index(s)', () => {
            let collection = new Collection(["a", "b", "c", "d", "e", "f"]);
            let values_at = collection.values_at(1, 3, 5);
            expect(values_at).toEqual(["b", "d", "f"]);
            expect(values_at.isCollection()).toEqual(true);
        });

        it('should return undefined if index is out of range', () => {
            let collection = new Collection(["a", "b", "c", "d", "e", "f"]);
            let values_at = collection.values_at(1, 3, 5, 7);
            expect(values_at).toEqual(["b", "d", "f", undefined]);
        });

        it('should return return a collection containing the elements of this to the given negative index(s)', () => {
            let collection = new Collection(["a", "b", "c", "d", "e", "f"]);
            let values_at = collection.values_at(-1, -2, -2, -7);
            expect(values_at).toEqual(["f", "e", "e", undefined]);
        });

        it('should return a collection containing the elements of the given range(s)', () => {
            let collection = new Collection(["a", "b", "c", "d", "e", "f", "g"]);
            let range = new Collection([5, 7]);
            let values_at = collection.values_at(0, [1, 2], 4, range);
            expect(values_at).toEqual(["a", "b", "c", "e", "f", "g", undefined]);

        })
    });

    describe('zip', () => {
        it('should convert any argument to Collections then merges elements of this with correcsponding elements of each argument.', () => {
            let collection = new Collection([1, 2, 3, 4]);
            let a = new Collection([4, 5, 6]);
            let b = [7, 8, 9];
            let zip = collection.zip(a, b);

            expect(zip).toEqual([[1, 4, 7], [2, 5, 8], [3, 6, 9], [4, undefined, undefined]]);
            expect(zip.isCollection()).toEqual(true);
            expect(zip[0].isCollection()).toEqual(true);
            expect(zip[1].isCollection()).toEqual(true);
            expect(zip[2].isCollection()).toEqual(true);
            expect(zip[3].isCollection()).toEqual(true);
        });
        it('should return null if function is passed as an argument', () => {
            let collection = new Collection([1, 2, 3, 4]);
            let zip = collection.zip(() => {
                return this.pop
            });
            expect(zip).toBe(null);
        })
    })
});
