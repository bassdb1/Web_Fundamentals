// Iterate an array - Write code that returns the sum of all the values within an array. (e.g. [1,2,5] returns 8. [-5,2,5,12] returns 14).
var sum = 0; 
function iterateAnArray(arr){
    for(var i=0; i<arr.length; i++){
        sum = sum + arr[i];
    }
    console.log("The sum of the array is: " + sum)
}

var array = [15,18,19,20]
iterateAnArray(array)
