const input = document.getElementById('screamInput')
const section = document.getElementById('screamSection')
document.getElementById('scream').addEventListener('click', (ev) =>{
    
    const value = input.value
    const capitalized = `${value.toUpperCase()}!!!`
    
    console.log(capitalized)

    const h2 = document.createElement('h2')
    h2.innerText = capitalized

    section.append(document.createElement('br'), h2)
    input.value = '' // Limpa o campo de texto
    input.focus()    // Coloca o cursor piscando lá de novo
} )



