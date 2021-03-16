var sum = 0;

function addThree(){
    sum = sum +3;
}
function addFive(){
    sum = sum +5;
}
addThree();
console.log(sum);
addFive();
console.log(sum);
//Only change code below this line

// Only change code above this line 

module.exports ={addThree, addFive};