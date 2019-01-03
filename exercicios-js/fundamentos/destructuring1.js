const pessoa = {
    nome: 'Ana',
    idade: 5,
    endereco:{
        logradouro: 'Rua ABC',
        numero: 1000
    }
}

// aqui estou tirando da estrutura pessoa
// (neste caso, um objeto), duas variaveis
const {nome, idade} = pessoa 
console.log(nome, idade)
 
const {nome:n, idade:i} = pessoa

console.log(n, i)

//tirando variaveis que nao existem;
//aqui se bemHumorado retornaria 'Undefined'
//caso true nao tivesse sido definido como padrao
const {sobrenome, bemHumorado = true} = pessoa
console.log(sobrenome, bemHumorado)

//tirando de um objeto dentro do objeto
const {endereco: {logradouro, numero, cep}} = pessoa
console.log(logradouro, numero, cep) 

