function addPlayer(){
    const playerSection = document.getElementById("playerSection")

    const h3 = document.createElement('h3')
    h3.innerText = "Jogador"

    const ul = document.createElement('ul')

    const positionValue = document.getElementById('position')
    const positionLi = document.createElement('li')
    positionLi.innerText = positionValue.value

    const nameValue = document.getElementById('name')
    const nameLi = document.createElement('li')
    nameLi.innerText = nameValue.value

    const numberValue = document.getElementById('number')
    const numberLi = document.createElement('li')
    numberLi.innerText = numberValue.value

    ul.appendChild(positionLi)
    ul.appendChild(nameLi)
    ul.appendChild(numberLi)
    playerSection.append(h3, ul)

    positionValue.value = ""
    nameValue.value = ""
    numberValue.value = ""
}

function removePlayer(){
    const removeSection = document.getElementById('removeInput')
    const numberLabel = document.createElement('label')
    numberLabel.innerText = 'Insira o número do jogador que deseja remover: '
    const numberInput = document.createElement('input')
    numberInput.type = 'number'

    const removeConfirmation = document.createElement('button')
    removeConfirmation.innerText = "REMOVER"
    removeConfirmation.onclick = 
    
    removeSection.append(numberLabel, numberInput, removeConfirmation)

    const playerSection = document.getElementById("playerSection")
    const titles = document.getElementsByTagName('h3')
    const players = document.getElementsByTagName('ul')


}