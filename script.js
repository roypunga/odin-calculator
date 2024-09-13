
const button0 = document.querySelector('.zero')
const button1 = document.querySelector('.one')
const button2 = document.querySelector('.two')
const button3 = document.querySelector('.three')
const button4 = document.querySelector('.four')
const button5 = document.querySelector('.five')
const button6 = document.querySelector('.six')
const button7 = document.querySelector('.seven')
const button8 = document.querySelector('.eight')
const button9 = document.querySelector('.nine')

const buttonPlus = document.querySelector('button.plus')
const buttonMinus = document.querySelector('button.minus')
const buttonDivide = document.querySelector('button.divide')
const buttonMultiply = document.querySelector('button.multiply')
const buttonEquals = document.querySelector('button.equals')
const buttonPoint = document.querySelector('button.point')
const buttonBackspace = document.querySelector('button.backspace')
const buttonPositiveNegative = document.querySelector('button.positiveNegative')
const buttonAc = document.querySelector('button.ac')

const opButtons = document.querySelectorAll('.op')
const numButtons = document.querySelectorAll('.num')

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

let input = '';
let num1 = 0;
let num2;
let operator;



numButtons.forEach((num) => {

    num.addEventListener('click', ()=>{

        input = input + num.innerHTML
            
    })

})



opButtons.forEach((op) =>{

    op.addEventListener('click', ()=>{

        operator = op.innerHTML

        result = operate(num2, operator, num1)

        num2 = num1;

        num1 = input * 1
        

        input = ''

    })

})