const funcsB = []

for (let i=0; i<10; i++){ //a funcao criada 'lembrará' do valor de i; CLOJURE!!!

    funcsB.push(function(){
        console.log(i)
    }) //adicionando funcoes anonimas ao array
}

funcsB[2]()
funcsB[8]()