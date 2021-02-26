// Array odd - Write code that would return an array of all the odd numbers between 1 to 50. (ex. [1,3,5, .... , 47,49]). Hint: Use 'push' method.
var oddArray = [];
function arrayOdd(arr){
    for(var i=0; i<arr.length; i++){
        if(arr[i] % 2 > 0){
            oddArray.push(arr[i]);
            
        }
    }
       
}
var array = [1,2,3,4,5]
arrayOdd(array);
