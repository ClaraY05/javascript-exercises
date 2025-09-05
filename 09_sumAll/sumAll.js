const sumAll = function(intStart, intEnd) {
    if((!Number.isInteger(intStart))||
        (!Number.isInteger(intEnd))||
        (intStart <0)||
        (intEnd <0))
        return 'ERROR';

    let sum = 0;
    let bigger, smaller;
    if(intStart < intEnd){
        bigger=intEnd;
        smaller=intStart;}
    else{
        bigger=intStart;
        smaller=intEnd;}

    for(let i = smaller; i <= bigger; i++){
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
