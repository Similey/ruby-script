// import * as helpers from './helpers'

const Collection = (array) => {
    return new Collect(array);
};

class Collect extends Array {
    constructor(array) {
        // call the constructor of the Array class
        super(array.length);

        // copy the values from `array` onto `this`;
        Object.assign(this, array);
    }

    isCollection() {
        return true;
    }

    clear() {
        this.length = 0;
    }

    collect(callback) {
        let collectedArray = this.slice();
        if (callback === undefined || callback === null) {
            return collectedArray;
        }
        for (let i = 0; i < collectedArray.length; i++) {
            collectedArray.splice(i, 1, callback(collectedArray[i]))
        }

        return collectedArray
    }

    combination(int) {
        let allArray = new Collect([]);

        let combos = (array, iterations, pushBack, startIndex = 0, exitIndex = iterations) => {
            // pushBack stack
            if (pushBack.length === iterations)
                allArray.push(pushBack.slice(0, iterations));

            if (exitIndex < 0) return;
            for (let i = startIndex; i < array.length; i++) {
                pushBack.push(array[i]);
                combos(array, iterations, pushBack, i + 1, exitIndex - 1);
                pushBack.pop();
            }
        };

        let pushBack = new Collect([]);
        combos(this, int, pushBack);
        return allArray
    }

    compact() {
        let compactArray = new Collect([]);
        for (let i = 0; i < this.length; i++) {
            if (this[i] !== null && this[i] !== undefined) {
                compactArray.push(this[i])
            }
        }
        return compactArray
    }

    concat(array1, array2 = null) {
        for (let i = 0; i < array1.length; i++) {
            this.push(array1[i])
        }
        if (array2 !== null) {
            for (let i = 0; i < array2.length; i++) {
                this.push(array2[i])
            }
        }
    }

    count(element = null) {
        if (element === null) {
            let count = 0;
            for (let i = 0; i < this.length; i++) {
                count++;
            }
            return count
        } else if (Array.isArray(element)) {
            let count = 0;
            for (let i = 0; i < this.length; i++) {
                if (Array.isArray(this[i]) && this[i].length === element.length) {
                    let match;
                    for (let j = 0; j < this[i].length; j++) {
                        this[i][j] === element[j] ? match = true : match = false;
                        if (match === false) break;
                    }
                    if (match === true) count++;
                }
            }
            return count;
        } else if (typeof element === 'function') {
            let count = 0;
            for (let i = 0; i < this.length; i++) {
                if (element(this[i])) count++
            }
            return count;
        } else {
            let count = 0;
            for (let i = 0; i < this.length; i++) {
                if (this[i] === element) count++;
            }
            return count;
        }
    }

    cycle(int, callback = null) {
        if (int < 0 || this.length === 0) return null;
        let result = new Collect([]);
        for (let i = 0; i < int; i++) {
            for (let j = 0; j < this.length; j++) {
                if (callback === null) {
                    result.push(this[j])
                } else {
                    result.push(callback(this[j]))
                }
            }
        }
        return result;
    }

    delete(value, callback = null) {
        let result;
        for (let i = 0; i < this.length; i++) {
            if (this[i] === value) {
                result = this[i];
                this.splice(i, 1)
            }
        }

        if (result === undefined) {
            return callback === null ? null : callback();
        } else {
            return result;
        }
    }

    delete_at(index) {
        if (index > this.length) return null;
        let del_value;
        for (let i = 0; i < this.length; i++) {
            if (i === index) {
                del_value = this.splice(i, 1)[0];
            }
        }

        return del_value
    }

    delete_if(callback) {
        for (let i = 0; i < this.length; i++) {
            let result = callback(this[i]);
            if (result === true) this.splice(i, 1)
        }
        return this;
    }


    dig(...indices) {
        // returning null if any intermediate step is null
        if (this[indices] === null) return null;

        // when we get to the end of indices we are done digging.
        if (indices.length === 1) return this[indices];

        // remove current index from indices
        let digValue = typeof (this) === "object" ? this[indices[0]] : this;
        let indexes = indices.splice(indices[0]);

        try {
            // create a Collection that has been dug out of 'this'
            let collection = new Collect(digValue);

            return collection.dig(...indexes);
        } catch (err) {
            // Will get type error if we try to instantiate a Collection with a non array value.
            throw 'While digging an object was found from which dig could not be called'

        }
    }

    drop(value) {
        if (typeof (value) !== 'number' || value < 0) throw 'Argument Error';

        let copy = this;
        for (let i = 0; i < value; i++) {
            copy.shift();
        }
        return copy;
    }

    drop_while(callback) {
        let copy = this;

        for (let i = 0; i < copy.length; i++) {
            let result = callback(i);
            if (result === null || result === false) break;
            copy.shift();
        }
        return copy;
    }

    each(callback = null) {
        if (callback === null) return this;
        for (let i = 0; i < this.length; i++) {
            callback(this[i])
        }

        return this;
    }

    each_index(callback = null) {
        if (callback === null) return this;
        for (let i = 0; i < this.length; i++) {
            callback(i)
        }
        return this;
    }

    each_with_index(callback = null) {
        if (callback === null) return this;

        for (let i = 0; i < this.length; i++) {
            callback(this[i], i)
        }
        return this;
    }

    empty() {
        return this.length === 0;
    }

    eql(value) {
        let result = true;
        if (this === value) result = false;
        if (this.length !== value.length) result = false;
        for (let i = 0; i < this.length; i++) {
            if (this[i] !== value[i]) result = false
        }
        return result;
    }

    fetch(index, opt = null) {
        let i = index;
        //Handling negative integers
        if (i < 0) {
            i = this.length + index;
        }

        if (i >= this.length) {
            if (opt === null) {
                throw `${i} is out of bounds`;
            } else if (typeof (opt) === 'function') {
                opt(i);
            } else {
                return opt;
            }
        }
        return this[i]
    }

    fill(value, start = 0, finish = this.length) {
        // handle when .fill(range, callback) syntax is used
        if (typeof (value) === 'number' && typeof (start) === 'function') {
            let s = start;
            let v = value;
            value = s;
            start = v;
        }

        if (typeof (start) !== 'number' && typeof (start) !== 'function') {
            // when a range is passed in
            finish = start[1];
            start = start[0];
        } else {
            start = start < 0 ? this.length + start : start;
        }

        if (finish < 0) return;

        for (let i = 0; i < this.length; i++) {
            if (i >= start && i <= finish) {
                if (typeof (value) !== 'function') {
                    this[i] = value;
                } else {
                    this[i] = value(i);
                }
            }
        }
        return value;
    }

    find_index(value) {
        if (value === undefined) return this;
        for (let i = 0; i < this.length; i++) {
            if (typeof value === 'function') {
                if (value(this[i])) return i;
            } else {
                if (this[i] === value) return i;
            }
        }

        return null
    }

    first(value = null) {
        if (value === null) {
            return this[0];
        } else {
            let result = new Collect([]);
            for (let i = 0; i < value; i++) {
                result.push(this[i])
            }
            return result.compact();
        }
    }

    flatten(stop = -1, result = new Collect([]), count = 0) {
        for (let i = 0; i < this.length; i++) {
            if (Array.isArray(this[i])) {
                let recurse = new Collect(this[i]);
                if (count === stop) {
                    result.push(this[i]);
                    break
                }
                recurse.flatten(stop, result, count + 1)
            } else (
                result.push(this[i])
            );
        }
        return result
    }

    include(value) {
        for (let i = 0; i < this.length; i++) {
            if (Array.isArray(value)) {
                let collection = new Collect(value);
                if (collection.eql(this[i])) return true;
            }
            if (value === this[i]) return true;
        }

        return false
    }

    index(value) {
        if (value === undefined) return this;
        for (let i = 0; i < this.length; i++) {
            if (typeof value === 'function') {
                if (value(this[i])) return i
            } else {
                if (value === this[i]) return i
            }
        }
        return null;
    }

    // include(value){
    //     for(let i = 0; i < this.length; i++){
    //         if(this[i] === value) return true;
    //     }
    // }

    unshift(...indices) {
        let temp =  Collection([...this]);
        this.clear();
        //indices.length = 1
        for (let j = 0; j < indices.length; j++) {
            this.push(indices[j]);
        }
        for (let i = 0; i < temp.length; i++) {
            this.push(temp[i]);
        }
        return this;
    }

    values_at(...indices) {
        let values = [];
        let result =  Collection([]);
        for (let i = 0; i < indices.length; i++) {
            if (typeof indices[i] === 'number') {
                values.push(indices[i])
            } else {
                let start = indices[i][0];
                let finish = indices[i][1];
                while (start <= finish) {
                    values.push(start);
                    start++
                }
            }
        }

        for (let i = 0; i < values.length; i++) {
            values[i] < 0 ? result.push(this[this.length + values[i]]) : result.push(this[values[i]]);
        }
        return result;
    }

    zip(...lists) {
        if (typeof (lists[0]) === 'function') return null;

        let result = Collection([]);
        for (let i = 0; i < this.length; i++) {
            let c = Collection([]);
            c.push(this[i]);
            for (let j = 0; j < lists.length; j++) {
                c.push(lists[j][i]);
            }
            result.push(c);
        }
        return result;
    }
}

module.exports = Collection;



