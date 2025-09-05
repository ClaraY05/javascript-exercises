const repeatString = function(statement, numRepeat) {
    let returnString = "";
    if(numRepeat <0){
        return 'ERROR';
    }
    for(let i = 0; i < numRepeat; i++){
        returnString += statement;
    }

    return returnString;
};

// Do not edit below this line
module.exports = repeatString;
