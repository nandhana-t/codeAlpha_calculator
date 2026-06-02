//display number in text box

function displayNumber(num){
    result.value+=num
}

//clear text box

function clearBox(){
    result.value=""
}

//evaluate expression

function evaluateExp(){
   
    //method 1

    exp=result.value
    output=eval(exp)
    result.value=output

    //method 2

    result.value=eval(result.value)
}

//remove last item from text box

function removelastitem(){
    result.value=result.value.slice(0,-1)
}


