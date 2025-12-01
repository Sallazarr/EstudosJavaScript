function addPlayer(){
    const position = document.getElementById('position').value
    const name = document.getElementById('name').value
    const number = document.getElementById('number').value

    const confirmation = confirm("Escalar " + name + " camisa " + number + " como " + position + "?")

    if (confirmation){
        const playerUl = document.getElementById('playerUl')
        const playerItem = document.createElement('li')

        playerItem.id = "player-" + number
        playerItem.innerText = position + ": " + name + " (" + number +")"

        playerUl.append(playerItem)

        document.getElementById('position').value = ""
        document.getElementById('name').value = ""
        document.getElementById('number').value = ""
    }

}

function removePlayer(){
    const number = document.getElementById('numberRemove').value
    const playerToRemove = document.getElementById("player-" + number)

    const confirmation = confirm("Deseja remover o jogador " + playerToRemove.innerText)

    if(confirmation){
        document.getElementById('playerUl').removeChild(playerToRemove)
        document.getElementById('numberRemove').value = ""
    }


}

