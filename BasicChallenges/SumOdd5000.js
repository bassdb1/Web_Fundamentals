// Sum odd 5000 - Write code that returns the sum of all the odd numbers from 1 to 5000. (e.g. 1+3+5+...+4997+4999).

var sum = 0;
for(var i=1; i<=5000; i++){
    if (i % 2 > 0) {
        sum = sum + i;
    }
 
}

console.log("The sum of all odd numbers from 1 to 5000 = " + sum)