function createLabel(text, htmlFor){
    const label = document.createElement('label')
    label.innerText = text
    label.htmlFor = htmlFor
}

function createInput(id, value, type = 'text', placeholder = ''){
    const input = document.createElement('input')
    input.id = id
    input.value = value
    input.type = type
    input.placeholder = placeholder
}

const addTech = document.getElementById('addTech')
const stacksInput = document.getElementById('stacksInput')
const developers = []
