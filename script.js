const val=document.getElementById('result');
let currentValue='';
let previousValue='';
let operation='';

function appendNumber(num){
    currentValue+=num;
    val.value=currentValue;
}
function setOperation(op){
    if(currentValue===" ")return;
    if(previousValue!==" ")calculateResult();
    
    operation=op;
    val.value=operation;
    previousValue=currentValue;
    currentValue=" ";
}
function calculateResult(){
    let result;
    const curr=parseFloat(currentValue)
    const prev=parseFloat(previousValue)
    if(isNaN(prev)||isNaN(curr)) return;
    switch(operation){
        case '+':
            result = prev + curr;
            break;
        case '-':
            result = prev - curr;
            break;
        case '*':
            result = prev * curr;
            break;
        case '/':
            result = prev / curr;
            break;
        default:
            return;
    }
    currentValue=result;
    operation = '';
    previousInput = '';
    val.value = result;
}
function clearDisplay(){
    currentValue = '';
    previousValue = '';
    operation = '';
    val.value = 0;

}


