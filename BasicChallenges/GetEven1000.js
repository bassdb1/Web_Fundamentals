// Get even 1000 - Write code that would get the sum of all the even numbers from 1 to 1000.  You may use a modulus operator for this exercise.
var sum = 0;

for (var i = 1; i <=1000; i++ ){
    if (i % 2 === 0){
        sum = sum + i;
              
    }
       
}
console.log("The sum for all even numbers from 1 to 1000 = " + sum)