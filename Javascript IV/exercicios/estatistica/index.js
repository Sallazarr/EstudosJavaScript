const media = (...numbers) => {
    const somaTotal = numbers.reduce((accum, num) => accum + num, 0)
    const divisao = somaTotal / numbers.length
    return divisao

}   

console.log(media(2, 6, 4))

const mediaPonderada = (...itens) => {
    const somaTotal = itens.reduce((accum, item) => accum + (item.n * item.p), 0)

    const somaPeso = itens.reduce((accum, item) => accum + item.p, 0)

    const divisao = somaTotal / somaPeso
    return divisao
  
}


console.log(mediaPonderada({ n: 7, p: 2}, { n: 9, p: 5 }, { n: 3, p: 1 })) 


const mediana = (...numbers) => {
    const orderedNumbers = [...numbers].sort((a,b) => a - b)

    const middle = Math.floor(orderedNumbers.length / 2)

    //  Ímpar
    if (orderedNumbers.length % 2 !== 0){
        return orderedNumbers[middle]
    } else {
        const first = orderedNumbers[middle - 1]
        const second = orderedNumbers[middle]

        return media(first, second) 
    }
}

// Teste Impar
console.log(mediana(2, 4, 7)) // Deve dar 4

// Teste Par (2, 4, 7, 10) -> Meio é 4 e 7 -> Média 5.5
console.log(mediana(2, 4, 7, 10))

const moda = (...numbers) => {
    const list = numbers.map(num => [
        num,
        numbers.filter(n => num === n).length
    ])

    list.sort((a, b) => b[1] - a[1])

    return list[0][0]
}


console.log(moda(1, 1, 5, 4, 9, 7, 4, 3, 5, 2, 4, 0, 4))