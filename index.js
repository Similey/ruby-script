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

        let combos = (fullArray, fullLen, pushBack, start, curLen) => {
            // pushBack stack
            if (pushBack.length === fullLen)
                allArray.push(pushBack.slice(0,fullLen));

            if (curLen < 0) return;
            for (let i=start; i<fullArray.length; i++) {
                pushBack.push(fullArray[i]);
                combos(fullArray, fullLen, pushBack, i+1, curLen-1);
                pushBack.pop();
            }
        };

        combos(this, int, [], 0, int);
        return allArray
    }

}

let collection = new Collection([1, 2, 3, 4]);
a = collection.combination(3);
console.log(a);


// module.exports = {
//     Collection
// };
