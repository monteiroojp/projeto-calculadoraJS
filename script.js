const display = document.getElementById('display')
const numbers = document.querySelectorAll('[id *= num]')
const operadores = document.querySelectorAll('[id *= operador]')
let newNumber = true
let numberBefore;
let operador;

const atualizarDisplay = text => {
    if(newNumber == true){
        display.textContent = text
        newNumber = false
    }
    else{
        display.textContent += text
    }
}

const insertNum = (Event) =>{
    atualizarDisplay(Event.target.textContent)
}

const chooseOperator = (Event) => {
    
    if(newNumber == false){
    newNumber = true
    let numberBefore = Number(display.textContent)
    console.log(numberBefore)
    operador = Event.target.textContent
    console.log(operador)
    }
   
}

numbers.forEach((num) => {
    num.addEventListener('click' , insertNum)
})
  
operadores.forEach((operador) => operador.addEventListener('click' , chooseOperator))