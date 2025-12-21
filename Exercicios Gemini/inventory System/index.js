const form = document.getElementById('backpackForm')
const input = document.getElementById('itemInput')
const ul = document.getElementById('inventoryList')
let liRow = 0

form.addEventListener('submit', (ev) => {
    ev.preventDefault() // OBRIGATÓRIO: Impede a página de recarregar

    const itemLi = document.createElement('li')
    itemLi.innerText = input.value
    itemLi.id = `id${liRow++}`
    
    itemLi.addEventListener('click', () => itemLi.remove())

    ul.appendChild(itemLi)
    input.value = ''
    input.focus()
})