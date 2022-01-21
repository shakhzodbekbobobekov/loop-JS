const cricle = document.querySelector('.cricle')
const kvadrat = document.querySelector('.kvadrat')
const parallelogram = document.querySelector('.parallelogram')
const replay = document.querySelector('.replay')


cricle.addEventListener('click', () => {
    cricle.style.backgroundColor = 'crimson'
    cricle.style.color = 'white'
    cricle.innerHTML = 'Keyingisi =>'
    
    parallelogram.style.backgroundColor = 'aqua'
    parallelogram.style.color = 'crimson'
    kvadrat.style.backgroundColor = 'aqua'
    kvadrat.style.color = 'crimson'
})

kvadrat.addEventListener('click', () => {
    cricle.style.backgroundColor = 'aqua'
    cricle.style.color = 'crimson'
    parallelogram.style.backgroundColor = 'aqua'
    parallelogram.style.color = 'crimson'
    
    kvadrat.innerHTML = 'Yana Keyingisi :)'
    kvadrat.style.backgroundColor = 'crimson'
    kvadrat.style.color = 'white'
})

parallelogram.addEventListener('click', () => {
    kvadrat.style.backgroundColor = 'aqua'
    kvadrat.style.color = 'crimson'
    cricle.style.backgroundColor = 'aqua'
    cricle.style.color = 'crimson'
    
    parallelogram.innerHTML = 'Yana Keyingisi =>'
    parallelogram.style.backgroundColor = 'crimson'
    parallelogram.style.color = 'white'
})