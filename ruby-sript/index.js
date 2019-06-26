// import * as helpers from './helpers'
const helpers = require('./helpers');

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

    collect(func) {
        let collectedArray = this.slice();
        for (let i = 0; i < collectedArray.length; i++) {
            collectedArray.splice(i, 1, func(collectedArray[i]))
        }

        return collectedArray
    }

    combination(int) {
        let allArray = [];

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

        combos(this, int, []);
        return allArray
    }

    compact() {
        let compactArray = [];
        for (let i = 0; i < this.length; i++) {
            if (this[i] !== null && this[i] !== undefined) {
                compactArray.push(this[i])
            }
        }
        return compactArray
    }

}

module.exports = Collection;
