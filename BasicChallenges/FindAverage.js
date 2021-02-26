// Find average - Given an array with multiple values, write code that returns the average of the values in the array. (e.g. for [1,3,5,7,20] average is 7.2)
sum = 0;
avg = 0;

function findAverage(arr){
    for(var i =1; i<arr.length; i++){
        sum = sum + arr[i];
        
    }
avg = sum / arr.length;
console.log("The Average for the array is: " + avg)
}

var arrayAvg = [1,2,3,4,5]
findAverage(arrayAvg)