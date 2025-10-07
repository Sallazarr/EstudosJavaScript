const personagens = [
  { nivel: 42, nome: "Thrall", raca: "Orc", classe: "Xamã" },
  { nivel: 28, nome: "Garrosh", raca: "Orc", classe: "Guerreiro" },
  { nivel: 35, nome: "Varok", raca: "Orc", classe: "Guerreiro" },
  { nivel: 35, nome: "Uther", raca: "Humano", classe: "Paladino" },
  { nivel: 26, nome: "Jaina", raca: "Humano", classe: "Maga" },
  { nivel: 39, nome: "Tyrande", raca: "Elfo Noturno", classe: "Sacerdotisa" },
  { nivel: 29, nome: "Muradin", raca: "Anão", classe: "Guerreiro" },
]
//sem utilizar map
// console.log("Filtrando nomes sem o Map")
// for (let i = 0; i <personagens.length; i++){
//     nomes.push(personagens[i].nome)
// }




// map: permite obter um novo array a partir de um array existenste

const nomes = personagens.map(function (personagem){
    return personagem.nome
})
console.log("Utilizando Map para criar um array com os nomes")
console.log(nomes)

// filter: permite obter um novo array contendo apenas elementos específicos de um array existente

//sem utilizar o filter
// const orcs = []
// for (let i = 0; i < personagens.length; i++) {
//     if(personagens[i].raca === "Orc"){
//         orcs.push(personagens[i])        
//     }
// }
const orcs = personagens.filter(function(personagem){
    return personagem.raca === "Orc"
})
console.log("Filtrando apenas a raça Orc")
console.log(orcs)

// reduce: serve para reduzir um array existente a um valor final qualquer,
// passando um valor entre cada iteração sobre esse array e retornando ele no final

const nivelTotal = personagens.reduce(function(valorAcumulado, personagem){
    return valorAcumulado + personagem.nivel
}, 0)

console.log("Reduzindo array com Reduce: Somando Níveis")
console.log(nivelTotal)


const racas = personagens.reduce(function(valorAcumulado, personagem){
    if (valorAcumulado[personagem.raca]){
        valorAcumulado[personagem.raca].push(personagem)
    } else {
        valorAcumulado[personagem.raca] = [personagem]
    }

    return valorAcumulado
}, {})

console.log("Reduzindo array com Reduce: Agrupando raças em objetos")
console.log(racas)

// sort: ordena os elementos de um array a partir de comparações entre duplas de elementos
// Sort altera o array principal
// Usar Slice para não alterar o array principal
const personagensOrdenados = personagens.slice().sort(function(a, b){
    return b.nivel - a.nivel //Ordem decrescente
    // return a.nivel - b.nivel Ordem crescente
})


console.log("Ordenando array baseado no nível utilizando o Sort")
console.log(personagens)
console.log(personagensOrdenados)