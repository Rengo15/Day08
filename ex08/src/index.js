var total = 0;

function funcWithArg(digit){


    return (digit + 9)/5;

}
funcWithArg(6);
total += funcWithArg(6);
console.log(total)
module.exports = funcWithArg;