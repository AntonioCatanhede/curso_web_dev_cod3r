const nome = 'Rebeca'
const concatenacao = 'Olá' + nome + '!'

// para usar template string usa-se crase(back tick)

const template = `
olá 
${nome}!`

console.log(template)
console.log(`1 + 1 = ${1+1}`)


//funcao arrow que passa texto para maiusculas
const up = texto => texto.toUpperCase()

//outro exemplo com back tick
console.log(`Ei... ${up('cuidado')}!`)