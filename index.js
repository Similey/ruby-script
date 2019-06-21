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
        for (let i = 0; i < this.length; i++) {
            this.splice(i, 1, func(this[i]))
        }
    }

    combination(int) {
        let allArray = [];

        let combos = (array, iterations, pushBack, startIndex = 0, exitIndex = iterations) => {
            // pushBack stack
            if (pushBack.length === iterations)
                allArray.push(pushBack.slice(0,iterations));

            if (exitIndex < 0) return;
            for (let i=startIndex; i<array.length; i++) {
                pushBack.push(array[i]);
                combos(array, iterations, pushBack, i+1, exitIndex-1);
                pushBack.pop();
            }
        };

        combos(this, int, []);
        return allArray
    }

}

let collection = new Collection([1, 2, 3, 4, 5]);
a = collection.combination(4);
console.log(a);


// module.exports = {
//     Collection
// };
