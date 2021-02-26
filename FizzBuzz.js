// Write a short program that prints each number from 1 to 100 on a new line. 
// For each multiple of 3, print "Fizz" instead of the number. 
// For each multiple of 5, print "Buzz" instead of the number. 
// For numbers which are multiples of both 3 and 5, print "FizzBuzz" instead of the number.

function fizzBuzz(){
    for(var i=1; i<=100; i++){
        // if you could have a remainder of 0 with 3 and 5
        if(i % 3 === 0 && i % 5 === 0){
            console.log("Fizz Buzz")
         }
         // divisible by 3 evenly
         else if (i % 3 === 0){
             console.log("Fizz")
         }
         // divisible by 5 evenly
         else if (i % 5 === 0){
             console.log("Buzz")
         }
         else {
             console.log(i)
         }
    }
}

fizzBuzz()