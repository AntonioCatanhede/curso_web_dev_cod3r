function teste1(num){
    if (num > 7)
        console.log(num)

    console.log('Final\n') 
    
}
/*Como o js ignora identacao, o codigo acima equivale a:
function teste1(num){
    if (num > 7)
        console.log(num) //so a primeira linha de codigo esta associada ao if
        console.log('Final'
*/

teste1(6)
teste1(8)

function teste2(num){
//qualquer numero será impresso.
//a sentenca de codigo associada ao if é só o ';' 
    if(num > 7);{  
        console.log(num)
    }
}

teste2(6)
teste2(8)