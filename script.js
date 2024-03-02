const display = document.getElementById('display')
const numbers = document.querySelectorAll('[id *= num]')
const operadores = document.querySelectorAll('[id *= operador]')
let newNumber = true
let numberBefore;
let operador;


const operacaoPendente = () =>{
    return operador != undefined
}

const calcular = () => {
    if(operacaoPendente()){
        newNumber = true
        const currentNumber = parseFloat(display.textContent)
        switch(operador){
            case '+':
                atualizarDisplay(numberBefore + currentNumber)
                console.log(currentNumber)
                console.log(numberBefore)
            case '-':
                atualizarDisplay(numberBefore - currentNumber)
                console.log(currentNumber)
                console.log(numberBefore)
            case '*':
                atualizarDisplay(numberBefore * currentNumber)
                console.log(currentNumber)
                console.log(numberBefore)
            case '/':
                atualizarDisplay(numberBefore/currentNumber)
                console.log(currentNumber)
                console.log(numberBefore)
        }
            
    }
}



//Atualizar display, levando em considereção o varíavel newNumber sempre que alguem aperta em algum operador
const atualizarDisplay = text => {
    if(newNumber == true){
        display.textContent = text
        newNumber = false
    }
    else{
        display.textContent += text
    }
}

//Função para enviar ao 'atualizarDisplay' o número dentro dos botões da calculadora
const insertNum = (Event) =>{
    atualizarDisplay(Event.target.textContent)
}

//Função para manipular qual das operações irá ocorrer
const chooseOperator = (Event) => {
    
    if(newNumber == false){
    calcular()
    newNumber = true
    operador = Event.target.textContent
    numberBefore = parseFloat(display.textContent)
    }
   
}

//Adicionando event listeners a cada um dos números
numbers.forEach((num) => num.addEventListener('click' , insertNum))
//Adicionando event listeners a cada um dos operadores
operadores.forEach((operador) => operador.addEventListener('click' , chooseOperator))