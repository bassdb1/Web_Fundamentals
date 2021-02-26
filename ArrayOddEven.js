function odd_Even(oddEven_array){
    var odds = 0;
    var evens = 0;
    var answer;
    for(var i=0; i<=oddEven_array.length; i++){
        if(oddEven_array[i] % 2 == 0){
            evens += oddEven_array[i];
        }
        else{
            odds += oddEven_array[i];
        }
        
    }

    if (odds > evens){
        answer = ("Odds are greater than Evens.  Sum = " + odds)
        return answer
    }
    else{
        answer = ("Evens are greater than Odds.  Sum = " + evens)
        return answer
    }
}

var oddEven_array = [1, 3, 77, 96, 45,22];
answer = odd_Even(oddEven_array);

console.log(answer)
