function mathTest(x, y){
// Write code below this line

// Write code above this line
    if(x<0 || y<0){
        return;
// Write code below this line

// Write code above this line
    }
    return Math.round(Math.pow(Math.sqrt(x)+ Math.sqrt(y),2));
// Write code below this line

// Write code above this line

}
console.log(mathTest(2,2));
console.log(mathTest(2,2));
console.log(mathTest(-2,2));
console.log(mathTest(2,-2));
console.log(mathTest(2,8));
console.log(mathTest(3,3));
console.log(mathTest(0,0));
mathTest();


module.exports=mathTest;