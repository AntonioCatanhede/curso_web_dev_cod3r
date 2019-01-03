//em js, objetos sao pares chave-valor
//objetos sao dinamicamente definidos

const prod1 = {}

//criando atributos
prod1.nome = 'Celular Ultra Mega'
prod1.valor = 4998.90


//outra forma de criar atributos
prod1['Desconto Legal'] = 0.40 //evitar atributos com espaço (aqui eh so pra demonstrar msm)
console.log(prod1)

const prod2 = {
    nome: 'Camisa Polo',
    preco: 79.80
}

console.log(prod2)