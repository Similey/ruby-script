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

    combination(int) {}

}

let collection = new Collection([1, 2, 3, 4]);
collection.combination(2);
console.log(collection);


// module.exports = {
//     Collection
// };
