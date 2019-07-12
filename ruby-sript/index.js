// import * as helpers from './helpers'

class Collection extends Array {
    constructor(array) {
        // call the constructor of the Array class
        super(array.length);

        // copy the values from `array` onto `this`;
        Object.assign(this, array);
    }

    clear() {
        console.log('clear method called');
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
        let allArray = new Collection([]);

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

        let pushBack = new Collection([]);
        combos(this, int, pushBack);
        return allArray
    }

    compact() {
        let compactArray = new Collection([]);
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
        let result = new Collection([]);
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
                del_value = this.splice(i,1)[0];
            }}

        return del_value
    }
}

module.exports = Collection;
