// Greater than Y - Given value of Y, write code that takes an array and returns the number of values that are greater than Y. For example if arr = [1, 3, 5, 7] and Y = 3, your code will log 2. (There are two values in the array greater than 3, which are 5, 7).
var y = 4;
function greaterThanY(arr){
    for(var i=0; i<=arr.length; i++){
        if(arr[i] > y){
            console.log(arr[i] + " Is greater than Y: " + y)
        }
    }


}


var array =[1,2,3,17,19]
greaterThanY(array)