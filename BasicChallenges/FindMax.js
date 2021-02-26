// Find max - Given an array with multiple values, write code that returns the maximum number in the array. (e.g. for [-3,3,5,7] max is 7)
number = 0;
function findMax(arr){
    for(var i=1; i<arr.length; i++){
        if (arr[i] > number){
            number = arr[i]
        }
           }

    console.log("The Max number in the array is: " + number)


}

var arrayMax = [1,2,3,4,77,8,9]

findMax(arrayMax)