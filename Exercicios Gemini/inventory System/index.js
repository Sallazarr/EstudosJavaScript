const input = document.getElementById('itemInput')
const ul = document.getElementById('inventoryList')
let liRow = 0

document.getElementById('addItem').addEventListener('click', (ev) =>{
    ev.preventDefault()


    const idIndex = liRow
    liRow ++
    const itemLi = document.createElement('li')
    itemLi.id = `id${idIndex}`
    itemLi.innerText = input.value
    itemLi.addEventListener('click', (ev) => {
        itemLi.remove()
    })

    ul.appendChild(itemLi)
    console.log(itemLi)
    input.value = ''
    input.focus()
})
