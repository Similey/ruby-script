class Collection {
    constructor(array){
        let collection = Object.create(Array.prototype);

        collection = (Array.apply(collection, array) || collection);

        collection.clear = function() {
            while(this.length > 0){
                this.pop();
            }

            return this
        };

        return(collection);
    };
}


module.exports = {
    Collection
};
