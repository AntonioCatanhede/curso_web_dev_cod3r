//A notacao ponto eh muito importante em JS

console.log(Math.ceil(6.1))// instanciando um objeto da propria API do JS
console.log(Math.floor(6.1))

const obj1= {} //instanciando a partir de notacao literal
obj1.nome = 'Bola'

console.log(obj1.nome)

function Obj(nome){

    this.nome = nome //atributo publico
    this.exec = function(){
        console.log('Executando...')
    }

}

const obj2 = new Obj('Cadeira') // instanciando a partir de funcao
const obj3 = new Obj('Mesa')

console.log(obj1.nome, obj2.nome, obj3.nome)

obj3.exec()





