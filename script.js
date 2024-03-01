const boba = document.querySelectorAll('.button')

const numbers =  [
    {'num1' : document.getElementById('num1')},
    {'num2' : document.getElementById('num2')},
    {'num3' : document.getElementById('num3')},
    {'num4' : document.getElementById('num4')},
    {'num5' : document.getElementById('num5')},
    {'num6' : document.getElementById('num6')},
    {'num7' : document.getElementById('num7')},
    {'num8' : document.getElementById('num8')},
    {'num9' : document.getElementById('num9')},
]

document.addEventListener('click' , (Event) => {
    const number = Event.target.id
    console.log(number)

    console.log(numbers[1])
})

console.log(boba)
