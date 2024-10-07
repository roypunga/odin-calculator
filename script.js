
const buttonEquals = document.querySelector('button.equals')
const buttonBackspace = document.querySelector('button.backspace')
const buttonPositiveNegative = document.querySelector('button.positiveNegative')
const buttonAc = document.querySelector('button.ac')

const inputDiv = document.querySelector('div.input')
const operationDiv = document.querySelector('div.operation')

const opButtons = document.querySelectorAll('.op')
const numButtons = document.querySelectorAll('.num')

let input = '';
let num1 = 0;
let num;
let operator;
let lastButtonPressedIsEquals


function operate(n1, operator, n2){
    switch(operator){
        case '+':
            return n1 + n2;

        case '-':
            return n1 - n2;

        case '*':
            return n1 * n2;

        case '/':
            if(n2 == 0){
                return "div0"
            }
            return n1 / n2;

        default:
            return "puto"
        }
}


buttonAc.addEventListener('click', ()=>{

 window.location.reload();

})

buttonBackspace.addEventListener('click', ()=>{

    input = input.substring(0, input.length - 1);
    inputDiv.textContent = input

})

buttonPositiveNegative.addEventListener('click', ()=>{
    input = input + '-'
    inputDiv.textContent = input
})

numButtons.forEach((num) => {

    num.addEventListener('click', ()=>{

        if(lastButtonPressedIsEquals){
            lastButtonPressedIsEquals = false
            num2 = null
            num1 = 0
        }

        input = input + num.innerHTML
        
        inputDiv.textContent = input
    })

})



opButtons.forEach((op) =>{

    op.addEventListener('click', ()=>{

        
        if(num2 == null){
            operator = op.innerHTML
            num2 = num1
            num1 = input * 1
            operationDiv.textContent = num1 + operator
            
            input = ''
            inputDiv.textContent = input
        }
        else if(!lastButtonPressedIsEquals){

            num2 = num1
            num1 = input *1
            lastButtonPressedIsEquals = false


            
            if(operate(num2, operator, num1) == 'div0'){
                
                inputDiv.textContent = 'NOOOOOOOOO'
                operationDiv.textContent = ''
            }
            else{
                num1 = operate(num2, operator, num1)
                operator = op.innerHTML
                operationDiv.textContent = num1 + operator
                
                
                input = ''
                inputDiv.textContent = input
            }
        }
        else{
            lastButtonPressedIsEquals = false
            operator = op.innerHTML
            if(operate(num2, operator, num1) == 'div0'){
                
                inputDiv.textContent = 'NOOOOOOOOO'
                operationDiv.textContent = ''
            }
            else{
                operationDiv.textContent = num1 + operator
                input = ''
                inputDiv.textContent = input
            }
        }

    })

})




buttonEquals.addEventListener('click', ()=>{
    num2 = num1;
    num1 = input * 1
    
    if(operate(num2, operator, num1) == 'div0'){
        inputDiv.textContent = 'NOOOOOOOOO'
        operationDiv.textContent = ''
        num1 = 0
        num2 = null
        input = ''
    }
    else{
        num1 = operate(num2, operator, num1)
        inputDiv.textContent = num1
        input = ''
        operationDiv.textContent = ''
        lastButtonPressedIsEquals = true
    }
})