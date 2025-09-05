const removeFromArray = function(inputArray, ...removeItem) {
    for (const rItem of removeItem){
        inputArray = inputArray.filter(item => (item === rItem) ?null: item);
    }
    return inputArray;
};

// Do not edit below this line
module.exports = removeFromArray;
