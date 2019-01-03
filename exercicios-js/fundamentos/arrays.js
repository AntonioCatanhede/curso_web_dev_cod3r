const valores = [7.7,8.9,6.3,9.3]


console.log(valores[0], valores[3])
console.log(valores[4]) // nao da erro
                        // dá 'udefined'

// javascript -> array heterogeneo e sem tamanho fixo

// cria 7 posicoes; as 6 primeiras sao vazias
// a ultima eh atribuida o valor dez
valores[10] = 10 

console.log(valores)

console.log(valores.length)

valores.push({id: 3}, false, null, 'teste')
console.log(valores)

valores.pop()
console.log(valores)
valores.pop()
console.log(valores)

delete valores[0]
console.log(valores)

console.log(typeof valores)
