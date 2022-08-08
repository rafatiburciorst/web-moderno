const produtos = [
    { nome: 'Notebook', preco: 2499, fragil: true },
    { nome: 'iPad Pro', preco: 4199, fragil: true },
    { nome: 'Copo de Vidro', preco: 12.49, fragil: true },
    { nome: 'Copo de Plástico', preco: 18.99, fragil: false }
]

// console.log(produtos.filter(function(p) {
//     return false
// }))

// const caro = produto => produto.preco >= 500
// const fragil = produto => produto.fragil

// console.log(produtos.filter(caro).filter(fragil))

// const caro = (p) => {
//     return p.fragil = true
// }

// console.log(produtos.filter(caro));

const pessoas = [
    { nome: 'Rafael', idade: 35, adulto: true },
    { nome: 'Matheus', idade: 15, adulto: false },
    { nome: 'Daniel', idade: 8, adulto: false },
    { nome: 'Tatiane', idade: 35, adulto: true },
]

const adulto = (p) => {
    return p.adulto
}

const idade = (i) => {
    return i.idade > 30
}

console.log(pessoas.filter(idade));