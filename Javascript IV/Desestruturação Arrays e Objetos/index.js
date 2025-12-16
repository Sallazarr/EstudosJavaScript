const person = {
    name: "Luke",
    job: "Farmer",
    parents: ["Anakin", "Padme"]
}

//Normalmente
const name = person.name

//Desestruturação: é a mesma coisa que o de cima, mas para o job, podemos passar mais de uma propriedade também
const { job, parents } = person

console.log(name, job, parents)


const [father, mother] = parents

console.log(father, mother)

function createUser({ name, job, parents }){
    const id = Math.floor(Math.random() * 9999)
    return {
        id,
        name,
        job,
        parents
    }
}

const luke = createUser(person)

console.log(luke)