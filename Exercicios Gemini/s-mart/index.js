// Simulação do Banco de Dados
const produtos = [
    { nome: "Serra Elétrica", tipo: "arma", preco: 200 },
    { nome: "Shemp's Beer", tipo: "comida", preco: 15 },
    { nome: "Escopeta", tipo: "arma", preco: 350 },
    { nome: "Sanduíche", tipo: "comida", preco: 10 },
    { nome: "Mão de Metal", tipo: "equipamento", preco: 500 },
    { nome: "Machado", tipo: "arma", preco: 120 }
]

const cart = []

// Elemento da tela
const listaUl = document.getElementById('prateleira')
const allBtn = document.getElementById('btnTodos')
const gunsBtn = document.getElementById('btnArmas')
const foodBtn = document.getElementById('btnComida')
const cartList = document.getElementById('carrinho-lista')
const cartValue = document.getElementById('total')

// SEU CÓDIGO COMEÇA AQUI...

function showProducts(productsArray){
    listaUl.innerHTML = ''
    productsArray.forEach(product => {
        const {nome, preco, tipo} = product
        const li = document.createElement('li')
        li.innerText = `Nome: ${nome} - Preço: R$${preco} `

        const button = document.createElement('button')
        button.innerText = '+' 

        button.addEventListener('click', (ev) =>{
            cart.push(product)
            sum(cart)
            renderCart(cart)
        })

        li.appendChild(button)
        listaUl.appendChild(li)
    })

}

function renderCart (cartItens){
    cartList.innerHTML = ''
    cartItens.forEach(cartProduct => {
    const {nome, preco, tipo} = cartProduct
    const li = document.createElement('li')
    li.innerText = `Nome: ${nome} - Preço: R$${preco}`   
    cartList.appendChild(li)
    })
}


showProducts(produtos)

allBtn.addEventListener('click', (ev) =>{
    showProducts(produtos)
})

gunsBtn.addEventListener('click', (ev) =>{
    const gunslist = produtos.filter(({tipo}) => tipo === 'arma') 

    showProducts(gunslist)
})

foodBtn.addEventListener('click', (ev) =>{
    const foodList = produtos.filter(({tipo}) => tipo === 'comida')
    
    showProducts(foodList)
})

function sum(cart){
    const total = cart.reduce((accum, product) => {
        return accum + product.preco
    }, 0)

    cartValue.innerText = `R$ ${total},00`
}

